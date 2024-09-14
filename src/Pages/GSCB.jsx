import React, { useEffect } from "react";
import ContactForm from "../Components/GSCB/ContactForm";
import Section2 from "../Components/GSCB/GSCB-Section2";
import Section1 from "../Components/GSCB/GSCB-Section1";
import Header from "../Components/GSCB/GSCB-Hero";
import GSCPBottom from "../Components/GSCB/GSCP-Section3";

const GSCB = () => {
  document.title = 'Baoiam - GCEP'
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);

  return (
    <>
      <Header />

      {/* Section 1 */}
      <Section1 />

      {/* Section 2 */}
      <Section2 />

      {/* Contact */}
      <ContactForm />

      {/* GSCPBottom */}
      <GSCPBottom />
    </>
  );
};

export default GSCB;
