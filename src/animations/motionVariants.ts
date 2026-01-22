// ===== FADE ANIMATIONS =====
export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6 }
}

export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export const fadeDown = {
  initial: { opacity: 0, y: -40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export const fadeLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

export const fadeRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

// ===== SCALE ANIMATIONS =====
export const scaleUp = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 }
}

export const scaleIn = {
  initial: { scale: 0.95 },
  whileInView: { scale: 1 },
  transition: { duration: 0.4 }
}

// ===== HOVER ANIMATIONS =====
export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.3 }
}

export const hoverLift = {
  whileHover: { y: -8 },
  transition: { duration: 0.3 }
}

// ===== HERO SECTION ANIMATIONS =====
export const heroTitle = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 }
}

export const heroTitleTransition = { duration: 0.8 }

export const heroSubtitle = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
}

export const heroSubtitleTransition = { duration: 0.8, delay: 0.2 }

export const heroCTA = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export const heroCTATransition = { duration: 0.8, delay: 0.4 }

// ===== STAGGER ANIMATIONS =====
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

// ===== BOUNCE ANIMATION =====
export const bounce = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0]
  }
}

export const bounceTransition = {
  duration: 2,
  repeat: Infinity
}

// ===== ROTATE ANIMATION =====
export const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  whileInView: { opacity: 1, rotate: 0 },
  transition: { duration: 0.6 }
}

// ===== TAP/CLICK ANIMATION =====
export const tapScale = {
  whileTap: { scale: 0.95 },
  transition: { duration: 0.1 }
}