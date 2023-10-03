import type * as React from "react";
import { useMemo } from "react";
import { classes } from "../../../common/utils";
import { Div, Span, elementFactory } from "../../index";

interface CardControl {
	key: string;
	icon: string;
	title: string;
	onClick: (event: React.SyntheticEvent) => void;
}

type TitleProps = React.PropsWithChildren<{
	prefix?: string;
}>;

export interface Props {
	className?: string;
	stacked?: boolean;
	title?: React.ReactNode;
	caption?: string;
	controls?: Array<CardControl | null>;
}

const LtCompCardContent = elementFactory("comp-card-content");

export const CardContentTitle: React.FC<TitleProps> = ({ prefix, children }) => {
	return (
		<Div className="lt-comp-card-content__title">
			{prefix && <Div className="lt-comp-card-content__title__prefix">{prefix}</Div>}
			{children}
		</Div>
	);
};

const CardContent: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	stacked,
	title = null,
	caption,
	controls: optionalControls = [],
	children,
}) => {
	const controls = optionalControls.filter((o: CardControl | null): o is CardControl => o !== null);
	const hasHeader = useMemo(() => typeof caption === "string" || Number(controls?.length) > 0, [caption, controls]);

	return (
		<LtCompCardContent className={className}>
			{title}
			<Div
				className={classes(
					"lt-comp-card-content__wrap",
					Boolean(stacked) && "lt-comp-card-content__wrap--stacked"
				)}
			>
				{hasHeader && (
					<Div className="lt-comp-card-content__header">
						{typeof caption === "string" ? (
							<Span className="lt-comp-card-content__caption">{caption}</Span>
						) : (
							<Span>{/* Add an empty element to keep the flex-layout in shape #WTF */}</Span>
						)}
						{Number(controls?.length) > 0 && (
							<Div className="lt-comp-card-content__controls">
								{controls.map(({ icon, key, ...nodeProps }) => (
									<Div
										key={key}
										className={classes(`lt-icon__${icon}`, "lt-comp-card-content__control")}
										{...nodeProps}
									/>
								))}
							</Div>
						)}
					</Div>
				)}
				{children}
			</Div>
		</LtCompCardContent>
	);
};

export default CardContent;
