import type * as React from "react";
import { useRef } from "react";
import type { PhraseResult } from "../../../core/Checker";
import { useI18nContext, Div } from "../../index";
import CardContent, { CardContentTitle } from "../card-content/card-content";
import { useLoadParaphrasings } from "./hooks";
import { ParaphrasingContentProps as Props } from "./types";
import DiffComponent from "../diff/diff";

type AlternativeProps = Pick<Props, "phrase" | "onPhraseClick"> &
	PhraseResult["phrases"][number] & {
		reportPhrase: () => void;
	};

const Alternative: React.FC<AlternativeProps> = ({
	phrase,
	label,
	origin,
	score,
	text,
	uuid,
	onPhraseClick,
	reportPhrase,
}) => {
	// TODO: check why the last word of the sentence doesn't get replaced, too
	const handleClick = (e: React.SyntheticEvent) => {
		e.nativeEvent.stopImmediatePropagation();

		onPhraseClick({ label, origin, score, text, uuid });
		reportPhrase();
	};

	return (
		<Div className="lt-comp-paraphrasing-content__item" onClick={handleClick}>
			<DiffComponent from={phrase} to={text} />
		</Div>
	);
};

const ParaphrasingContent: React.FC<Props> = ({
	inhouseOnly,
	isAllowed: _,
	isEnabled,
	language,
	phrase: originalPhrase,
	uniqueId,
	user,
	onPhraseClick,
	reportPhrase,
}) => {
	const getMessage = useI18nContext();
	const { current: i18n } = useRef<
		Record<
			| "phrasesCardHeadline"
			| "phrasesCardSentencePrefix"
			| "synonymsCardLoading"
			| "phrasesCardNoSentence"
			| "phrasesCardNoResult"
			| "phrasesCardNotSupportedHeading"
			| "phrasesCardNotSupportedText"
			| "phrasesCardLabelFormality"
			| "phrasesCardLabelParaphrase"
			| "phrasesCardLabelFluency"
			| "phrasesCardLabelShortened"
			| "phrasesCardLabelSimplicity"
			| "phrasesCardLabelGeneral"
			| "phrasesCardConfirmationHeading"
			| "phrasesCardConfirmationButton"
			| "phrasesCardRephrasingLimitSingular",
			string
		>
	>({
		phrasesCardHeadline: getMessage("phrasesCardHeadline"),
		phrasesCardSentencePrefix: getMessage("phrasesCardSentencePrefix"),
		synonymsCardLoading: getMessage("synonymsCardLoading"),
		phrasesCardNoSentence: getMessage("phrasesCardNoSentence"),
		phrasesCardNoResult: getMessage("phrasesCardNoResult"),
		phrasesCardNotSupportedHeading: getMessage("phrasesCardNotSupportedHeading"),
		phrasesCardNotSupportedText: getMessage("phrasesCardNotSupportedText"),
		phrasesCardLabelFormality: getMessage("phrasesCardLabelFormality"),
		phrasesCardLabelParaphrase: getMessage("phrasesCardLabelParaphrase"),
		phrasesCardLabelFluency: getMessage("phrasesCardLabelFluency"),
		phrasesCardLabelShortened: getMessage("phrasesCardLabelShortened"),
		phrasesCardLabelSimplicity: getMessage("phrasesCardLabelSimplicity"),
		phrasesCardLabelGeneral: getMessage("phrasesCardLabelGeneral"),
		phrasesCardConfirmationHeading: getMessage("phrasesCardConfirmationHeading"),
		phrasesCardConfirmationButton: getMessage("phrasesCardConfirmationButton"),
		phrasesCardRephrasingLimitSingular: getMessage("phrasesCardRephrasingLimitSingular"),
	});
	const [paraphrasings, isLoading, error] = useLoadParaphrasings({
		inhouseOnly,
		language,
		phrase: originalPhrase,
		uniqueId,
		user,
	});
	const { current: title } = useRef<React.ReactNode>(<CardContentTitle>{i18n.phrasesCardHeadline}</CardContentTitle>);
	const Wrap: React.FC<React.PropsWithChildren> = ({ children }) => (
		<CardContent title={title} className="lt-comp-paraphrasing-content">
			{children}
		</CardContent>
	);

	console.log(paraphrasings);

	if (!isEnabled) {
		throw new Error("Implement");
	}

	if (isLoading) {
		return <Wrap>{i18n.synonymsCardLoading}</Wrap>;
	}

	if (error) {
		return <Wrap>{error.message}</Wrap>;
	}

	if (paraphrasings?.phrases.length === 0) {
		return <Wrap>{i18n.phrasesCardNoResult}</Wrap>;
	}

	return (
		<Wrap>
			{paraphrasings?.phrases.map((phrase) => (
				<Alternative
					{...phrase}
					phrase={originalPhrase}
					onPhraseClick={onPhraseClick}
					reportPhrase={() => reportPhrase(paraphrasings)}
					key={phrase.uuid}
				/>
			))}
		</Wrap>
	);
};

export default ParaphrasingContent;
