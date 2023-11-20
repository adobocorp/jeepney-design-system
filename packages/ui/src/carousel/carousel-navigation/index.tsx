import { NavigationProgress } from "./navigation-progress";
import { NavigationControls } from "./navigation-controls";
export function CarouselNavigation({ progressBars = 1 }) {
  return (
    <div>
      <NavigationProgress progressBars={progressBars}></NavigationProgress>
      <NavigationControls></NavigationControls>
    </div>
  );
}
