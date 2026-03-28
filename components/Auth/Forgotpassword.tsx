"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import BgImage from "../../public/images/bg.jpg";
import { AlertCircle, CheckCircle2, Loader2, Mail } from "lucide-react";
import { useForgotPasswordMutation } from "@/lib/redux/features/auth/authApi";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const router = useRouter();
  
  // ✅ Switch to RTK Query Hook
  const [forgotPassword, { isLoading, isError, error, isSuccess }] = useForgotPasswordMutation() as any;

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // ✅ .unwrap() used with try/catch to handle the manual 'throw' in your API slice
        await forgotPassword(values.email).unwrap();
        // Optional: Redirect after a brief delay so they see the success message
        setTimeout(() => {
           router.push("/resetpassword");
        }, 2000);
      } catch (err) {
        console.error("Forgot password request failed:", err);
      }
    },
  });

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center relative p-4"
      style={{ backgroundImage: `url(${BgImage.src})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

      <div className="max-w-md w-full bg-white/95 backdrop-blur shadow-2xl px-8 py-12 rounded-3xl z-10 border border-white/20">
        <div className="text-center mb-8">
          <div className="bg-[#387467]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-[#387467]" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Forgot Password</h1>
          <p className="text-gray-500 mt-2 text-sm px-4">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full text-gray-900 rounded-xl border bg-gray-50/50 p-4 pl-4 focus:outline-none focus:ring-2 transition-all ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-300 focus:ring-red-100"
                    : "border-gray-200 focus:ring-[#387467]/20"
                }`}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium italic">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* --- STATUS MESSAGES --- */}
          <div className="min-h-[40px]">
            {isError && (
              <div className="flex items-center gap-2 p-3 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl animate-in fade-in zoom-in-95">
                <AlertCircle size={16} className="shrink-0" />
                <span>{String(error?.message)}</span>
              </div>
            )}

            {isSuccess && (
              <div className="flex items-center gap-2 p-3 text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl animate-in fade-in zoom-in-95">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>Reset link sent! Redirecting...</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || isSuccess}
            className="w-full flex items-center justify-center gap-2 bg-[#387467] hover:bg-[#2d5e53] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#387467]/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Processing...
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            Remember your password?
            <Link 
              href="/signin" 
              className="ml-2 font-bold text-[#387467] hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;