import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";
import useOnScreen from './useOnScreen'

const LazyShow = ({ children }) => {
    const controls = useAnimation();
    const rootRef = useRef();
    const onScreen = useOnScreen(rootRef);
    useEffect(() => {
      if (onScreen) {
        controls.start({
          x: 0,
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeOut"
          }
        });
      }
    }, [onScreen, controls]);
    return (
      <motion.div
        className="lazy-div"
        ref={rootRef}
        initial={{ opacity: 0, x: -40 }}
        animate={controls}
      >
        {children}
      </motion.div>
    );
  };
  export default LazyShow