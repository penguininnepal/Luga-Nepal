import LogoButton from "@/Components/Home/LogoButton"
import { Copyright, Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react"
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className="h-[40vh] w-full bg-gray-200">
      <div className="px-28 py-12">
        <div className="grid grid-cols-2">
            <LogoButton />
            <div className="grid grid-cols-2">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Customer Care</h2>
                <h2 className="hover:text-orange-600 cursor-pointer "
                onClick={() =>navigate('/home')}>Help Center</h2>
                <h2 className="hover:text-orange-600 cursor-pointer ">How to Buy</h2>
                <h2 className="hover:text-orange-600 cursor-pointer ">Return & Refund</h2>
                <h2 className="hover:text-orange-600 cursor-pointer ">Conact us</h2>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Logo</h2>
                <h2 className="hover:text-orange-600 cursor-pointer ">About Us</h2>
                <h2 className="hover:text-orange-600 cursor-pointer ">Agriculture Blogs</h2>
                <h2 className="hover:text-orange-600 cursor-pointer ">Digital Payment</h2>
                <h2 className="hover:text-orange-600 cursor-pointer ">Sell With us</h2>
            </div>
        </div>
        </div>
        
        <div className="mt-4 flex justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-sm font-semibold">Find us on</h1>
                <div className=" flex gap-4">
                <button className="bg-white p-1 rounded-full text-blue-400 cursor-pointer"><Facebook /></button>
                <button className="bg-white p-1 rounded-full text-orange-400 cursor-pointer"><Instagram /></button>
                <button className="bg-white p-1 rounded-full text-black cursor-pointer"><Linkedin /></button>
                <button className="bg-white p-1 rounded-full cursor-pointer"><Github /></button>
                <button className="bg-white p-1 rounded-full text-white cursor-pointer"><Youtube className="bg-red-500 rounded h-5 w-6" /></button>
                </div>
            </div>'
            <div className="flex gap-4 items-end">
                <h2 className="text-sm font-semibold hover:text-orange-600 cursor-pointer">Privacy-policy</h2>
                <h2 className="text-sm font-semibold hover:text-orange-600 cursor-pointer">Terms & Conditions</h2>
            </div>
        </div>
        

      </div>
      <div className="bg-white">
            <div className="h-10 flex justify-center items-center gap-4 text-gray-400">
                <h2 className="flex gap-1 text-sm items-center"><Copyright /> All CopyRights Reserved</h2>
                <h2 className="flex text-sm gap-2">Developed by<span>Prajjwal Rana Magar</span></h2>
            </div>
        </div>
    </div>
  )
}

export default Footer
