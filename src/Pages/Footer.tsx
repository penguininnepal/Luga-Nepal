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
                        <div onClick={() => navigate('/home')} className="cursor-pointer text-white">
                            <LogoButton className="text-black" />
                        </div>
                        <p className="text-gray-400 text-sm">
                            Premium fashion and lifestyle tailored for the modern individual.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 onClick={()=> navigate('/about')} className="text-lg font-medium tracking-wide mb-2 cursor-pointer">Customer Care</h2>
                        <button onClick={() => navigate('/home')} className="text-gray-400 hover:text-white transition-colors text-left text-sm cursor-pointer">Help Center</button>
                        <button className="text-gray-400 hover:text-white transition-colors text-left text-sm cursor-pointer">How to Buy</button>
                        <button className="text-gray-400 hover:text-white transition-colors text-left text-sm cursor-pointer">Returns & Refunds</button>
                        <button className="text-gray-400 hover:text-white transition-colors text-left text-sm cursor-pointer">Contact Us</button>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg font-medium tracking-wide mb-2 cursor-pointer">About Luga Nepal</h2>
                        <button onClick={() => navigate('/about')} className="text-gray-400 hover:text-white transition-colors text-left text-sm cursor-pointer">About Us</button>
                        <button onClick={() => navigate('/collections')} className="text-gray-400 hover:text-white transition-colors text-left text-sm cursor-pointer">Fashion Blog</button>
                        <button onClick={() => navigate('/collections')} className="text-gray-400 hover:text-white transition-colors text-left text-sm cursor-pointer">Careers</button>
                        <button onClick={() => navigate('/adminsignin')} className="text-gray-400 hover:text-white transition-colors text-left text-sm cursor-pointer">Become a Seller</button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-medium tracking-wide">Stay Connected</h2>
                        <div className="flex gap-4">
                            <button className="text-white hover:text-gray-300 transition-colors cursor-pointer"><Facebook size={20} /></button>
                            <button className="text-white hover:text-gray-300 transition-colors cursor-pointer"><Instagram size={20} /></button>
                            <button className="text-white hover:text-gray-300 transition-colors cursor-pointer"><Linkedin size={20} /></button>
                            <button className="text-white hover:text-gray-300 transition-colors cursor-pointer"><Github size={20} /></button>
                            <button className="text-white hover:text-gray-300 transition-colors cursor-pointer"><Youtube size={20} /></button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-1 text-sm text-gray-500 items-center">
                        <Copyright size={14} />
                        <span>{new Date().getFullYear()} Luga Nepal. All Rights Reserved.</span>
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
