import { BackgroundColor } from "../../shared/types";

export function CardCallToAction({ callToAction, backgroundColor }) {
  const useDarkCta =
    [
      BackgroundColor.Neutral,
      BackgroundColor.Secondary,
      BackgroundColor.Warning,
    ].findIndex((c) => backgroundColor === c) >= 0;

  return (
    <div
      className={cn(
        "w-[120px] h-8 leading-8 flex justify-center rounded-sm p-1",
        backgroundColor === BackgroundColor.Primary &&
          "bg-color-brand-primary-base",
        backgroundColor === BackgroundColor.Secondary &&
          "bg-color-brand-secondary-base text-color-base-black",
        backgroundColor === BackgroundColor.Neutral && "bg-color-base-grey-400",
        backgroundColor === BackgroundColor.Success &&
          "bg-color-base-green-400 border border-color-border-success",
        backgroundColor === BackgroundColor.Alert &&
          "bg-color-base-red-300 border border-color-border-error",
        backgroundColor === BackgroundColor.Warning &&
          "bg-color-base-yellow-500 border border-color-border-warning"
      )}
    >
      <a
        className={cn(
          "text-[length:var(--size-font-xl)rem] no-underline",
          useDarkCta ? "text-color-base-black" : "text-color-base-white"
        )}
        href={callToAction.href}
        target={callToAction.target}
      >
        {callToAction.text}
      </a>
    </div>
  );
}
