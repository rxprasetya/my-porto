import { useState } from "react"
import itn from '../assets/itn.png'
import cji from '../assets/cji.png'
import dasi from '../assets/dasi.png'
import html from '../assets/Html.svg'
import css from '../assets/Css.svg'
import tailwind from '../assets/Tailwind.svg'
import js from '../assets/Javascript.svg'
import reactSkill from '../assets/React-skill.svg'
import ReactNative from '../assets/React-Native.svg'
import laravel from '../assets/Laravel.svg'
import catem from '../assets/catem.jpg'
import mangoes from '../assets/mangoes.jpeg'
import stockin from '../assets/stockin.jpeg'
import inlearning from '../assets/inlearning.jpeg'
import ticketin from '../assets/ticketin.jpeg'

export default function Content() {
    const [openEducation, setOpenEducation] = useState(false)
    const [openExperinece, setOpenExperience] = useState(false)
    const [openOrganization, setOpenOrganization] = useState(false)
    const [openSkill, setOpenSkill] = useState(false)

    const [isActiveEducation, setIsActiveEducation] = useState(false)
    const [isActiveExperinece, setIsActiveExperinece] = useState(false)
    const [isActiveOrganization, setIsActiveOrganization] = useState(false)
    const [isActiveSkill, setIsActiveSkill] = useState(false)

    return (
        <>
            <div className="mx-4 sm:mx-12 md:mx-16 lg:mx-32 pt-64" id="experience">
                <div className="flex justify-center">
                    <span className="sm:text-lg md:text-xl lg:text-2xl font-bold transition duration-500">Experiences</span>
                </div>
                <div className="pt-8">
                    <div onClick={() => (setIsActiveEducation(!isActiveEducation), setOpenEducation(!openEducation))} className={`flex justify-between items-center p-2 cursor-pointer rounded dark:hover:text-white hover:text-black transition duration-300 ${openEducation && isActiveEducation ? 'border-l-4 border-indigo-500 dark:text-white text-black' : 'text-gray-600'} `}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-layers transition duration-500" viewBox="0 0 16 16">
                                <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0zM8 9.433 1.562 6 8 2.567 14.438 6z" />
                            </svg>
                            <span className="ml-2 sm:text-md md:text-lg lg:text-xl font-medium transition duration-500">Education</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-chevron-down transform transition-transform duration-500 ${openEducation ? 'rotate-180' : ''}`} viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    <div className={`p-4 overflow-hidden transition-all duration-500 ease-in-out ${openEducation ? 'max-h-full opacity-100 py-4' : 'max-h-0 opacity-0 py-0'} dark:text-gray-400 text-gray-600 dark:bg-gray-900 bg-white`}>
                        <div className="flex flex-col sm:flex-row items-center">
                            <div className="size-32 aspect-square bg-indigo-100 rounded-full flex items-center justify-center">
                                <img
                                    className="w-24 h-24"
                                    src={itn}
                                    alt="logo-ITN"
                                />
                            </div>
                            <p className="sm:ml-4 mt-2 sm:mt-0 text-justify">
                                <span className="block sm:inline text-center sm:text-md md:text-lg lg:text-xl dark:text-white text-black font-medium">Bachelor's of Informatics Engineering</span>
                                <br />
                                <span className="sm:text-sm md:text-md">Insitut Teknologi Nasional Malang, 2021 - 2025</span>
                                <br />
                                <span className="sm:text-sm md:text-md">Jln. Raya Karanglo Km.2 Malang, Jawa Timur, 65145, Indonesia.</span>
                                <br />
                                <span className="sm:text-sm md:text-md dark:text-white text-black">A lot of great experiences during my time at the National Institute of Technology Malang, such as being involved in organization like the Database Laboratory.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="pt-8">
                    <div onClick={() => (setIsActiveExperinece(!isActiveExperinece), setOpenExperience(!openExperinece))} className={`flex justify-between items-center p-2 cursor-pointer rounded dark:hover:text-white hover:text-black transition duration-300 ${openExperinece && isActiveExperinece ? 'border-l-4 border-indigo-500 dark:text-white text-black' : 'text-gray-600'} `}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-briefcase transition duration-500" viewBox="0 0 16 16">
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                            </svg>
                            <span className="ml-2 sm:text-md md:text-lg lg:text-xl font-medium transition duration-500">Job</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-chevron-down transform transition-transform duration-500 ${openExperinece ? 'rotate-180' : ''}`} viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    <div className={`p-4 overflow-hidden transition-all duration-500 ease-in-out ${openExperinece ? 'max-h-full opacity-100 py-4' : 'max-h-0 opacity-0 py-0'} dark:text-gray-400 text-gray-600 dark:bg-gray-900 bg-white`}>
                        <div className="flex flex-col sm:flex-row items-center">
                            <img className="w-32 h-32 bg-indigo-100 rounded-full" src={cji} alt="logo-CJI" />
                            <p className="sm:ml-4 mt-2 sm:mt-0 text-justify">
                                <span className="block sm:inline text-center sm:text-md md:text-lg lg:text-xl dark:text-white text-black font-medium">Internship</span>
                                <br />
                                <span className="sm:text-sm md:text-md">PT. Cheil Jedang Indonesia - Pasuruan, Maret 2024 - April 2024</span>
                                <br />
                                <span className="sm:text-sm md:text-md">Jl. Raya Arjosari, Sarirejo, Arjosari, Kec. Rejoso, Pasuruan, Jawa Timur, Indonesia.</span>
                                <br />
                                <span className="sm:text-sm md:text-md dark:text-white text-black">I gained a lot of valueable experiences during internship at PT. Cheil Jedang Pasuruan, such as communicating and sharing excperiences with officers, which helped me grow into a better person.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="pt-8">
                    <div onClick={() => (setIsActiveOrganization(!isActiveOrganization), setOpenOrganization(!openOrganization))} className={`flex justify-between items-center p-2 cursor-pointer rounded dark:hover:text-white hover:text-black transition duration-300 ${openOrganization && isActiveOrganization ? 'border-l-4 border-indigo-500 dark:text-white text-black' : 'text-gray-600'} `}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-people transition duration-500" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                            </svg>
                            <span className="ml-2 sm:text-md md:text-lg lg:text-xl font-medium transition duration-500">Organization</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-chevron-down transform transition-transform duration-500 ${openOrganization ? 'rotate-180' : ''}`} viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    <div className={`p-4 overflow-hidden transition-all duration-500 ease-in-out ${openOrganization ? 'max-h-full opacity-100 py-4' : 'max-h-0 opacity-0 py-0'} dark:text-gray-400 text-gray-600 dark:bg-gray-900 bg-white`}>
                        <div className="flex flex-col sm:flex-row items-center">
                            <img className="w-32 h-32 bg-indigo-100 rounded-full" src={dasi} alt="logo-DASI" />
                            <p className="sm:ml-4 mt-2 sm:mt-0 text-justify">
                                <span className="block sm:inline text-center sm:text-md md:text-lg lg:text-xl dark:text-white text-black font-medium">Co-Leader of Database Laboratory</span>
                                <br />
                                <span className="sm:text-sm md:text-md">Insitut Teknologi Nasional Malang, 2023 - 2024</span>
                                <br />
                                <span className="sm:text-sm md:text-md">Jln. Raya Karanglo Km.2 Malang, Jawa Timur, 65145, Indonesia.</span>
                                <br />
                                <span className="sm:text-sm md:text-md dark:text-white text-black">Served as the Co-Leader of Database Laboratory at the National Institute of Technology Malang for one year. During my tenure, I collaborated with the Informatics Student Association to organize a workshop focused on database-related topics, providing participants with certificates as recognition.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="pt-8">
                    <div onClick={() => (setIsActiveSkill(!isActiveSkill), setOpenSkill(!openSkill))} className={`flex justify-between items-center p-2 cursor-pointer rounded dark:hover:text-white hover:text-black transition duration-300 ${openSkill && isActiveSkill ? 'border-l-4 border-indigo-500 dark:text-white text-black' : 'text-gray-600'} `}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check-circle transition duration-500" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                            </svg>
                            <span className="ml-2 sm:text-md md:text-lg lg:text-xl font-medium transition duration-500">Skills</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-chevron-down transform transition-transform duration-500 ${openSkill ? 'rotate-180' : ''}`} viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    <div className={`p-4 overflow-hidden transition-all duration-500 ease-in-out ${openSkill ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'} dark:text-gray-400 text-gray-600 dark:bg-gray-900 bg-white`}>
                        <div className="flex justify-center gap-4 md:gap-8">
                            <div className="flex flex-col items-center dark:text-white text-black">
                                <img className="w-8 h-8 sm:w-12 sm:h-12 md:max-2xl:w-16 md:max-2xl:h-16" src={html} alt="HTML.png" />
                                <span className="hidden sm:inline sm:font-semibold sm:text-sm md:max-2xl:text-lg">HTML</span>
                            </div>
                            <div className="flex flex-col items-center dark:text-white text-black">
                                <img className="w-8 h-8 sm:w-12 sm:h-12 md:max-2xl:w-16 md:max-2xl:h-16" src={css} alt="HTML.png" />
                                <span className="hidden sm:inline sm:font-semibold sm:text-sm md:max-2xl:text-lg">CSS</span>
                            </div>
                            <div className="flex flex-col items-center dark:text-white text-black">
                                <img className="w-8 h-8 sm:w-12 sm:h-12 md:max-2xl:w-16 md:max-2xl:h-16" src={tailwind} alt="HTML.png" />
                                <span className="hidden sm:inline sm:font-semibold sm:text-sm md:max-2xl:text-lg">Tailwind CSS</span>
                            </div>
                            <div className="flex flex-col items-center dark:text-white text-black">
                                <img className="w-8 h-8 sm:w-12 sm:h-12 md:max-2xl:w-16 md:max-2xl:h-16 rounded" src={js} alt="HTML.png" />
                                <span className="hidden sm:inline sm:font-semibold sm:text-sm md:max-2xl:text-lg">Javascript</span>
                            </div>
                            <div className="flex flex-col items-center dark:text-white text-black">
                                <img className="w-8 h-8 sm:w-12 sm:h-12 md:max-2xl:w-16 md:max-2xl:h-16" src={reactSkill} alt="HTML.png" />
                                <span className="hidden sm:inline sm:font-semibold sm:text-sm md:max-2xl:text-lg">ReactJs</span>
                            </div>
                            <div className="flex flex-col items-center dark:text-white text-black">
                                <img className="w-8 h-8 sm:w-12 sm:h-12 md:max-2xl:w-16 md:max-2xl:h-16" src={ReactNative} alt="HTML.png" />
                                <span className="hidden sm:inline sm:font-semibold sm:text-sm md:max-2xl:text-lg">ReactNative</span>
                            </div>
                            <div className="flex flex-col items-center dark:text-white text-black">
                                <img className="w-8 h-8 sm:w-12 sm:h-12 md:max-2xl:w-16 md:max-2xl:h-16" src={laravel} alt="HTML.png" />
                                <span className="hidden sm:inline sm:font-semibold sm:text-sm md:max-2xl:text-lg">Laravel</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="sm:mx-8 md:mx-12 lg:mx-32 pt-64 pb-32" id="project">
                    <div className="flex justify-center">
                        <span className="sm:text-lg md:text-xl lg:text-2xl font-bold transition duration-500">Projects</span>
                    </div>

                    <div className="pt-8 flex flex-col gap-6">
                        {[
                            { img: catem, title: "Catering Semerbak", tech: "ReactNative", git: "https://github.com/rxprasetya/Catem.git", about: "An application developed using React Native featuring CRUD (Create, Read, Update, Delete) operations for food and beverage menus. Users can easily add new menu items, edit existing ones, delete items, and view the complete list." },
                            { img: mangoes, title: "Mangoes", tech: "Laravel", git: "https://github.com/rxprasetya/erp-penjualan-olahan-buah.git", about: "An application built using the AdminLTE template and Laravel as the back-end. It is used to manage the sales of processed fruit products, such as fruit chips, fruit juices, and more." },
                            { img: stockin, title: "Stock.In", tech: "Laravel", git: "https://github.com/rxprasetya/peramalan-stok-trend.git", about: "An application built using the Mazzer template and Laravel as the back-end. It is used to forecast stock in a grocery store, such as predicting rice stock based on data from the previous year, and displaying the rice stock forecast for the following year using the Trend Moment method." },
                            { img: inlearning, title: "InLearning", tech: "Front-End", git: "https://github.com/rxprasetya/inlearning.git", about: "This is the front-end display of the InLearning online course application, designed with Tailwind CSS for a clean and modern look. The homepage welcomes users with a clear call-to-action and an inviting layout, encouraging exploration of unlimited learning opportunities." },
                            { img: ticketin, title: "Ticket.In", tech: "Laravel", git: "https://github.com/rxprasetya/SI-Tiket-Transportasi.git", about: "A dashboard website built with AdminLTE for a Transportation Ticket Booking Information System. The system allows users to manage ticket bookings, view schedules, and monitor customer data efficiently." },
                        ].map((item, idx) => (
                            <div key={idx}
                                className="dark:bg-gray-800 bg-indigo-100 rounded overflow-hidden transform transition duration-500 hover:scale-105 w-full">
                                <div className="flex flex-col lg:flex-row items-stretch">
                                    <div className="h-48 md:h-64 lg:h-auto lg:w-full">
                                        <img
                                            className="h-full w-full object-cover"
                                            src={item.img}
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between p-4">
                                        <div>
                                            <h3 className="font-semibold text-xl">{item.title}</h3>
                                            <p className="sm:text-sm md:text-md dark:text-gray-300 text-gray-600">{item.tech}</p>
                                            <p className="sm:text-sm md:text-md dark:text-gray-300 text-gray-600 text-justify mt-2">
                                                {item.about}
                                            </p>
                                        </div>
                                        <div className="mt-4 flex justify-end">
                                            <a
                                                className="font-medium sm:text-sm md:text-md bg-indigo-500 text-white px-3 py-1 rounded-full dark:hover:bg-indigo-600 hover:bg-indigo-400 transition"
                                                href={item.git}
                                                target="_blank"
                                            >
                                                See Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}