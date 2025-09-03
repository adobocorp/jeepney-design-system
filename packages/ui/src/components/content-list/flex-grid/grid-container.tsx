import clsx from "clsx";
import { HEADING, Typography } from "../../typography";

type GridContainerProps = {
  primaryText: string;
  secondaryText?: string;
  numItems: number;
  children: React.ReactNode;
};

export function GridContainer({
  primaryText,
  secondaryText,
  numItems,
  children,
}: GridContainerProps) {
  return (
    <div className="flex h-[600px] items-center flex-col">
      <div className="p-4 text-center">
        <Typography heading={HEADING.H1}>{primaryText}</Typography>
        <Typography heading={HEADING.H3}>{secondaryText}</Typography>
      </div>
      <div
        className={clsx(
          "grid justify-center",
          numItems === 3 ? "grid-cols-3 gap-4" : "",
          numItems === 4 ? "grid-cols-4 gap-4" : "",
          numItems === 3 ? "[grid-template-columns:repeat(3,330px)]" : "",
          numItems === 4 ? "[grid-template-columns:repeat(4,250px)]" : ""
        )}
      >
        {children}
      </div>
    </div>
  );
}
