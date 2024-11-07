export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1, ease: "easeInOut" },
  },
  fadeInUp: {
    initial: { y: 70, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 1, ease: "easeInOut" },
  },
  fadeInDown: {
    initial: { y: -100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 1, ease: "easeInOut" },
  },
  fadeInLeft: {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 1, ease: "easeInOut" },
  },
  fadeInRight: {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 1, ease: "easeInOut" },
  },
  zoomIn: {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 1.5, ease: "easeInOut" },
  },
  slideInLeft: {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 1.2, ease: "easeInOut" },
  },
  slowRotate: {
    initial: { rotate: 0 },
    whileInView: { rotate: 360 },
    transition: { duration: 20, repeat: Infinity, ease: "linear" },
  },
  pulseOpacity: {
    initial: { opacity: 0.5 },
    whileInView: { opacity: [1, 0.5, 1] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  floating: {
    initial: { y: 0 },
    whileInView: { y: [0, -10, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  alertAnimation: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const getAnimationValues = (animationKey: keyof typeof animations) => {
  return animations[animationKey];
};
