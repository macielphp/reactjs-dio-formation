import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bgImage from './../../assets/bgImage.jpg'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    
    const [scrollEffect, setScrollEffect] = useState({
        backgroundSize: 250,
        blur: 0,
        opacity: 1
    });

    useEffect(() => {
        const handleScroll = () => {
            const fromTop = window.scrollY;
            const newSize = 250 - (fromTop / 20);
            const newBlur = fromTop / 100;
            const newOpacity = 1 - ((fromTop / document.documentElement.scrollHeight) * 1.3);
            
            if (newSize >= 100) {
                setScrollEffect({
                    backgroundSize: newSize,
                    blur: newBlur,
                    opacity: Math.max(newOpacity, 0)
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className="min-h-screen bg-gray-900">
            {/* Feature Background com Parallax */}
            <div 
                className="fixed top-0 left-0 w-full h-screen z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: `${scrollEffect.backgroundSize}%`,
                    filter: `blur(${scrollEffect.blur}px)`,
                    opacity: scrollEffect.opacity,
                    boxShadow: '0 -50px 20px -20px #111827 inset'
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {/* Navigation */}
                <nav className="bg-black/80 backdrop-blur-sm text-white sticky top-0 z-20">
                    <ul className="flex flex-row justify-end gap-4 p-4 list-none">
                        <li className="hover:bg-sky-700 p-2 hover:rounded-lg transition-all duration-200 cursor-pointer">
                            <Link to="/signIn">sign-in</Link>
                        </li>
                        <li className="hover:bg-sky-700 p-2 hover:rounded-lg transition-all duration-200 cursor-pointer">
                            
                            <Link to="/signUp">sign-up</Link>
                        </li>
                    </ul>
                </nav>

                {/* Spacer for parallax effect */}
                <div className="h-[50vh]"></div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto px-6 pb-20 bg-gray-900/95 backdrop-blur-sm rounded-t-3xl">
                    <div className="space-y-8 pt-12">
                        <h1 className="text-4xl font-bold text-white mb-8">Welcome</h1>
                        
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-sky-400">About Us</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ducimus? 
                                Excepturi temporibus accusamus repellendus eos expedita? Impedit, nostrum veritatis nemo, 
                                modi repellendus omnis vel suscipit animi aperiam iure, sunt illum.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. 
                                Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-sky-400">Our Services</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, 
                                ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ducimus? 
                                Excepturi temporibus accusamus repellendus eos expedita? Impedit, nostrum veritatis nemo, 
                                modi repellendus omnis vel suscipit animi aperiam iure, sunt illum.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. 
                                Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-sky-400">Get Started</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, 
                                a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. 
                                Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <Link 
                                    to="/login"
                                    className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                                >
                                    Get Started
                                </Link>
                                <button className="border-2 border-sky-600 hover:bg-sky-600/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                                    Learn More
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}