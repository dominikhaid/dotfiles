import type * as React from "react";
import LTReact, { type ReactComponentResult } from "../../index";
import Icon, { type Props } from "../../components/icon/icon";

const IconView: React.FC<Props> = (props) => {
	return <Icon {...props} />;
};

IconView.displayName = "IconView";

export default async function createIcon(doc: Document, props: Props): ReactComponentResult {
	return await LTReact.createView(doc, IconView, props);
}
