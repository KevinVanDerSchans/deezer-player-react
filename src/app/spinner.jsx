import React from "react";
import Image from "next/image";

const Spinner = () => {
  return (
    <section className="spinner-container" role="status" aria-live="polite" aria-busy="true">
      <Image src="assets/svg/spinner.svg" width={200} height={200} alt="Loading..." className="spinner"/>
      <span className="hidden">Loading data...</span>
    </section>
  );
};

export default Spinner;
