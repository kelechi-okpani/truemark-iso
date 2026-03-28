"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux"; // ✅ Added
import { Eye, EyeOff, Lock, Mail, Loader2, ShieldCheck } from "lucide-react";

// ✅ Import your RTK Mutation and Redux Action
import { useLoginMutation } from "@/lib/redux/features/auth/authApi"; 
import { setCredentials } from "@/lib/redux/features/auth/authSlice"; 

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid corporate email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Security requirement: Minimum 8 characters")
    .required("Password is required"),
});

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch(); // ✅ Initialize Dispatch
  
  const [login, { isLoading, isError }] = useLoginMutation();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Execute the mutation
        const payload = await login({
          email: values.email,
          password: values.password,
        }).unwrap();

        // payload should contain { user: {...}, accessToken: "..." } 
        // Adjust the keys below if your API returns 'token' instead of 'accessToken'
        if (payload?.user && (payload.accessToken || payload.token)) {
          
          // ✅ Update Redux State (This also handles localStorage in your slice)
          dispatch(setCredentials({
            user: payload.user,
            token: payload.accessToken || payload.token
          }));

          router.push("/overview");
        }
      } catch (err) {
        console.error("Authentication Error:", err);
      }
    },
  });

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-[#F8FAFC]">
      {/* ISO Professional Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="relative z-10 w-full max-w-[460px] px-6">
        {/* Branding Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-[#387467] text-white mb-6 shadow-2xl shadow-[#387467]/20 border-4 border-white">
            <ShieldCheck size={40} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
            ISO <span className="text-[#387467]">Portal</span>
          </h1>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">
            Secure Learning Management Environment
          </p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Corporate Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                Corporate Identity
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input
                  {...formik.getFieldProps('email')}
                  type="email"
                  placeholder="USERNAME@ORGANIZATION.COM"
                  className={`w-full text-xs font-bold pl-12 pr-4 py-4 bg-slate-50 border rounded-2xl transition-all uppercase tracking-wider outline-none ${
                    formik.touched.email && formik.errors.email 
                    ? 'border-red-200 focus:ring-4 focus:ring-red-50' 
                    : 'border-slate-100 focus:border-[#387467] focus:ring-4 focus:ring-[#387467]/5'
                  }`}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  Security Key
                </label>
                <Link href="/forgotpassword" data-id="forgot-pass" className="text-[10px] font-black text-[#387467] uppercase tracking-tighter hover:opacity-70">
                  Recovery?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input
                  {...formik.getFieldProps('password')}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full text-xs font-bold pl-12 pr-12 py-4 bg-slate-50 border rounded-2xl transition-all outline-none ${
                    formik.touched.password && formik.errors.password 
                    ? 'border-red-200 focus:ring-4 focus:ring-red-50' 
                    : 'border-slate-100 focus:border-[#387467] focus:ring-4 focus:ring-[#387467]/5'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-[#387467] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* API Error Feedback */}
            {isError && (
              <div className="p-4 bg-red-50 rounded-2xl border border-red-100 animate-pulse">
                <p className="text-[10px] text-red-600 font-black uppercase tracking-widest text-center">
                  Authentication Failed: Invalid Protocol
                </p>
              </div>
            )}

            {/* Action Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#387467] text-white font-black text-[11px] uppercase tracking-[0.2em] py-5 rounded-2xl transition-all active:scale-[0.98] disabled:opacity-50 shadow-xl shadow-[#387467]/10"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <Loader2 className="animate-spin" size={16} />
                  Verifying...
                </div>
              ) : (
                "Authorize Session"
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-50 text-center">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                New Candidate?{" "}
                <Link href="/signup" className="text-[#387467] font-black hover:underline underline-offset-4">
                   Register Account
                </Link>
             </p>
          </div>
        </div>

        {/* Compliance Guardrail */}
        <div className="mt-8 flex flex-col items-center gap-2 opacity-40">
           <div className="h-px w-12 bg-slate-300" />
           <p className="text-[8px] text-slate-500 uppercase tracking-[0.5em] font-black">
              256-BIT ENCRYPTION • ISO/IEC 27001 COMPLIANT
           </p>
        </div>
      </div>
    </main>
  );
};

export default Signin;