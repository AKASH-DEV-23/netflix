import { ChevronRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex flex-col items-center justify-center text-center py-24 text-white max-w-6xl mx-auto">
                    <p className="text-lg md:text-2xl font-semibold mb-7">Ready to watch? Enter your email to create or restart your membership.</p>


                    <div className="flex flex-col md:flex-row gap-4 w-1/2">
                        <input type="email" placeholder="Email address" className="p-1 rounded flex-1 bg-black/80 border border-gray-700 text-base pl-4" />

                        <button className="bg-red-600 text-sm lg:text-base px-1 lg:px-6 py-1  md:py-1 rounded flex justify-center items-center">Get Started
                            <ChevronRight className="size-8 md:size-10" />
                        </button>

                    </div>
                </div>


                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-base text-gray-400 text-center">
                    <a href="#" className="hover:text-red-600">
                        FAQ
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Help Centre
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Account
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Media Centre
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Investor Relations
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Jobs
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Ways to Watch
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Terms of Use
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Privacy
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Cookie Preferences
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Corporate Information
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Contact Us
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Speed Test
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Legal Notices
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Only on Netflix
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
