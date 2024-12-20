import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaRegCopyright } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm('service_novayif', 'template_ai885ag', form.current, {
                publicKey: 'CcNdFxtHTawNOAyZ3',
            })
            .then(
                () => {
                    setLoading(false);
                    form.current.reset();
                    toast.success('Email sent successfully');
                },
                (error) => {
                    setLoading(false);
                    toast.error(error.text);
                }
            );
    };

    return (
        <section className="" id="contact">
            <Toaster />
            <div className="bg-[#fafafa]">
                <h1 className="max-w-6xl px-8 sm:px-12 lg:px-5 xl:px-10 mx-auto pt-24 lg:pt-28 font-extrabold text-[3.4rem] min-[500px]:text-6xl sm:text-7xl text-[#333333] tracking-tighter">
                    contact<span className="text-[#80beef]">.</span>
                </h1>
                <div className="max-w-6xl px-8 sm:px-12 lg:px-5 xl:px-10 pt-5 sm:pt-8 pb-24 lg:pb-28 mx-auto flex flex-col lg:flex-row gap-10 md:gap-10 lg:gap-10 xl:gap-28">
                    <div className="flex flex-col flex-1">
                        <h1 className="font-medium text-3xl text-[#333333]">
                            Get in touch
                        </h1>
                        <p className="text-[#333333] text-lg min-[500px]:text-xl lg:text-lg font-light mt-2">
                            It's my pleasure to be part of your team and have
                            enhanced knowledge in coding.
                        </p>
                        <div className="flex flex-col gap-5 text-lg min-[500px]:text-xl lg:text-lg font-light mt-8 text-[#333333]">
                            <a
                                className="flex gap-2"
                                href="mailto:traxxjester25@gmail.com"
                            >
                                <IoMdMail className="text-3xl" />{' '}
                                traxxjester25@gmail.com
                            </a>
                            <span className="flex gap-2">
                                <FaPhoneAlt className="text-3xl" />{' '}
                                +639296051758
                            </span>
                            <span className="flex gap-2">
                                <FaLocationDot className="text-3xl" /> Timalan
                                Concepcion, Naic Cavite
                            </span>
                        </div>
                    </div>
                    <form
                        onSubmit={sendEmail}
                        className="flex flex-col flex-1 gap-5"
                        ref={form}
                    >
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="name"
                                    className="px-1 text-base min-[500px]:text-lg lg:text-base text-[#333333]"
                                >
                                    Name
                                </label>
                                <input
                                    className="text-lg min-[500px]:text-xl lg:text-lg p-2 min-[500px]:p-3 rounded-md focus:outline-[#333333] border border-[#757575]"
                                    type="text"
                                    name="from_name"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="name"
                                    className="px-1 text-base min-[500px]:text-lg lg:text-base text-[#333333]"
                                >
                                    Email
                                </label>
                                <input
                                    className="text-lg min-[500px]:text-xl lg:text-lg p-2 min-[500px]:p-3 rounded-md focus:outline-[#333333] border border-[#757575]"
                                    type="email"
                                    name="user_email"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="name"
                                    className="px-1 text-base min-[500px]:text-lg lg:text-base text-[#333333]"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="text-lg min-[500px]:text-xl lg:text-lg p-2 min-[500px]:p-3 rounded-md focus:outline-[#333333] border border-[#757575]"
                                    rows="5"
                                    name="message"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            className="bg-[#333333] text-[#ffffff] py-3 rounded-md text-base min-[500px]:text-lg font-semibold hover:bg-opacity-90 duration-300 mt-1"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-4 bg-[#111111] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_14px]">
                <p className="text-[#ffffff] text-md font-extralight">
                    Teejay Villaluz
                </p>
                <div className="flex justify-center items-center gap-1 text-[#ffffff] text-md font-extralight">
                    <FaRegCopyright />
                    <span>All CopyRights Reserved 2024</span>
                </div>
            </div>
        </section>
    );
};
export default Contact;
