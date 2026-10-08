export const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

export const TOPBAR_VARIANTS = {
  visible: {
    height: "auto",
    opacity: 1,
    y: 0,
    transition: SPRING_TRANSITION,
  },
  hidden: {
    height: 0,
    opacity: 0,
    y: -20,
    transition: { ...SPRING_TRANSITION, duration: 0.3 },
  },
};

export const MOBILE_MENU_VARIANTS = {
  closed: {
    clipPath: "circle(0% at calc(100% - 40px) 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    clipPath: "circle(150% at calc(100% - 40px) 40px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

export const NAV_ITEM_VARIANTS = {
  closed: {
    y: 40,
    opacity: 0,
    rotateX: -45,
    transition: { ease: [0.33, 1, 0.68, 1], duration: 0.3 },
  },
  open: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { ease: [0.16, 1, 0.3, 1], duration: 0.6 },
  },
};