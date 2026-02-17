import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff, MailCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_BASE_URL;
export default function Register() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        otp: "",
        password: ""
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const sendOtp = async () => {
        await axios.post(`${API_URL}/api/client-register/send-otp`, form);

        setStep(2);
    };

    const verifyOtp = async () => {
        if (!form.otp || !form.password) {
            alert("Please enter OTP and password");
            return;
        }

        try {
            await axios.post(
                `${API_URL}/api/client-register/verify-otp`,
                form
            );

            alert("Account created successfully. Please login.");
            navigate("/login");
        } catch (error) {
            alert(error.response?.data?.message || "Verification failed");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border p-8">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Create Your Account
                </h2>

                {/* STEP 1 */}
                {step === 1 && (
                    <div className="space-y-4">
                        <input name="name" placeholder="Full Name" onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3" />

                        <input name="email" placeholder="Business Email" onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3" />

                        <input name="phone" placeholder="Phone Number" onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3" />

                        <button
                            onClick={sendOtp}
                            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold">
                            Send OTP
                        </button>
                    </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-green-600 text-sm">
                            <MailCheck className="w-5 h-5" /> OTP sent to your email
                        </div>

                        <input name="otp" placeholder="Enter OTP" onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3" />

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Create Password"
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3 pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                {showPassword ? <EyeOff /> : <Eye />}
                            </button>
                        </div>

                        <button
                            onClick={verifyOtp}
                            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold">
                            Verify & Create Account
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}
