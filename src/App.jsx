import About from './components/About';
import Headers from './components/Headers';
import Hero from './components/Hero';
import Skills from './components/Skills';

const App = () => {
    return (
        <div
            className="bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
            // className="bg-background3 bg-center bg-cover bg-no-repeat"
        >
            <Headers />
            <Hero />
            <Skills />
            <About />
        </div>
    );
};
export default App;
