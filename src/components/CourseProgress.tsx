"use client"

import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useCountUp from './../hooks/useCountUp';

const CourseProgress = ({progress}:{progress: number}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const count = useCountUp({progress: progress}); 
  const controls = useAnimation();
  const leftControls = useAnimation();

  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting) {
          controls.start({width: `${progress}%`})
          leftControls.start({left: `calc(${progress}% - 16px)`})
        }
      }, {threshold: 1});

      if(ref.current) observer.observe(ref.current);

      return ()=>{
        if(ref.current) observer.observe(ref.current);
      }
  }, [controls, progress])

  return (
    <div className="w-full h-1 bg-gray-200 rounded-full relative" ref={ref}>
        <motion.div className=" border-2 rounded-full p-1 text-xs flex items-center justify-center font-light absolute bottom-4 border-gray-300" animate={leftControls} initial={{left:0}} transition={{duration: 1, ease: "easeInOut"}}>
            <p>You</p>
            <span className="w-0 h-0 border-4 border-b-transparent border-r-transparent border-l-transparent border-t-gray-300 absolute -bottom-3">

            </span>
        </motion.div>
        <motion.div className={`h-full bg-green-500 rounded-full`} animate={controls} initial={{width: 0}} transition={{duration: 1, ease: "easeInOut"}}></motion.div>
        {/* <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-300" /> */}

        <motion.p className={`absolute top-2 font-light text-md`} animate={leftControls} initial={{left:0}} transition={{duration: 1, ease: "easeInOut"}}>
            {count}%
        </motion.p>
    </div>
  )
}

export default CourseProgress