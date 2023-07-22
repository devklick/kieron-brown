import { useEffect, useRef } from "react";

interface UseSwipeProps {
  /**
   * The function to be executed when the user swiped left
   */
  onSwipeLeft: () => void;
  /**
   * The function to be executed when the user swiped right
   */
  onSwipeRight: () => void;
}

function isTouchEvent(e: MouseEvent | TouchEvent): e is TouchEvent {
  return "targetTouches" in e;
}

function getPosition(
  event: TouchEvent | MouseEvent,
  touchProp: "targetTouches" | "changedTouches"
) {
  let x = 0;
  let y = 0;

  if (isTouchEvent(event)) {
    x = event[touchProp][0].clientX;
    y = event[touchProp][0].clientY;
  } else {
    x = event.clientX;
    y = event.clientY;
  }
  return { x, y };
}

/**
 * Detects if the user has performed a swipe gesture
 * and executes the relevant function depending on the swipe direction
 * @see https://stackoverflow.com/a/72567557/6236042
 */
export function useSwipe({ onSwipeLeft, onSwipeRight }: UseSwipeProps) {
  const touchCoordsRef = useRef({
    touchStart: { x: 0, y: 0, time: Date.now() },
  });
  const fnsRef = useRef({ onSwipeLeft, onSwipeRight });
  fnsRef.current = { onSwipeLeft, onSwipeRight };

  const threshold = 80;
  const swipeSpeedSec = 1;
  useEffect(() => {
    const handleStart = (e: TouchEvent | MouseEvent) => {
      const { x, y } = getPosition(e, "targetTouches");
      touchCoordsRef.current.touchStart.x = x;
      touchCoordsRef.current.touchStart.y = y;
      touchCoordsRef.current.touchStart.time = Date.now();
    };
    const handleEnd = (e: TouchEvent | MouseEvent) => {
      const elapsedTime =
        (Date.now() - touchCoordsRef.current.touchStart.time) / 1000;
      if (elapsedTime > swipeSpeedSec) {
        return;
      }

      const { x: touchEndX, y: touchEndY } = getPosition(e, "changedTouches");
      const touchStartX = touchCoordsRef.current.touchStart.x;
      const touchStartY = touchCoordsRef.current.touchStart.y;
      const xDistance = touchStartX - touchEndX;
      const yDistance = touchStartY - touchEndY;

      // Make sure enough distance has been covered to treat this as a swipe gesture
      if (Math.abs(xDistance) < threshold && Math.abs(yDistance) < threshold) {
        return;
      }

      // Make sure the swipe is moving horizontally rather than vertically
      if (Math.abs(xDistance) >= Math.abs(yDistance)) {
        // If the swipe moved from left to right, xDistance is positive, so we're swiping left, otherwise right
        xDistance > 0
          ? fnsRef.current.onSwipeLeft?.()
          : fnsRef.current.onSwipeRight?.();
      }
    };

    window.addEventListener("touchstart", handleStart);
    window.addEventListener("touchend", handleEnd);
    window.addEventListener("mousedown", handleStart);
    window.addEventListener("mouseup", handleEnd);

    return () => {
      window.removeEventListener("touchstart", handleStart);
      window.removeEventListener("touchend", handleEnd);
      window.removeEventListener("mousedown", handleStart);
      window.removeEventListener("mouseup", handleEnd);
    };
  });
}
