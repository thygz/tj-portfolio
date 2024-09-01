import tjImage from '../assets/tjImage3.png';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section className="" id="hero">
            <div className="max-w-7xl mx-auto flex gap-0 lg:gap-5 xl:gap-20 flex-col-reverse lg:flex-row justify-center items-center pl-5 pb-20 sm:pb-28 lg:pb-0 relative">
                <div className="max-w-xl md:max-w-xl lg:max-w-6xl mx-auto flex flex-1 flex-col justify-center lg:justify-start items-center lg:items-start px-0 sm:px-2 mt-5 lg:mt-0 pr-5 z-10">
                    <p className="text-3xl md:text-4xl xl:text-5xl md:max-w-md lg:max-w-none font-extrabold text-center lg:text-start py-1 bg-gradient-to-t from-sky-950 to-sky-950 lg:to-[#A7C7E7] text-transparent bg-clip-text">
                        <span className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold bg-gradient-to-t from-sky-950 to-sky-950 lg:to-[#A7C7E7] text-transparent bg-clip-text">
                            Hello I'm
                        </span>{' '}
                        Teejay Villaluz,
                    </p>
                    <p className="text-xl md:text-2xl lg:text-xl xl:text-2xl md:max-w-md lg:max-w-none font-semibold lg:font-bold bg-gradient-to-t from-sky-950 to-sky-950 lg:to-[#A7C7E7] text-transparent bg-clip-text text-center lg:text-start mt-2 lg:mt-3">
                        An Equipment/Process Engineer that codes!
                    </p>
                    <p className="text-base md:text-lg lg:text-base xl:text-lg text-center lg:text-start mt-7 lg:mt-2 font-normal text-sky-950">
                        Though I'm a beginner in this industry, I can assure you
                        that I can provide you a website that is functional and
                        user-friendly. If you want to take your business to the
                        next level, get in touch with me. I'm here to build
                        amazing websites for you.
                    </p>
                    <div className="flex flex-wrap justify-center items-center min-[425px]:justify-start min-[425px]:items-start gap-5 mt-10 lg:mt-7">
                        <Link to="about" smooth={true} duration={700}>
                            <button className="w-44 xl:w-48 py-3 rounded-full bg-sky-950 border border-sky-950 text-white text-base font-semibold hover:bg-[#A7C7E7] hover:text-white hover:border-[#A7C7E7] duration-150">
                                Know me better
                            </button>
                        </Link>
                        <Link to="projects" smooth={true} duration={1000}>
                            <button className="w-44 xl:w-48 py-3 rounded-full bg-white lg:bg-[#A7C7E7] border border-sky-950 lg:border-[#A7C7E7] text-sky-950 lg:text-white text-base font-semibold hover:bg-sky-950 hover:text-white hover:border-sky-950] duration-150">
                                Look what I can do
                            </button>
                        </Link>
                    </div>
                </div>
                <img
                    src={tjImage}
                    alt="tj-image"
                    className="w-80 sm:w-96 xl:w-[29rem] mt-10 mr-0 lg:mr-32 z-10"
                />
                <div className="absolute -top-20 bottom-0 right-0 w-[63%] lg:w-[32%] xl:w-[30%] bg-gradient-to-b from-[#A7C7E7] to-slate-100 z-0">
                    <h1 className="text-[1.9rem] md:text-4xl lg:text-[2.5rem] xl:text-[2.9rem] rotate-90 absolute top-[21%] min-[500px]:top-[24%] lg:top-[45%] right-[-38%] min-[390px]:right-[-34%] min-[425px]:right-[-31%] min-[460px]:right-[-28%] min-[510px]:right-[-22%] sm:right-[-19%] md:right-[-15%] lg:right-[-28%] xl:right-[-30%] text-[#eaf2fa] font-extrabold uppercase whitespace-nowrap font-lato">
                        Web <span className="text-sky-950">Developer</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};
export default Hero;
