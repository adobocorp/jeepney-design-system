import { NavigationProgress } from "./navigation-progress";
export function CarouselNavigation({ progressBars = 1 }) {
  return (
    <div>
      <NavigationProgress progressBars={progressBars}></NavigationProgress>
    </div>
  );
}
