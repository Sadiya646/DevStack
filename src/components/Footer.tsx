
import FooterImage from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className=" border-t border-gray-200 text-gray-600">
            <div className="max-w-7xl mx-auto px-6 py-12">
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                    
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">


                            <img src={FooterImage} alt="" />


                        </div>
                        <p className=" text-gray-500 max-w-sm">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex items-center gap-4  font-medium text-gray-600 pt-2">
                            <a href="https://github.com/Sadiya646" className="hover:text-pink-600 transition-colors">GitHub</a>
                            <a href="" className="hover:text-pink-600 transition-colors">Twitter</a>
                            <a href="https://www.linkedin.com/in/sadia-tasnim-5b6906294/"  className="hover:text-pink-600 transition-colors">LinkedIn</a>
                        </div>
                    </div>

                    {/* Product */}


                    <div className="space-y-3">
                        <h1 className="font-semibold uppercase tracking-wider text-gray-900">Product</h1>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="" className="hover:text-gray-900 transition-colors">Home</a></li>
                            <li><a href="" className="hover:text-gray-900 transition-colors">Technologies</a></li>
                            <li><a href="" className="hover:text-gray-900 transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-3">
                        <h4 className="font-semibold uppercase tracking-wider text-gray-900">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="" className="hover:text-gray-900 transition-colors">About</a></li>
                            <li><a href="" className="hover:text-gray-900 transition-colors">Contact</a></li>
                            <li><a href="" className="hover:text-gray-900 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Legal*/}
                    <div className="space-y-3">
                        <h4 className="font-semibold uppercase tracking-wider text-gray-900">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                            <li><a href="" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

{/* bottom */}

                <div className="pt-8 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-4">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="" className="hover:text-gray-800 transition-colors">Privacy</a>
                        <a href="" className="hover:text-gray-800 transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;