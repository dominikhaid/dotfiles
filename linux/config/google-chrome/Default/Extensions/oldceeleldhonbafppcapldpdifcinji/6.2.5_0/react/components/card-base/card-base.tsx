import type * as React from "react";
import { useRef, useState, useEffect } from "react";
import { i18nManager } from "../../../common/i18nManager";
import { classes } from "../../../common/utils";
import { Div, Span, elementFactory, useI18nContext } from "../../index";

type Mode = "paraphrase" | "correct";

export interface Props {
	mode: Mode;
	type: "wide" | "narrow";
	root: HTMLElement;
	onModeChange?: (mode: Mode) => void;
	onClose: (event: Event) => void;
	onLogoClick?: (event: Event) => void;
}

type SelectorProps = Pick<Props, "mode" | "onModeChange" | "root">;

const LtCompCardBase = elementFactory("comp-card-base");

const Selector: React.FC<SelectorProps> = ({ root, mode, onModeChange }) => {
	const [menuVisible, setMenuVisible] = useState(false);
	const selector = useRef<HTMLDivElement | null>(null);
	const { current: i18n } = useRef<Record<"paraphraser" | "checker", string>>({
		paraphraser: i18nManager.getMessage("cardSelectorLabelParaphraser"),
		checker: i18nManager.getMessage("cardSelectorLabelChecker"),
	});
	const toggleMenu = () => setMenuVisible(menuVisible ? false : true);

	useEffect(() => {
		const closeMenu = (event: MouseEvent) => {
			const clicked = event.target as Node | null;

			if (selector.current?.contains(clicked) === false) {
				setMenuVisible(false);
			}
		};
		root.addEventListener("click", closeMenu);

		return () => root.removeEventListener("click", closeMenu);
	}, [root]);

	// TODO: enable selector as soon as Rephrase Card is React'ified, too
	return (
		<Div className="lt-comp-card-base__selector" ref={selector} data-disabled="true">
			<Div className="lt-comp-card-base__selector__label" onClick={toggleMenu}>
				{mode === "paraphrase" ? i18n.paraphraser : i18n.checker}
			</Div>
			{menuVisible && (
				<Div className="lt-comp-card-base__selector__menu">
					<Div
						className={classes(
							"lt-comp-card-base__selector__menu-item",
							mode === "paraphrase" && "lt-comp-card-base__selector__menu-item--current"
						)}
						onClick={() => onModeChange?.("paraphrase")}
					>
						{i18n.paraphraser}
					</Div>
					<Div
						className={classes(
							"lt-comp-card-base__selector__menu-item",
							mode === "correct" && "lt-comp-card-base__selector__menu-item--current"
						)}
						onClick={() => onModeChange?.("correct")}
					>
						{i18n.checker}
					</Div>
				</Div>
			)}
		</Div>
	);
};

const CardBase: React.FC<React.PropsWithChildren<Props & { root: HTMLElement }>> = ({
	mode,
	type,
	root,
	onModeChange,
	onClose,
	onLogoClick,
	children,
}) => {
	const getMessage = useI18nContext();
	const { current: i18n } = useRef<Record<"close", string>>({
		close: getMessage("close"),
	});
	const handleClose = (event: React.SyntheticEvent<HTMLElement>) => onClose(event.nativeEvent);
	const handleLogoClick = (event: React.SyntheticEvent<HTMLElement>) => onLogoClick?.(event.nativeEvent);

	return (
		<LtCompCardBase
			className={classes(
				"notranslate",
				type === "wide" && "lt-comp-card-base--wide",
				type === "narrow" && "lt-comp-card-base--narrow"
			)}
		>
			<Div className="lt-comp-card-base__header">
				<Div className="lt-comp-card-base__header__left">
					<Div
						className={classes(
							"lt-comp-card-base__logo",
							Boolean(onLogoClick) && "lt-comp-card-base__logo--clickable"
						)}
						onClick={handleLogoClick}
					/>
					{typeof onModeChange === "function" ? (
						<Selector root={root} mode={mode} onModeChange={onModeChange} />
					) : (
						<Div className="lt-comp-card-base__caption">LanguageTool</Div>
					)}
				</Div>
				<Div className="lt-comp-card-base__header__right">
					<Div className="lt-comp-card-base__close lt-icon__close_small" onClick={handleClose}>
						<Span className="lt-comp-card-base__close__label">{i18n.close}</Span>
					</Div>
				</Div>
			</Div>
			{children}
			<Div className="lt-comp-card-base__footer"></Div>
		</LtCompCardBase>
	);
};

export default CardBase;
