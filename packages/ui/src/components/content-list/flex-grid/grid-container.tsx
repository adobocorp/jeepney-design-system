import clsx from "clsx";

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
    <div className={clsx("flex items-center flex-col")}>
      <div
        className={clsx(
          "grid justify-center gap-4",
          numItems > 3 && "overflow-y-scroll h-[600px]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
