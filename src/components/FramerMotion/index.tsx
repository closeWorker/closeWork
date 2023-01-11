import React from "react";
import { motion } from "framer-motion";
import { iFramerMotionProps } from "./type";

export const FramerMotionHomeDashboardMoreInfo = ({
  children,
  className,
}: iFramerMotionProps) => {
  return (
    <>
      <motion.div
        initial={{ y: "5%", opacity: 0.8 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
};

export const FramerMotionLoginRegister = ({
  children,
  className,
}: iFramerMotionProps) => {
  return (
    <>
      <motion.section
        className={className}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.section>
    </>
  );
};

export const FramerMotionCards = ({ children }: iFramerMotionProps) => {
  return (
    <>
      <motion.div
        initial={{ y: "2%", opacity: 0.8 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
};
