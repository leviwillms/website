import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: -8
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: 8
  }
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.2, ease: 'easeInOut' }}
    style={{ height: '100%' }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
