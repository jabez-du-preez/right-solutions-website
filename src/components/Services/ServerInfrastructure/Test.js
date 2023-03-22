import React from "react";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";

export default function Test() {
  const { ref, inView } = useInView({ threshold: 1 });

  return (
    <CSSTransition
      in={inView}
      timeout={1000}
      mountOnEnter
      classNames={{
        enter: "animate-enter",
        enterActive: "animate-enter-active",
        exit: "",
        exitActive: "",
      }}
    >
      <div className="test-div" ref={ref}>
        Test
      </div>
    </CSSTransition>
  );
}
