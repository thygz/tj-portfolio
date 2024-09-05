import tjImage from '../assets/tjImage3.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const animation = (delay) => ({
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.2, delay: delay } },
});

const Hero = () => {
    return (
        <section
            className="bg-background2 bg-center bg-cover bg-no-repeat -mt-20 pt-20"
            id="hero"
        >
            <div className="max-w-7xl mx-auto flex gap-2 lg:gap-0 xl:gap-5 flex-col-reverse lg:flex-row justify-center items-center pl-5 pb-24 sm:pb-24 lg:pb-0 relative">
                <div className="max-w-xl md:max-w-xl lg:max-w-5xl mx-auto flex flex-1 flex-col justify-center lg:justify-start items-center lg:items-start px-0 lg:px-2 mt-3 lg:mt-0 pr-5 lg:pr-0 z-10">
                    <motion.p
                        variants={animation(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl md:max-w-lg lg:max-w-none font-extrabold text-center lg:text-start text-sky-950"
                    >
                        Hello I'm Teejay Villaluz,
                    </motion.p>
                    <motion.p
                        variants={animation(1)}
                        initial="hidden"
                        animate="visible"
                        className="text-[1.45rem] md:text-3xl lg:text-3xl xl:text-4xl md:max-w-xl lg:max-w-xl font-extrabold text-sky-950 text-center lg:text-start mt-3 md:mt-5 lg:mt-3"
                    >
                        An Equipment/Process Engineer that codes!
                    </motion.p>
                    <motion.p
                        variants={animation(1.5)}
                        initial="hidden"
                        animate="visible"
                        className="lg:max-w-xl text-base md:text-lg lg:text-base xl:text-lg text-center lg:text-start mt-7 font-medium text-sky-950"
                    >
                        Though I'm a beginner in this industry, I can assure you
                        that I can provide you a website that is functional and
                        user-friendly. If you want to take your business to the
                        next level, get in touch with me. I'm here to build
                        amazing websites for you.
                    </motion.p>
                    <motion.div
                        variants={animation(1.5)}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap justify-center items-center min-[425px]:justify-start min-[425px]:items-start gap-5 mt-10 lg:mt-7"
                    >
                        <Link to="about" smooth={true} duration={700}>
                            <button className="w-44 xl:w-48 py-3 rounded-full bg-sky-950 border border-sky-950 text-white text-base font-semibold hover:bg-white hover:text-sky-950 hover:border-sky-950 duration-150">
                                Know me better
                            </button>
                        </Link>
                        <Link to="projects" smooth={true} duration={1000}>
                            <button className="w-44 xl:w-48 py-3 rounded-full bg-white border border-sky-950 text-sky-950 text-base font-semibold hover:bg-sky-950 hover:text-white hover:border-sky-950] duration-150">
                                Look what I can do
                            </button>
                        </Link>
                    </motion.div>
                </div>
                <motion.img
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    src={tjImage}
                    alt="tj-image"
                    className="w-80 sm:w-96 xl:w-[29rem] mt-10 mr-5 lg:mr-32 z-10"
                />
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute -top-20 bottom-0 right-0 w-[63%] lg:w-[32%] xl:w-[30%] bg-gradient-to-b from-[#A7C7E7] to-slate-100 z-0"
                >
                    <h1 className="text-[1.9rem] md:text-4xl lg:text-[2.5rem] xl:text-[2.9rem] rotate-90 absolute top-[21%] min-[500px]:top-[24%] lg:top-[45%] right-[-38%] min-[390px]:right-[-34%] min-[425px]:right-[-31%] min-[460px]:right-[-28%] min-[510px]:right-[-22%] sm:right-[-19%] md:right-[-15%] lg:right-[-28%] xl:right-[-30%] text-[#eaf2fa] font-extrabold uppercase whitespace-nowrap font-lato">
                        Web <span className="text-sky-950">Developer</span>
                    </h1>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;
