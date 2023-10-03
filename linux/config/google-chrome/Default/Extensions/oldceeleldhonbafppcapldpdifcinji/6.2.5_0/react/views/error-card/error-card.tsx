import type * as React from "react";
import LTReact, { type ReactComponentResult } from "../../index";
import ErrorCard, { type Props } from "../../components/error-card/error-card";

export type { ChangeLanguageAction, ErrorFix } from "../../components/error-card/error-card";

export type ErrorCardProps = Omit<Props, "root">;

const ErrorCardView: React.FC<Props> = (props) => {
	return <ErrorCard {...props} />;
};

ErrorCardView.displayName = "ErrorCardView";

export default async function createErrorCard(root: HTMLElement, props: ErrorCardProps): ReactComponentResult {
	return await LTReact.createView(root, ErrorCardView, Object.assign(props, { root }));
}
