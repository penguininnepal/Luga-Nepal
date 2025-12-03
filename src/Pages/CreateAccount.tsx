import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";

const CreateAccountForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account created for ${formData.name} with email ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white shadow-md rounded-md w-[400px] mx-auto">
      <h1 className="text-xl font-bold text-center">Create Account</h1>

      {/* Step 1: Personal Info */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label>Email</Label>
            <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <Button type="button" onClick={nextStep} className="w-full bg-blue-600 text-white">
            Next
          </Button>
        </div>
      )}

      {/* Step 2: Account Details */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <Label>Password</Label>
            <Input name="password" type="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div>
            <Label>Confirm Password</Label>
            <Input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <div className="flex justify-between">
            <Button type="button" onClick={prevStep} variant="outline">
              Back
            </Button>
            <Button type="button" onClick={nextStep} className="bg-blue-600 text-white">
              Next
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

export default CreateAccountForm;