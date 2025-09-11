export function ProgressMeter({ progressMeterWidth = 0 }) {
  return (
    <div className="h-1 w-[100px] rounded-sm bg-color-base-grey-200 flex items-center relative">
      <div
        className="h-1 rounded-sm absolute bg-color-base-grey-600"
        style={{ width: `${progressMeterWidth}px` }}
      ></div>
    </div>
  );
}
