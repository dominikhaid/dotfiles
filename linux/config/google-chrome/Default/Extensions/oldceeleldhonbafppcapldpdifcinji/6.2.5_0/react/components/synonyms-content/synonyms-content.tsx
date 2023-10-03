import type * as React from "react";
import { useRef, useState, useMemo } from "react";
import CardContent, { CardContentTitle } from "../card-content/card-content";
import { classes } from "../../../common/utils";
import { useI18nContext, Div, Span } from "../../index";
import type { SelectionInfo } from "../../../content/inputAreaWrapper";
import type { SynonymResult } from "../../../background/synonyms";
import { useLoadSynonyms, useTitle } from "./hooks";

export interface Props {
	word: string;
	selection: Required<SelectionInfo>;
	language: string | null;
	motherLanguage: string;
	onSynonymClick: (word: string) => void;
}

type AlternativesProps = Pick<Props, "onSynonymClick"> & {
	alternatives: SynonymResult["synonymSets"][number]["synonyms"];
	moreLabel: string;
};

type SynonymProps = Pick<Props, "onSynonymClick"> & {
	word: string;
};

const Synonym: React.FC<SynonymProps> = ({ word, onSynonymClick }) => {
	const handleSynonymClick = (e: React.SyntheticEvent) => {
		e.nativeEvent.stopImmediatePropagation();
		onSynonymClick(word);
	};

	return (
		<Span className="lt-comp-synonyms-content__item__button" onClick={handleSynonymClick}>
			{word}
		</Span>
	);
};

const Alternatives: React.FC<AlternativesProps> = ({ alternatives, moreLabel, onSynonymClick }) => {
	const [showAll, setShowAll] = useState(false);
	const handleClickShowAll = () => setShowAll(true);

	return (
		<>
			{alternatives.slice(0, showAll ? alternatives.length : 3).map(({ word }, i) => (
				<Synonym key={`${word}-${i}`} word={word} onSynonymClick={onSynonymClick} />
			))}
			{showAll === false && (
				<Span className="lt-comp-synonyms-content__item__show-all" onClick={handleClickShowAll}>
					{moreLabel}
				</Span>
			)}
		</>
	);
};

const SynonymsContent: React.FC<Props> = ({ word, selection, language, motherLanguage, onSynonymClick }) => {
	const [showAll, setShowAll] = useState(false);
	const getMessage = useI18nContext();
	const { current: i18n } = useRef<
		Record<
			| "synonymsCardHeadline"
			| "synonymsCardLoading"
			| "synonymsCardGeneralError"
			| "synonymsCardNoSynonymsAvailable"
			| "synonymsCardLanguageNotSupported"
			| "synonymsCardTooltipReadText"
			| "synonymsCardMore",
			string
		>
	>({
		synonymsCardHeadline: getMessage("synonymsCardHeadline"),
		synonymsCardLoading: getMessage("synonymsCardLoading"),
		synonymsCardGeneralError: getMessage("synonymsCardGeneralError"),
		synonymsCardNoSynonymsAvailable: getMessage("synonymsCardNoSynonymsAvailable"),
		synonymsCardLanguageNotSupported: getMessage("synonymsCardLanguageNotSupported"),
		synonymsCardTooltipReadText: getMessage("synonymsCardTooltipReadText"),
		synonymsCardMore: getMessage("synonymsCardMore"),
	});
	const wordContext = useMemo(
		() => ({
			word,
			position: selection,
			beforeText: "",
			afterText: "",
		}),
		[word, selection]
	);
	const [synonyms, isLoading, _error] = useLoadSynonyms(wordContext, language, motherLanguage);
	const titleText = useTitle(word, synonyms);
	const title = <CardContentTitle prefix={i18n.synonymsCardHeadline}>{titleText}</CardContentTitle>;
	const onShowMoreClick = (e: React.SyntheticEvent) => {
		e.nativeEvent.stopImmediatePropagation();
		setShowAll(true);
	};
	const ShowMoreSynonyms =
		synonyms && synonyms.synonymSets.length > 1
			? {
					key: "show-more-synonyms",
					icon: "add-circle",
					title: i18n.synonymsCardMore,
					onClick: onShowMoreClick,
			  }
			: null;

	// TODO: visual loading state!!
	return (
		<CardContent title={title} controls={[ShowMoreSynonyms]}>
			{isLoading === false && synonyms?.synonymSets.length === 0 && (
				<Div className="lt-comp-synonyms-content__no-result">{i18n.synonymsCardNoSynonymsAvailable}</Div>
			)}
			{synonyms?.synonymSets
				.slice(0, showAll ? synonyms.synonymSets.length : 1)
				.map((synonym, i, { length }, j = length - 1) => (
					<Div
						className={classes(
							"lt-comp-synonyms-content__item",
							ShowMoreSynonyms !== null && "lt-comp-synonyms-content__item--has-control",
							i === 0 && "lt-comp-synonyms-content__item--first",
							i === j && "lt-comp-synonyms-content__item--last"
						)}
						key={synonym.title + synonym.synonyms.map(({ word, hints }) => `${word}-${hints.length}`)}
					>
						<Div className="lt-comp-synonyms-content__item__title">{synonym.title}</Div>
						<Alternatives
							alternatives={synonym.synonyms}
							moreLabel={i18n.synonymsCardMore}
							onSynonymClick={onSynonymClick}
						/>
					</Div>
				))}
		</CardContent>
	);
};

export default SynonymsContent;
