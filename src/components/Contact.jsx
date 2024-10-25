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
        <section className="mt-10 lg:mt-10" id="contact">
            <Toaster />
            <div className="bg-[#03001c] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_44px]">
                <h1 className="max-w-7xl px-8 md:px-9 lg:px-5 mx-auto pt-24 lg:pt-28 font-extrabold text-6xl sm:text-7xl text-[#b6eada] tracking-tighter">
                    contact.
                </h1>
                <div className="max-w-7xl px-8 md:px-9 lg:px-5 pt-8 pb-24 lg:pb-28 mx-auto flex flex-col md:flex-row gap-10 md:gap-3 lg:gap-10 xl:gap-28">
                    <div className="flex flex-col flex-1 gap-5">
                        <h1 className="font-bold text-3xl text-[#b6eada]">
                            Get in touch
                        </h1>
                        <p className="text-[#b6eada] text-lg font-normal max-w-full md:max-w-xs lg:max-w-full">
                            It's my pleasure to be part of your team and have
                            enhanced knowledge in coding.
                        </p>
                        <div className="flex flex-col gap-5 text-lg font-medium mt-3 text-[#b6eada]">
                            <a
                                className="flex items-center gap-2"
                                href="mailto:traxxjester25@gmail.com"
                            >
                                <IoMdMail className="text-2xl" />{' '}
                                traxxjester25@gmail.com
                            </a>
                            <span className="flex items-center gap-2">
                                <FaPhoneAlt className="text-2xl" />{' '}
                                +639296051758
                            </span>
                            <span className="flex items-center gap-2">
                                <FaLocationDot className="text-2xl" /> Timalan
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
                                    className="px-1 text-md text-[#b6eada]"
                                >
                                    Name
                                </label>
                                <input
                                    className="text-lg p-3 rounded focus:outline-[#5b8fb9] bg-slate-200"
                                    type="text"
                                    name="from_name"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="name"
                                    className="px-1 text-md text-[#b6eada]"
                                >
                                    Email
                                </label>
                                <input
                                    className="text-lg p-3 rounded focus:outline-[#5b8fb9] bg-slate-200"
                                    type="email"
                                    name="user_email"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="name"
                                    className="px-1 text-md text-[#b6eada]"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="text-lg p-3 rounded focus:outline-[#5b8fb9] bg-slate-200"
                                    rows="5"
                                    name="message"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            className="bg-[#5b8fb9] text-[#03001c] py-3 rounded-md text-lg font-semibold hover:bg-opacity-80 duration-300 mt-1"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-3 gap-1 bg-[#03001c] border-t border-[#5b8fb9] border-opacity-20">
                <p className="text-[#b6eada] text-md font-normal">
                    Teejay Villaluz
                </p>
                <div className="flex justify-center items-center gap-1 text-[#b6eada] text-md font-normal">
                    <FaRegCopyright />
                    <span>All CopyRights Reserved 2024</span>
                </div>
            </div>
        </section>
    );
};
export default Contact;
