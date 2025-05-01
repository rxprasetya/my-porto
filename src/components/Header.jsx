import profile from '../assets/profile.jpg'
export default function Header() {
    return (
        <>
            <div className="pt-32" id="about">
                <div className="sm:mx-12 md:mx-16 lg:mx-32 flex items-center flex-col sm:flex-row">
                    <div className="flex-1">
                        <img className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full transition" src={profile} alt="profile.jpg" />
                    </div>
                    <div className="flex-1 mt-4 sm:mt-0">
                        <p className='text-center sm:text-left'>
                            <span className="sm:text-lg md:text-xl lg:text-2xl font-semibold transition duration-500">RAFID ARTUR PRASETYA</span>
                            <br />
                            <span className="sm:text-sm md:text-md lg:text-lg dark:text-gray-400 text-gray-600 transition duration-500">Front-End Developer</span>
                        </p>
                        <p className="mt-2 mx-4 sm:mx-0 sm:mt-8 sm:text-sm md:text-md lg:text-lg dark:text-gray-400 text-gray-600 text-justify transition duration-500">Hi! My name is Rafid. I'm a Front-End Developer with a passion for creating engaging and user-friendly websites. Proficient in HTML, CSS, and JavaScript, and continuously expanding skills in modern technologies such as ReactJS and React Native. Committed to lifelong learning and contributing to innovative web development.</p>
                        <div className="flex justify-center items-center sm:flex-none sm:justify-start sm:items-start">
                            <button className="mt-8 mx-4 sm:mx-0 px-4 py-2 text-white sm:text-sm md:text-md lg:text-lg rounded-full bg-indigo-500 dark:hover:bg-indigo-800 hover:bg-indigo-400 font-medium transition duration-500" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>See My Portofolio</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}