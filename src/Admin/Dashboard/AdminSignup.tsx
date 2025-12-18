import { useState } from "react";
import Select from "react-select";
import { ProvienceOptions } from "../Data/LocationData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LogoButton from "@/Components/Home/LogoButton";
import { useNavigate } from "react-router-dom";

type FormType = {
  firstname: string;
  lastname: string;
  ownerEmail: string;
  ownerPhone: string;
  businessName: string;
  businessRegNum: string;
  productTarget: string;
  province: string;
  city: string;
  password?: string;
  confirmPassword?: string;
  otp?: string;
};

const AdminSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormType>({
    firstname: "",
    lastname: "",
    ownerEmail: "",
    ownerPhone: "",
    businessName: "",
    businessRegNum: "",
    productTarget: "",
    province: "",
    city: "",
    password: "",
    confirmPassword: "",
    otp: ""
  });

  const [errors, setErrors] = useState<Partial<FormType>>({});
  const [step, setStep] = useState(1);

  const validateStep = () => {
    const newErrors: Partial<FormType> = {};
    if (step === 1) {
      if (!formData.firstname.trim()) newErrors.firstname = "First name is required";
      if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";
      if (!formData.ownerEmail.trim()) newErrors.ownerEmail = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.ownerEmail)) newErrors.ownerEmail = "Invalid email";
      if (!formData.ownerPhone.trim()) newErrors.ownerPhone = "Phone number is required";
      else if (!/\d{10}/.test(formData.ownerPhone)) newErrors.ownerPhone = "Invalid phone number";
    }
    if (step === 2) {
        if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
        if (!formData.businessRegNum.trim()) newErrors.businessRegNum = "Business registration number is required";
        if (!formData.productTarget.trim()) newErrors.productTarget = "Product target is required";
    }
    if (step === 3) {
        if (!formData.province.trim()) newErrors.province = "Province is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
    }
    if (step === 4) {
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    }
    if (step === 5) {
         if (!formData.otp || !formData.otp.trim()) newErrors.otp = "OTP is required";
         // Mock validation: accept any 6 digit
         else if (!/\d{6}/.test(formData.otp)) newErrors.otp = "Invalid OTP (Must be 6 digits)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (id: keyof FormType, value: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step === 5) {
        // Final submission logic here
        console.log("Form Submitted", formData);
        navigate('/admin/dashboard');
      } else {
        setStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const productTargetOptions = [
    { value: "mens-clothes", label: "Men's Clothes" },
    { value: "womens-clothes", label: "Women's Clothes" },
    { value: "shoes", label: "Shoes" },
    { value: "brand-specific", label: "Clothes By Brand Specific" },
  ];

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-2">
                <label htmlFor="firstname" className="block text-sm font-bold uppercase tracking-widest text-black">First Name</label>
                <input type="text" id="firstname" value={formData.firstname} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="First Name" />
                {errors.firstname && <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>}
            </div>
            <div className="space-y-2">
                <label htmlFor="lastname" className="block text-sm font-bold uppercase tracking-widest text-black">Last Name</label>
                <input type="text" id="lastname" value={formData.lastname} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Last Name" />
                {errors.lastname && <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="ownerEmail" className="block text-sm font-bold uppercase tracking-widest text-black">Email Address</label>
              <input type="email" id="ownerEmail" value={formData.ownerEmail} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="owner@example.com" />
              {errors.ownerEmail && <p className="text-red-500 text-xs mt-1">{errors.ownerEmail}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="ownerPhone" className="block text-sm font-bold uppercase tracking-widest text-black">Phone Number</label>
              <input type="tel" id="ownerPhone" value={formData.ownerPhone} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="+977-98********" />
              {errors.ownerPhone && <p className="text-red-500 text-xs mt-1">{errors.ownerPhone}</p>}
            </div>
          </div>
        );
      case 2:
        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
              <div className="space-y-2">
                <label htmlFor="businessName" className="block text-sm font-bold uppercase tracking-widest text-black">Business Name</label>
                <input type="text" id="businessName" value={formData.businessName} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="e.g., Luga Mandu Inc." />
                {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="businessRegNum" className="block text-sm font-bold uppercase tracking-widest text-black">Business Registration No.</label>
                <input type="text" id="businessRegNum" value={formData.businessRegNum} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="123-456-789" />
                {errors.businessRegNum && <p className="text-red-500 text-xs mt-1">{errors.businessRegNum}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="productTarget" className="block text-sm font-bold uppercase tracking-widest text-black">Main Product Category</label>
                <Select
                  id="productTarget"
                  options={productTargetOptions}
                  onChange={(option) => handleSelectChange('productTarget', option?.value || '')}
                  placeholder="Select..."
                  styles={{
                    control: (base) => ({ ...base, border: 0, boxShadow: 'none', borderBottom: '1px solid #d1d5db', borderRadius: 0 }),
                    input: (base) => ({...base, 'input:focus': {boxShadow: 'none'}}),
                  }}
                  className="w-full text-lg focus:outline-none focus:border-black transition-colors bg-transparent"
                />
                {errors.productTarget && <p className="text-red-500 text-xs mt-1">{errors.productTarget}</p>}
              </div>
            </div>
          );
      case 3:
        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <div className="space-y-2">
                    <label htmlFor="province" className="block text-sm font-bold uppercase tracking-widest text-black">Province</label>
                     <Select
                      id="province"
                      options={ProvienceOptions}
                      onChange={(option) => handleSelectChange('province', option?.value || '')}
                      placeholder="Select Province"
                      styles={{
                        control: (base) => ({ ...base, border: 0, boxShadow: 'none', borderBottom: '1px solid #d1d5db', borderRadius: 0 }),
                        input: (base) => ({...base, 'input:focus': {boxShadow: 'none'}}),
                      }}
                      className="w-full text-lg focus:outline-none focus:border-black transition-colors bg-transparent"
                    />
                    {errors.province && <p className="text-red-500 text-xs mt-1">{errors.province}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="city" className="block text-sm font-bold uppercase tracking-widest text-black">City</label>
                    <input type="text" id="city" value={formData.city} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Enter City" />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>
            </div>
        );
      case 4:
        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-bold uppercase tracking-widest text-black">Create Password</label>
                    <input type="password" id="password" value={formData.password} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="••••••••" />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-bold uppercase tracking-widest text-black">Confirm Password</label>
                    <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="••••••••" />
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>
            </div>
        );
      case 5:
        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500 mb-8">
                <div className="text-center mb-6">
                    <p className="text-gray-600">We've sent a 6-digit verification code to your email.</p>
                </div>
                <div className="space-y-2">
                    <label htmlFor="otp" className="block text-sm font-bold uppercase tracking-widest text-black">Enter OTP</label>
                    <input type="text" id="otp" value={formData.otp} onChange={handleChange} maxLength={6} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300 text-center tracking-widest font-mono" placeholder="000000" />
                    {errors.otp && <p className="text-red-500 text-xs mt-1">{errors.otp}</p>}
                </div>
                 <div className="text-center mt-4">
                     <button className="text-xs text-gray-500 hover:text-black underline">Resend Code</button>
                 </div>
            </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-6xl flex flex-col md:flex-row min-h-[550px]">
        {/* LEFT SECTION: Info & Steps */}
        <div className="md:w-1/2 p-12 flex flex-col justify-between relative">
          <div>
            <div className="mb-8">
              <LogoButton variant="dark" />
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none text-black whitespace-pre-wrap">
              {step === 1 && 'Become a\nSeller'}
              {step === 2 && 'Tell us about\nyour Business'}
              {step === 3 && 'Business\nLocation'}
              {step === 4 && 'Secure\nYour Account'}
              {step === 5 && 'Verify\nIdentity'}
            </h1>
            <p className="text-gray-500 font-light text-lg">
              {step === 1 && 'Start your journey with LugaNepal.'}
              {step === 2 && 'Describe your business.'}
              {step === 3 && 'Where is your business located?'}
              {step === 4 && 'Create a strong password.'}
              {step === 5 && 'Enter the code sent to your email.'}
            </p>
          </div>
          {/* Step Indicators */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-black">
              Step {step} of 5
            </div>
            <div className="flex gap-2 max-w-[200px]">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i <= step ? 'bg-black' : 'bg-gray-200'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: Form Fields */}
        <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center">
          <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
            {renderStepContent()}
          </div>
          <div className="mt-12 flex items-center justify-between gap-4 max-w-md mx-auto w-full">
            {step > 1 ? (
              <button onClick={handleBack} className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                <ChevronLeft size={16} className="mr-1" /> Back
              </button>
            ) : <div></div>} {/* Spacer */}
            <button onClick={handleNext} className="group flex items-center bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
              {step === 5 ? "Finish" : "Next"} <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="mt-8 text-center md:text-right max-w-md mx-auto w-full">
            <p className="text-xs text-gray-400">
              Already a seller?{' '}
              <button onClick={() => navigate('/adminsignin')} className="font-bold text-black hover:underline uppercase">
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
