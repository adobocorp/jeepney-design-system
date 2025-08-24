export function ProgressMeter({ progressMeterWidth = 0 }) {
  return (
    <div className="h-1 w-[100px] rounded-sm border border-color-base-grey-200 bg-color-base-grey-200">
      <div
        className="h-1 rounded-sm bg-color-base-grey-600 absolute"
        style={{ width: `${progressMeterWidth}px` }}
      ></div>
    </div>
  );
}
