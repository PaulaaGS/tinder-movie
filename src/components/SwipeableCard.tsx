import { motion, PanInfo } from "motion/react";
import { CSSProperties, FC, PropsWithChildren } from "react";

interface SwipeableCardProps {
  style: CSSProperties;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const SWIPE_THRESHOLD = 200;

export const SwipeableCard: FC<PropsWithChildren<SwipeableCardProps>> = ({
  children,
  style,
  onSwipeLeft,
  onSwipeRight,
}) => {
  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > SWIPE_THRESHOLD) {
      onSwipeLeft();
    } else if (info.offset.x < -SWIPE_THRESHOLD) {
      onSwipeRight();
    }
  };

  return (
    <motion.div
      style={style}
      drag="x"
      onDrag={handleDrag}
      dragSnapToOrigin
      dragElastic={0.1}
      dragConstraints={{ left: -SWIPE_THRESHOLD, right: SWIPE_THRESHOLD }}
    >
      {children}
    </motion.div>
  );
};
