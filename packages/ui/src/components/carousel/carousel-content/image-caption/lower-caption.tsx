export const LowerCaption = ({ primaryText, secondaryText }: any) => {
  let longCaption = secondaryText;

  if (secondaryText?.length && secondaryText.length > 120) {
    longCaption = secondaryText.slice(0, 120) + "...";
  }

  return (
    <div className="flex justify-center flex-col h-12 w-[calc(100%-64px)] p-8 bg-color-base-white rounded-sm rounded-t-none">
      <div className="text-color-base-black font-[var(--font-family-base)] text-[length:var(--size-font-large)rem] mb-3">
        {primaryText}
      </div>
      {secondaryText && (
        <div className="text-color-base-black font-[var(--font-family-base)] text-[length:var(--size-font-small)rem]">
          {longCaption}
        </div>
      )}
    </div>
  );
};
