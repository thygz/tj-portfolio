import tjImage from '../assets/tjImage2.png';

const Hero = () => {
    return (
        <section className="pb-56 lg:pb-56" id="hero">
            <div className="max-w-7xl mx-auto flex gap-3 lg:gap-16 xl:gap-40 flex-col-reverse lg:flex-row justify-center items-center px-5">
                <div className="max-w-xl lg:max-w-6xl mx-auto flex flex-col justify-center lg:justify-start items-center lg:items-start px-0 sm:px-2">
                    <p className="text-xl mt-3 lg:mt-0 font-semibold text-slate-700">
                        Hello I'm
                    </p>
                    <h1 className="text-[3rem] min-[360px]:text-[3.5rem] min-[425px]:text-[4rem] sm:text-[5.5rem] xl:text-8xl px-1 py-2 mt-[-1.5rem] xl:mt-0 mb-[-1rem] xl:mb-2 font-extrabold font-arizonia bg-gradient-to-b from-sky-700 to-sky-400 text-transparent bg-clip-text">
                        Teejay Villaluz
                    </h1>
                    <p className="text-xl xl:text-2xl font-semibold text-slate-700 text-center md:text-start mt-3">
                        An Equipment/Process Engineer that codes!
                    </p>
                    <p className="text-base xl:text-lg text-center lg:text-start mt-7 font-normal text-slate-500">
                        Though I'm a beginner in this industry, I can assure you
                        that I can provide you a website that is functional and
                        user-friendly. If you want to take your business to the
                        next level, get in touch with me. I'm here to build
                        amazing websites for you.
                    </p>
                    <div className="flex flex-wrap justify-center items-center min-[425px]:justify-start min-[425px]:items-start gap-5 mt-7">
                        <button className="w-44 xl:w-48 py-2 rounded-full bg-sky-500 border border-sky-500 text-white text-base xl:text-lg font-semibold hover:bg-white hover:text-sky-500 hover:border-slate-700 hover:border duration-150">
                            Know me better
                        </button>
                        <button className="w-44 xl:w-48 py-2 rounded-full bg-white border border-slate-700 text-sky-500 text-base xl:text-lg font-semibold hover:bg-sky-500 hover:text-white hover:border-sky-500 duration-150">
                            Look what I can do
                        </button>
                    </div>
                </div>
                <img
                    src={tjImage}
                    alt="tj-image"
                    className="w-96 xl:w-[130%]"
                />
            </div>
        </section>
    );
};
export default Hero;
