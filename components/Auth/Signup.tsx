"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, Loader2, User, Mail, Lock, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";
import { useCreateAccountMutation } from "@/lib/redux/features/auth/authApi";

const validationSchema = Yup.object({
  fullname: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Full name is required"),
  email: Yup.string()
    .email("Please use a valid corporate email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Security requirement: Minimum 8 characters")
    .matches(/[A-Z]/, "Must include an uppercase letter")
    .matches(/[0-9]/, "Must include a number")
    .matches(/[^A-Za-z0-9]/, "Must include a special character")
    .required("Password is required"),
});

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [createAccount, { isLoading }] = useCreateAccountMutation();

  const formik = useFormik({
    initialValues: { fullname: "", email: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const result = await createAccount(values).unwrap();
        console.log(result, "result...")
       
        if (result?.data?.success === true) {
          toast.success(`${result?.message}`);
          // toast.success("Account verified. Please sign in to continue.");
          router.push("/signin");
        }
      } catch (err: any) {
         console.log(err, "result...")
        // const errMsg = err?.data?.errors?.[0]?.message || err?.data?.message || "Registration failed. Please contact IT support.";
        toast.error(err?.message);
      }
    },
  });

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
      {/* ISO Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[url('/images/grid.svg')] bg-center"></div>

      <div className="relative z-10 w-full max-w-[480px]">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#387467] text-white mb-4 shadow-xl shadow-[#387467]/20">
            <ShieldCheck size={28} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Get Started with Truemark</h1>
          <p className="text-slate-500 mt-1">ISO Standards & Compliance Training Portal</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100">
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  {...formik.getFieldProps("fullname")}
                  type="text"
                  placeholder="John Doe"
                  className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl transition-all focus:ring-2 focus:ring-[#387467]/20 focus:bg-white outline-none ${
                    formik.touched.fullname && formik.errors.fullname ? "border-red-400" : "border-slate-200 focus:border-[#387467]"
                  }`}
                />
              </div>
              {formik.touched.fullname && formik.errors.fullname && (
                <p className="text-red-500 text-[11px] mt-1 ml-1 font-medium">{formik.errors.fullname}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  {...formik.getFieldProps("email")}
                  type="email"
                  placeholder="work@company.com"
                  className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl transition-all focus:ring-2 focus:ring-[#387467]/20 focus:bg-white outline-none ${
                    formik.touched.email && formik.errors.email ? "border-red-400" : "border-slate-200 focus:border-[#387467]"
                  }`}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-[11px] mt-1 ml-1 font-medium">{formik.errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">Security Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  {...formik.getFieldProps("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-12 py-3 bg-slate-50 border rounded-xl transition-all focus:ring-2 focus:ring-[#387467]/20 focus:bg-white outline-none ${
                    formik.touched.password && formik.errors.password ? "border-red-400" : "border-slate-200 focus:border-[#387467]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {/* Context-aware helper for ISO security */}
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500 text-[11px] mt-1 ml-1 font-medium">{formik.errors.password}</p>
              ) : (
                <p className="text-slate-400 text-[10px] mt-1.5 ml-1">Must include: 8+ chars, Uppercase, Number, & Symbol</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#387467] hover:bg-[#2d5e53] text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-[#387467]/20 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Provisioning Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-50 text-center text-sm text-slate-500">
            Already registered?{" "}
            <Link href="/signin" className="text-[#387467] font-bold hover:underline">
              Sign In to Learning
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;