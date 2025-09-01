import { HEADING, Typography } from "../../../typography";
export const LowerCaption = ({ primaryText, secondaryText }: any) => {
  let longCaption = secondaryText;

  if (secondaryText?.length && secondaryText.length > 500) {
    longCaption = secondaryText.slice(0, 500) + "...";
  }

  return (
    <div className="flex justify-center flex-col p-8 bg-color-base-white rounded-sm rounded-t-none w-full">
      <Typography heading={HEADING.H3}>{primaryText}</Typography>
      {secondaryText && (
        <Typography heading={HEADING.H4}>{longCaption}</Typography>
      )}
    </div>
  );
};
