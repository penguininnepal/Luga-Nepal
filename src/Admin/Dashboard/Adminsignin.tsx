import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adminsignin = () => {
    const navigate = useNavigate();
    const [adminid , setAdminId] = useState("");
    const [password, setPassword] = useState("");
    const [ error, setError] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        
        if (!adminid || !password){
            setError ("You need to enter your admin id and password to Sign in")
            return;
        }

        const adminidauth = /^\d{7}$/;
        if (!adminidauth.test(adminid)){
            setError("Invalid adminid format")
            return;
        }

        console.log('admin id:', adminid, "password:", password);
        
        navigate('/admin/dashboard')
    }
    
    const [showpassword, setShowPassword] = useState(false);

    return (

        <div className="bg-white min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl font-bold font-arial">Admin Sign In</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-2">
                                <label>
                                    Admin ID
                                </label>
                                <input type="text"
                                        id="adminid"
                                        name="adminid"
                                        value={adminid}
                                        placeholder="Enter Admin ID"
                                        onChange={(e) => setAdminId (e.target.value)}
                                        className="border border-gray-300 rounded px-4 py-2"
                                    />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label>
                                    Password
                                </label>
                                <input type={showpassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={password}
                                        placeholder="Enter Password"  
                                        onChange={(e) => setPassword(e.target.value)}  
                                        className="border border-gray-300 rounded px-4 py-2"
                                    />
                                    {error && <div className="text-red-600 text-sm">{error}</div>}
                                    <span>
                                        <input 
                                        type="checkbox"
                                        onClick={() => setShowPassword(!showpassword)}
                                        /> <label>Show Passwrd</label>
                                    </span>
                            </div>

                            <div className="flex justify-center">
                                <button type="submit"
                                    className="bg-black text-white px-4 py-2 rounded">
                                Sign In
                            </button>
                            </div>

                            <div className="flex justify-center">
                                <button 
                                    onClick={() => navigate('/adminsignup')}
                                    className="text-blue-600 hover:underline text-center cursor-pointer">
                                Sell on LugaNepal
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Adminsignin