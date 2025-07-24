import cn from "classnames";
import { HEADING, Typography } from "../../typography";
import styles from "./flex-grid.module.css";

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
    <div className={cn(styles.gridContainer)}>
      <div className={cn(styles.gridHeadingsContainer)}>
        <Typography heading={HEADING.H1}>{primaryText}</Typography>
        <Typography heading={HEADING.H3}>{secondaryText}</Typography>
      </div>
      <div
        className={cn(
          styles.gridItemsContainer,
          numItems === 3 ? styles.gridContainerThreeItems : "",
          numItems === 4 ? styles.gridContainerFourItems : ""
        )}
      >
        {children}
      </div>
    </div>
  );
}
