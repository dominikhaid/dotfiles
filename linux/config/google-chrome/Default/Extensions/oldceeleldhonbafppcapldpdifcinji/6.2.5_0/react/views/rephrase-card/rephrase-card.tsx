import type * as React from "react";
import LTReact, { type ReactComponentResult } from "../../index";
import RephraseCard, { type Props } from "../../components/rephrase-card/rephrase-card";

export type RephraseCardProps = Omit<Props, "root">;

const RephraseCardView: React.FC<Props> = (props) => {
	return <RephraseCard {...props} />;
};

RephraseCardView.displayName = "RephraseCardView";

export default async function createRephraseCard(root: HTMLElement, props: RephraseCardProps): ReactComponentResult {
	return await LTReact.createView(root, RephraseCardView, Object.assign(props, { root }));
}
