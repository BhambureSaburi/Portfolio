import Header from "@/header";
import Footer from "@/footer";
import Contact from "@/contact";
import Skills from "@/skills";
import Education from "@/education";


export const metadata = {
  title : "myProject"
}

export default function mainPage() {
    return(
      <>
         <Header />

         <Contact /> 

         <Skills/>

         <Education/>

        
         <Footer />
      </>
    );
}