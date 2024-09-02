import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Skills from '../components/Skills';

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <About />
            <Project />
            <Contact />
        </div>
    );
};
export default Home;
