"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, Loader2, Lock, ShieldCheck, AlertCircle, CheckCircle2 } from "lucide-react";
import BgImage from "@/public/images/bg.jpg";
import { useVerifyForgotPasswordMutation } from "@/lib/redux/features/auth/authApi";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  otp: Yup.string()
    .matches(/^\d{6}$/, "OTP must be exactly 6 digits")
    .required("OTP is required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .matches(/[A-Z]/, "Include an uppercase letter")
    .matches(/[a-z]/, "Include a lowercase letter")
    .matches(/[0-9]/, "Include a number")
    .matches(/[^A-Za-z0-9]/, "Include a special character")
    .required("Password is required"),
});

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // ✅ Switch to RTK Query
  const [verifyForgot, { isLoading, isError, error, isSuccess }] = useVerifyForgotPasswordMutation() as any;

  const formik = useFormik({
    initialValues: { email: "", otp: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await verifyForgot({
          email: values.email,
          otp: values.otp,
          password: values.password,
        }).unwrap();

        // Redirect after success
        setTimeout(() => router.push("/auth/signin"), 2000);
      } catch (err) {
        console.error("Reset failed:", err);
      }
    },
  });

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/, "");
    if (value.length > 1) return;

    const otpArray = formik.values.otp.split("");
    otpArray[index] = value;
    const newOtp = otpArray.join("");
    formik.setFieldValue("otp", newOtp);

    // Auto-focus next input
    if (value && e.target.nextSibling) {
      (e.target.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center relative p-4"
      style={{ backgroundImage: `url(${BgImage.src})` }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="max-w-md w-full bg-white px-8 py-12 rounded-3xl z-10 shadow-2xl border border-gray-100">
        <div className="text-center mb-8">
          <div className="bg-[#387467]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="text-[#387467]" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Secure Reset</h1>
          <p className="text-gray-500 text-sm mt-1">Enter your details and the 6-digit code</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Confirm Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full text-gray-900 rounded-xl border border-gray-200 p-3.5 focus:outline-none focus:ring-2 focus:ring-[#387467]/20 transition-all"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-[11px] ml-1">{formik.errors.email}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="New Secure Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full text-gray-900 rounded-xl border border-gray-200 p-3.5 focus:outline-none focus:ring-2 focus:ring-[#387467]/20 pr-12 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#387467]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-500 text-[11px] ml-1">{formik.errors.password}</span>
            )}
          </div>

          {/* OTP Section */}
          <div className="pt-2">
            <label className="text-xs font-semibold text-gray-500 ml-1 mb-2 block uppercase tracking-wider">Verification Code</label>
            <div className="flex justify-between gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  value={formik.values.otp[i] || ""}
                  onChange={(e) => handleOtpChange(e, i)}
                  className="w-12 h-14 text-center border-2 border-gray-100 rounded-xl focus:border-[#387467] focus:ring-0 text-[#387467] text-xl font-bold transition-all bg-gray-50"
                />
              ))}
            </div>
            {formik.touched.otp && formik.errors.otp && (
              <span className="text-red-500 text-[11px] ml-1">{formik.errors.otp}</span>
            )}
          </div>

          {/* Status Messages */}
          <div className="min-h-[40px] pt-2">
            {isError && (
              <div className="flex items-center gap-2 p-3 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl">
                <AlertCircle size={16} className="shrink-0" />
                <span>{String(error?.message)}</span>
              </div>
            )}
            {isSuccess && (
              <div className="flex items-center gap-2 p-3 text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>Password updated! Redirecting...</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || isSuccess}
            className="w-full bg-[#387467] hover:bg-[#2d5e53] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#387467]/20 transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Lock size={18} />}
            {isLoading ? "Verifying..." : "Update Password"}
          </button>
        </form>

        <div className="mt-8 flex justify-between text-xs font-medium text-gray-500 border-t border-gray-50 pt-6">
          <Link href="/signin" className="hover:text-[#387467]">Return to Login</Link>
          <Link href="/signup" className="text-pink-600 hover:underline">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;