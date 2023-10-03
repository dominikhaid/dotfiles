import type * as React from "react";
import { useState } from "react";
import { classes } from "../../../common/utils";
import { Div, Span, elementFactory } from "../../index";
import type { IconTooltip } from "../../../components/icon/icon";

export interface Props {
	name: string;
	label?: string;
	tooltip?: IconTooltip;
	preventFocus?: boolean;
	onClick?: (event: Event) => void;
	onMouseOver?: (event: Event) => void;
	onMouseOut?: (event: Event) => void;
}

const LtCompIcon = elementFactory("comp-icon");

const Icon: React.FC<Props> = (props) => {
	const [showTooltip, setShowTooltip] = useState(false);
	const handleClick = (event: React.SyntheticEvent<HTMLElement>) => {
		props.onClick?.(event.nativeEvent);
	};

	const handleMouseOver = (event: React.SyntheticEvent<HTMLElement>) => {
		setShowTooltip(true);
		props.onMouseOver?.(event.nativeEvent);
	};

	const handleMouseOut = (event: React.SyntheticEvent<HTMLElement>) => {
		setShowTooltip(false);
		props.onMouseOut?.(event.nativeEvent);
	};

	return (
		<LtCompIcon
			onClick={handleClick}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className={classes(`lt-icon--${props.name}`, typeof props.onClick === "function" && "lt-icon--clickable")}
			data-lt-prevent-focus={props.preventFocus}
		>
			<Span className={classes("lt-icon__icon", `lt-icon__${props.name}`)} />
			{props.tooltip && showTooltip && (
				<Div
					className={classes(
						"lt-icon__tooltip",
						`lt-icon__tooltip--${props.tooltip.position}`,
						`lt-icon__tooltip--${props.name}`
					)}
				>
					{props.tooltip.label}
				</Div>
			)}
			{props.label && <Span className="lt-icon__label">{props.label}</Span>}
		</LtCompIcon>
	);
};

export default Icon;
