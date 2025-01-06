import { motion, PanInfo } from "motion/react";
import { FC, PropsWithChildren } from "react";

interface SwipeableCardProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export const SWIPE_THRESHOLD = 200;

export const SwipeableCard: FC<PropsWithChildren<SwipeableCardProps>> = ({
  children,
  onSwipeLeft,
  onSwipeRight,
}) => {
  const handleDrag = (info: PanInfo) => {
    if (info.offset.x > SWIPE_THRESHOLD) {
      onSwipeRight();
    } else if (info.offset.x < -SWIPE_THRESHOLD) {
      onSwipeLeft();
    }
  };

  return (
    <motion.div
      drag="x"
      onDrag={(_, info) => handleDrag(info)}
      dragSnapToOrigin
      dragElastic={0.1}
      dragConstraints={{ left: -SWIPE_THRESHOLD, right: SWIPE_THRESHOLD }}
    >
      {children}
    </motion.div>
  );
};
