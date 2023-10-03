import type * as React from "react";
import { useMemo } from "react";
import { classes } from "../../../common/utils";
import { createDiff, Diff, type DiffComponent } from "../../../content/Diff";
import { elementFactory, Span } from "../../index";

interface Props {
	from: string;
	to: string;
}

const LtCompDiff = elementFactory("comp-diff");

const DiffComponent: React.FC<Props> = ({ from, to }) => {
	const diff = useMemo<DiffComponent[]>(() => createDiff(from, to), [from, to]);

	if (Diff.isRewrite(diff)) {
		return <LtCompDiff>{Diff.toNewString(diff)}</LtCompDiff>;
	}

	return (
		<LtCompDiff>
			{diff.map((part, i) => {
				if (!part.value || part.removed === true) {
					return null;
				}

				const key = `${part.value}-${part.added === true ? "added" : "static"}-${i}`;

				return (
					<Span
						key={key}
						className={classes("lt-comp-diff__item", part.added === true && "lt-comp-diff__item--added")}
					>
						{part.value}
					</Span>
				);
			})}
		</LtCompDiff>
	);
};

export default DiffComponent;
