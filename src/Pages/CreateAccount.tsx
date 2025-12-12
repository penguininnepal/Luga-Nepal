
import LogoButton from "@/Components/Home/LogoButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

type FormType = {
  firstname: string;
  surname: string;
  day: string;
  month: string;
  year: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormType>({
    firstname: "",
    surname: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<FormType>>({});
  const [step, setStep] = useState(1);

  const validateStep = () => {
    const newErrors: Partial<FormType> = {};
    if (step === 1) {
      if (!formData.firstname.trim()) newErrors.firstname = "First name is required";
    }
    if (step === 2) {
      if (!formData.day.trim()) newErrors.day = "Day required";
      if (!formData.month.trim()) newErrors.month = "Month required";
      if (!formData.year.trim()) newErrors.year = "Year required";
      if (!formData.gender.trim()) newErrors.gender = "Gender required";
    }
    if (step === 3) {
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    }
    if (step === 4) {
      if (!formData.password.trim()) newErrors.password = "Password required";
      else if (formData.password.length < 6) newErrors.password = "Min 6 characters";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step === 4) {
        // Save to LocalStorage
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const newUser = {
          ...formData,
          id: Date.now().toString()
        };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Navigate to Signin
        navigate('/signin');
      } else {
        setStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

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
              <label htmlFor="surname" className="block text-sm font-bold uppercase tracking-widest text-black">Surname (Optional)</label>
              <input type="text" id="surname" value={formData.surname} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Surname" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label htmlFor="day" className="block text-sm font-bold uppercase tracking-widest text-black">Day</label>
                <input type="text" id="day" value={formData.day} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="DD" />
              </div>
              <div className="space-y-2">
                <label htmlFor="month" className="block text-sm font-bold uppercase tracking-widest text-black">Month</label>
                <input type="text" id="month" value={formData.month} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="MM" />
              </div>
              <div className="space-y-2">
                <label htmlFor="year" className="block text-sm font-bold uppercase tracking-widest text-black">Year</label>
                <input type="text" id="year" value={formData.year} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="YYYY" />
              </div>
            </div>
            {(errors.day || errors.month || errors.year) && <p className="text-red-500 text-xs">Date of birth is required</p>}

            <div className="space-y-2">
              <label htmlFor="gender" className="block text-sm font-bold uppercase tracking-widest text-black">Gender</label>
              <input type="text" id="gender" value={formData.gender} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Gender" />
              {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-black">Email Address</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Email Address" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-bold uppercase tracking-widest text-black">Password</label>
              <input type="password" id="password" value={formData.password} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Min. 6 characters" />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-bold uppercase tracking-widest text-black">Confirm Password</label>
              <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Re-enter password" />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">

      {/* Main Container - Minimalist, No Shadow */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row min-h-[500px]">

        {/* LEFT SECTION: Info & Steps */}
        <div className="md:w-1/2 p-12 flex flex-col justify-between relative">

          <div>
            <div className="mb-8">
              <LogoButton variant="dark" />
            </div>

            <h1 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none text-black">
              {step === 1 && 'Create your\nAccount'}
              {step === 2 && 'Basic\nInformation'}
              {step === 3 && 'Contact\nDetails'}
              {step === 4 && 'Secure your\nAccount'}
              {step === 5 && 'Verify\nIdentity'}
            </h1>

            <p className="text-gray-500 font-light text-lg">
              {step === 1 && 'Start your journey with Luga Mandu.'}
              {step === 2 && 'Tell us a bit about yourself.'}
              {step === 3 && 'How can we reach you?'}
              {step === 4 && 'Create a strong password.'}
            </p>
          </div>

          {/* Step Indicators */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-black">
              Step {step} of 4
            </div>
            <div className="flex gap-2 max-w-[200px]">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i <= step ? 'bg-black' : 'bg-gray-200'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: Form Fields */}
        <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center">

          <div className="flex-grow flex flex-col justify-center">
            {renderStepContent()}
          </div>

          <div className="mt-12 flex items-center justify-between gap-4">
            {step > 1 ? (
              <button onClick={handleBack} className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                <ChevronLeft size={16} className="mr-1" /> Back
              </button>
            ) : <div></div>} {/* Spacer */}

            <button onClick={handleNext} className="group flex items-center bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
              {step === 4 ? "Finish" : "Next"} <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 text-center md:text-right">
            <p className="text-xs text-gray-400">
              Already a member?{' '}
              <button onClick={() => navigate('/signin')} className="font-bold text-black hover:underline uppercase">
                Sign In
              </button>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateAccount;
