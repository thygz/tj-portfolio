import tjImage from '../assets/tjImage1.png';
import tjImage2 from '../assets/tjImage2.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="-mt-20 pt-32 lg:pt-20" id="hero">
            <div className="max-w-7xl mx-auto flex gap-3 min-[400px]:gap-6 md:gap-12 lg:gap-10 xl:gap-5 flex-col-reverse lg:flex-row justify-center items-center lg:px-5 pb-16 sm:pb-16 lg:pb-0 relative">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="lg:max-w-5xl mx-auto flex flex-1 flex-col px-8 md:px-9 lg:px-2 mt-3 lg:mt-0 lg:pr-0 z-10"
                >
                    <p className="text-[3.1rem] sm:text-7xl lg:text-6xl xl:text-7xl font-extrabold text-[#b6eada] tracking-tighter">
                        Teejay Villaluz
                    </p>
                    <p className="text-[1.37rem] min-[410px]:text-[1.45rem] md:text-2xl lg:max-w-xl font-light text-[#b6eada] mt-2 sm:mt-4 lg:mt-3 xl:mt-5">
                        An Equipment/Process Engineer that codes!
                    </p>
                    <p className="lg:max-w-md xl:max-w-lg text-[1.25rem] lg:text-lg mt-7 lg:mt-5 font-light text-[#b6eada]">
                        Though I'm a beginner in this industry, I can assure you
                        that I can provide you a website that is both functional
                        and user-friendly. If you want to take your business to
                        the next level, get in touch with me. I'm here to build
                        amazing websites for you.
                    </p>
                    <div className="flex flex-col min-[550px]:flex-row gap-5 mt-10 lg:mt-7">
                        <Link to="about" smooth={true} duration={700}>
                            <button className="w-full min-[550px]:w-48 lg:w-44 xl:w-48 py-3 rounded-full bg-[#b6eada] border border-[#b6eada] text-[#03001c] text-lg lg:text-base font-semibold hover:text-[#b6eada] hover:border-[#b6eada] hover:bg-transparent duration-150">
                                Know me better
                            </button>
                        </Link>
                        <Link to="projects" smooth={true} duration={1000}>
                            <button className="w-full min-[550px]:w-48 lg:w-44 xl:w-48 py-3 rounded-full border border-[#b6eada] text-[#b6eada] text-lg lg:text-base font-semibold hover:bg-[#b6eada] hover:text-[#03001c] hover:border-[#b6eada] duration-150">
                                Look what I can do
                            </button>
                        </Link>
                    </div>
                </motion.div>
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    src={tjImage}
                    alt="tj-image"
                    className="w-[19rem] min-[380px]:w-[21rem] min-[400px]:w-[23rem] sm:w-[34rem] lg:w-[33rem] xl:w-[40rem] hidden lg:block z-10"
                />
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    src={tjImage2}
                    alt="tj-image2"
                    className="w-[19rem] min-[380px]:w-[21rem] min-[400px]:w-[23rem] sm:w-[27rem] min-[900px]:w-[30rem] visible lg:hidden z-10"
                />
                {/* <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute -top-20 bottom-0 right-0 w-[63%] lg:w-[32%] xl:w-[30%] bg-gradient-to-b from-[#A7C7E7] to-slate-100 z-0"
                >
                    <h1 className="text-[1.9rem] md:text-4xl lg:text-[2.5rem] xl:text-[2.9rem] rotate-90 absolute top-[16%] min-[500px]:top-[30%] lg:top-[45%] right-[-38%] min-[390px]:right-[-34%] min-[425px]:right-[-31%] min-[460px]:right-[-25%] min-[510px]:right-[-19%] sm:right-[-16%] md:right-[-12%] lg:right-[-28%] xl:right-[-30%] text-[#eaf2fa] font-extrabold uppercase whitespace-nowrap font-lato">
                        Web <span className="text-slate-700">Developer</span>
                    </h1>
                </motion.div> */}
            </div>
        </section>
    );
};
export default Hero;
