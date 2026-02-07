import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Skils from "./Component/My-Skills/skills";
import Project from "./Component/Project/Project";
import MyCerifications from "./Component/My-Certifications/Mycertifiaction";
import MyResume from "./Component/My-Resume/my-resume";
import Experience from "./Component/Experience/experience";
const Home = () => {
    return ( 
        <>
        <Main/>
        <Experience/>
        <Skils/>
        <Project/>
        <MyCerifications/>
        <MyResume/>
        </>
     );
}
 
export default Home;