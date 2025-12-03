import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit=(e: React.FormEvent) => {
    e.preventDefault();
    setError(""); //reset error 

    if(!email || !password) {
    setError("All Fields are Required") // give alert for empty field
    return;
  };
  // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    alert("User Loged in Succesfully");

  };   

  return (
    <div className="flex justify-center items-center h-screen bg-[#f0f1f5]">
      <div className="grid grid-cols-2 w-[800px] h-[600px] bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 duration-500 hover:shadow-2xl">
        {/* Left Section */}
        <form onSubmit={handleSubmit}>
        <section className="flex flex-col flex-1 p-8">
          <h1 className="font-bold text-3xl text-center uppercase text-gray-800">
            Login
          </h1>

          <div className="mt-6 space-y-4">
            {/* Email */}
            <div className="space-y-1">
              <Label className="text-sm text-gray-600">Email</Label>
              <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}
              />
              
            </div>

            {/* Password */}
            <div className="space-y-1">
              <Label className="text-sm text-gray-600">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pr-10" 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? <EyeClosed className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div> 
            </div>

            {/* Terms */}
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                Accept terms and conditions
              </Label>
            </div>

            {/* Login Button */}
            <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Login
            </Button>
            <div className="flex justify-end">
            <button className="text-sm text-blue-500 hover:text-blue-600 cursor-pointer hover:underline ">Forgot Password</button> </div>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500 font-medium">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="flex flex-col space-y-2">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md py-2 font-medium">
                Login with Google
              </button>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 font-medium">
                Login with Facebook
              </button>
              <button 
              onClick={() => navigate('/createAccount')}
              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-md py-2 font-medium">Create Account</button>
            </div>
          </div>
        </section>
        </form>

        {/* Right Section */}
        <section className="flex flex-col justify-center items-center flex-1 bg-blue-100">
          <h2 className="text-xl font-semibold text-gray-700">Welcome Back!</h2>
          <p className="text-sm text-gray-500 mt-2 text-center px-6">
            Sign in to continue exploring our platform and access your personalized dashboard.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Signin;