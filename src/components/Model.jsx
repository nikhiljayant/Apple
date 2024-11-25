import React from "react";
// GSAP
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Model = () => {
  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 className="section-heading" id="heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative"></div>
        </div>
      </div>
    </section>
  );
};

export default Model;
