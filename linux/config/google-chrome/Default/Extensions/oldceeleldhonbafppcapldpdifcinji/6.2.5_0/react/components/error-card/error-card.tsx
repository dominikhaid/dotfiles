import type * as React from "react";
import { useRef } from "react";
import CardBase, { type Props as CardBaseProps } from "../card-base/card-base";
import { Div, Span } from "../../index";
import CardContent from "../card-content/card-content";
import { classes } from "../../../common/utils";
import LTReact, { useI18nContext } from "../../index";

export interface ErrorFix {
	text: string;
	title?: string;
	html?: string;
	type?: "highlight" | "remove" | "delete" | "optional" | "correct-all";
	suffix?: string | undefined;
	prefix?: string | undefined;
	onClick: (event: Event) => void;
}

export interface ChangeLanguageAction {
	label: string;
	onClick: (event: Event) => void;
}

export type Props = CardBaseProps & {
	caption: string;
	description: string;
	originalPhrase: string;
	fixes: ErrorFix[];
	changeLanguageAction: ChangeLanguageAction | undefined;
	onMoreDetailsClick: (event: Event) => void;
	onPremiumTeaserClick?: (event: Event) => void;
	onAddToDictionaryClick?: (event: Event) => void;
	onIgnoreRule?: (event: Event) => void;
	onIgnoreWord?: (event: Event) => void;
	onIgnoreRuleTemporarily?: (event: Event) => void;
	onTurnOffPickyMode?: (event: Event) => void;
};

type DismissButtonProps = Record<
	"onIgnoreWord" | "onIgnoreRuleTemporarily",
	((event: React.SyntheticEvent) => void) | undefined
>;

const DismissButton: React.FC<React.PropsWithChildren<DismissButtonProps>> = ({
	onIgnoreWord,
	onIgnoreRuleTemporarily,
	children,
}) => {
	const baseProps = { className: "lt-error-card__dismiss", children };

	switch (true) {
		case typeof onIgnoreWord === "function":
			return <Span {...baseProps} onClick={onIgnoreWord} />;
		case typeof onIgnoreRuleTemporarily === "function":
			return <Span {...baseProps} onClick={onIgnoreRuleTemporarily} />;
		default:
			return null;
	}
};

const ErrorCard: React.FC<Props> = ({
	caption,
	description,
	originalPhrase,
	fixes,
	changeLanguageAction,
	onMoreDetailsClick,
	onPremiumTeaserClick,
	onAddToDictionaryClick,
	onIgnoreWord,
	onIgnoreRule,
	onIgnoreRuleTemporarily,
	onTurnOffPickyMode,
	...cardBaseProps
}) => {
	const getMessage = useI18nContext();
	const { current: i18n } = useRef<Record<"turnOffRule" | "moreDetails" | "turnOffPickyMode", string>>({
		turnOffRule: getMessage("turnOffRule"),
		moreDetails: getMessage("moreDetails"),
		turnOffPickyMode: getMessage("turnOffPickyMode"),
	});
	const handlePremiumTeaserClick = (event: React.SyntheticEvent) => {
		onPremiumTeaserClick?.(event.nativeEvent);
	};
	const handleAddToDictionaryClick = (event: React.SyntheticEvent) => onAddToDictionaryClick?.(event.nativeEvent);
	const AddToDictionary =
		typeof onAddToDictionaryClick === "function"
			? {
					key: "add-to-dictionary",
					icon: "dictionary",
					onClick: handleAddToDictionaryClick,
					title: getMessage("addToDictionaryCaption", originalPhrase),
			  }
			: null;
	const handleIgnoreRule = (event: React.SyntheticEvent) => {
		onIgnoreRule?.(event.nativeEvent);
	};
	const IgnoreRule =
		typeof onIgnoreRule === "function"
			? {
					key: "add-to-dictionary",
					icon: "ignore",
					onClick: handleIgnoreRule,
					title: i18n.turnOffRule,
			  }
			: null;
	const handleMoreDetailsClick = (event: React.SyntheticEvent) => onMoreDetailsClick(event.nativeEvent);
	const MoreDetails = {
		key: "more-details",
		icon: "info",
		onClick: handleMoreDetailsClick,
		title: i18n.moreDetails,
	};
	const handleTurnOffPickyMode = (event: React.SyntheticEvent) => {
		onTurnOffPickyMode?.(event.nativeEvent);
	};
	const TurnOffPickyMode =
		typeof onTurnOffPickyMode === "function"
			? {
					key: "turn-off-picky-mode",
					icon: "picky_mode",
					onClick: handleTurnOffPickyMode,
					title: i18n.turnOffPickyMode,
			  }
			: null;
	const handleChangeLanguage = (event: React.SyntheticEvent) => {
		changeLanguageAction?.onClick(event.nativeEvent);
	};
	const handleIgnoreWord =
		typeof onIgnoreWord === "function"
			? (event: React.SyntheticEvent) => {
					onIgnoreWord?.(event.nativeEvent);
			  }
			: undefined;
	const handleIgnoreRuleTemporarily =
		typeof onIgnoreRuleTemporarily === "function"
			? (event: React.SyntheticEvent) => {
					onIgnoreRuleTemporarily?.(event.nativeEvent);
			  }
			: undefined;

	return (
		<CardBase {...cardBaseProps}>
			<CardContent caption={caption} controls={[MoreDetails, TurnOffPickyMode, IgnoreRule, AddToDictionary]}>
				<Div className="lt-error-card__description">{description}</Div>
				<Div className="lt-error-card__suggestion-list">
					{fixes.map((fix) => {
						const buttonProps = {
							className: classes(
								"lt-error-card__suggestion",
								fix.type === "highlight" && "lt-error-card__suggestion--highlight",
								fix.type === "remove" && "lt-error-card__suggestion--remove",
								fix.type === "delete" && "lt-error-card__suggestion--delete",
								fix.type === "optional" && "lt-error-card__suggestion--optional",
								fix.type === "correct-all" && "lt-error-card__suggestion--correct-all"
							),
							key: fix.text,
							title: fix.title,
							onClick: (event) => fix.onClick(event.nativeEvent),
						};

						return fix.html ? (
							<Span {...buttonProps} dangerouslySetInnerHTML={{ __html: fix.html }} />
						) : (
							<Span {...buttonProps}>
								{fix.prefix && <Span className="lt-error-card__suggestion-hint">{fix.prefix}</Span>}
								{fix.text}
								{fix.suffix && <Span className="lt-error-card__suggestion-hint">{fix.suffix}</Span>}
							</Span>
						);
					})}
					{typeof onPremiumTeaserClick === "function" && (
						<Span className="lt-error-card__premium-button" onClick={handlePremiumTeaserClick}>
							<LTReact.Tr name="suggestionOnlyVisibleToPremiumButton" />
						</Span>
					)}
					{changeLanguageAction && (
						<Span
							className="lt-error-card__suggestion lt-error-card__suggestion--optional"
							onClick={handleChangeLanguage}
						>
							{changeLanguageAction.label}
						</Span>
					)}
					<DismissButton
						onIgnoreWord={handleIgnoreWord}
						onIgnoreRuleTemporarily={handleIgnoreRuleTemporarily}
					>
						<LTReact.Tr name="dismissSuggestions" />
					</DismissButton>
				</Div>
			</CardContent>
		</CardBase>
	);
};

export default ErrorCard;
