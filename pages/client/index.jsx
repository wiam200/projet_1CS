import Contact from "@/components/Client/landing-components/Contact";
import Hero from "@/components/Client/landing-components/Hero";
import Stepss from "@/components/Client/landing-components/Stepss";
import PdfPreview from "@/components/Client/landing-components/test";
function index() {
  return (
    <>
      <Hero />
      <Stepss />
      <Contact />
      <PdfPreview/>
    </>
  );
}
export default index;
