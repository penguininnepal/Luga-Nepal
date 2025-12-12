import LogoButton from "@/Components/Home/LogoButton"
import { Copyright, Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react"
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="w-full bg-black text-white pt-16 pb-8">
            <div className="px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <LogoButton />
                        <p className="text-gray-400 text-sm">
                            Premium fashion and lifestyle tailored for the modern individual.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg font-medium tracking-wide mb-2">Customer Care</h2>
                        <button onClick={() => navigate('/home')} className="text-gray-400 hover:text-white transition-colors text-left text-sm">Help Center</button>
                        <button className="text-gray-400 hover:text-white transition-colors text-left text-sm">How to Buy</button>
                        <button className="text-gray-400 hover:text-white transition-colors text-left text-sm">Returns & Refunds</button>
                        <button className="text-gray-400 hover:text-white transition-colors text-left text-sm">Contact Us</button>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg font-medium tracking-wide mb-2">About Luga Mandu</h2>
                        <button onClick={() => navigate('/about')} className="text-gray-400 hover:text-white transition-colors text-left text-sm">About Us</button>
                        <button onClick={() => navigate('/collections')} className="text-gray-400 hover:text-white transition-colors text-left text-sm">Fashion Blog</button>
                        <button onClick={() => navigate('/collections')} className="text-gray-400 hover:text-white transition-colors text-left text-sm">Careers</button>
                        <button onClick={() => navigate('/collections')} className="text-gray-400 hover:text-white transition-colors text-left text-sm">Become a Seller</button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-medium tracking-wide">Stay Connected</h2>
                        <div className="flex gap-4">
                            <button className="text-white hover:text-gray-300 transition-colors"><Facebook size={20} /></button>
                            <button className="text-white hover:text-gray-300 transition-colors"><Instagram size={20} /></button>
                            <button className="text-white hover:text-gray-300 transition-colors"><Linkedin size={20} /></button>
                            <button className="text-white hover:text-gray-300 transition-colors"><Github size={20} /></button>
                            <button className="text-white hover:text-gray-300 transition-colors"><Youtube size={20} /></button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-1 text-sm text-gray-500 items-center">
                        <Copyright size={14} />
                        <span>{new Date().getFullYear()} Luga Mandu. All Rights Reserved.</span>
                    </div>
                    <div className="flex gap-6">
                        <button className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</button>
                        <button className="text-sm text-gray-500 hover:text-white transition-colors">Terms & Conditions</button>
                    </div>
                    <div className="text-sm text-gray-600">
                        Developed by Prajjwal Rana Magar
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
