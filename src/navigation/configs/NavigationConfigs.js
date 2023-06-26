export const openConfig = {
  animation: 'spring',
  config: {
    stiffness: 35,
    damping: 2,
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export const closeConfig = {
  animation: 'spring',
  config: {
    stiffness: 20,
    damping: 1,
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export const forFadeAnim = ({current}) => ({
  cardStyle: {
    // opacity: current.progress,
  },
});
