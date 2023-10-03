import type * as React from "react";
import CardBase, { type Props as CardBaseProps } from "../card-base/card-base";
import ParaphrasingContent from "../paraphrasing-content/paraphrasing-content";
import type { ParaphrasingContentProps } from "../paraphrasing-content/types";
import SynonymsContent, { type Props as SynonymsContentProps } from "../synonyms-content/synonyms-content";

export type Props = CardBaseProps & {
	synonymsData: SynonymsContentProps;
	paraphrasingsData: ParaphrasingContentProps;
};

const RephraseCard: React.FC<Props> = ({ synonymsData, paraphrasingsData, ...cardBaseProps }) => {
	return (
		<CardBase {...cardBaseProps}>
			<SynonymsContent {...synonymsData} />
			<ParaphrasingContent {...paraphrasingsData} />
		</CardBase>
	);
};

export default RephraseCard;
