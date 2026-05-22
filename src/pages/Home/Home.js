import Main from '../../components/Main/Main';
import Skils from '../../components/MySkills/MySkills';
import Project from '../../components/Projects/Projects';
import MyCerifications from '../../components/MyCertifications/MyCertifications';
import MyResume from '../../components/MyResume/MyResume';
import Experience from '../../components/Experience/Experience';
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