import { CardCallToAction } from "./card-call-to-action";

export const CardContent = ({
  primaryText,
  secondaryText,
  callToAction,
  background,
}: any) => {
  return (
    <div className="h-[300px] w-[700px] flex justify-center items-start flex-col p-8 rounded-sm bg-white/95">
      <div className="text-color-base-black text-[length:var(--size-font-large)rem] mb-3">
        {primaryText}
      </div>
      {secondaryText && (
        <div className="text-color-base-black text-[length:var(--size-font-small)rem] flex-grow">
          {secondaryText}
        </div>
      )}
      <div className="flex justify-end">
        <CardCallToAction
          callToAction={callToAction}
          backgroundColor={background.backgroundColor}
        ></CardCallToAction>
      </div>
    </div>
  );
};
