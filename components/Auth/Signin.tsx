"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, Lock, Mail, Loader2 } from "lucide-react";
import { useLoginMutation } from "@/lib/redux/features/auth/authApi"; // Assume you've added this to your API slices
import { useUserStore } from "@/store/useUserStore";

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
  const { setAuth } = useUserStore();
  const router = useRouter();
  
  // ✅ Switch to RTK Query for consistency across the LMS
  // const [login, { isLoading, error: apiError }] = useLoginMutation();
const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const payload = await login({
          email: values.email,
          password: values.password,
        }).unwrap();

        console.log(payload, "payload...")
        if (payload?.user) {
          const token = payload.accessToken;
          localStorage.setItem("token", token);
          
          setAuth({
            id: payload.user.id,
            email: payload.user.email,
            isAdmin: payload.user.isAdmin
          }, token);

          router.push("/overview");
        }
      } catch (err) {
        console.error("Login failed:", err);
      }
    },
  });

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-slate-50">
      {/* Professional Overlay for ISO Feel */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative z-10 w-full max-w-[440px] px-6">
        {/* Logo / Branding Placeholder */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#387467] text-white mb-4 shadow-lg shadow-[#387467]/20">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">ISO Training Portal</h1>
          <p className="text-slate-500 mt-2">Secure Access to Global Standards LMS</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100">
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">Corporate Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  {...formik.getFieldProps('email')}
                  type="email"
                  placeholder="name@company.com"
                  className={`w-full text-sm pl-10 pr-4 py-3 bg-slate-50 border rounded-xl transition-all focus:ring-2 focus:ring-[#387467]/20 focus:bg-white outline-none ${
                    formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-slate-200 focus:border-[#387467]'
                  }`}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1.5 ml-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between mb-1.5 ml-1">
                <label className="text-sm font-medium text-slate-700">Password</label>
                <Link href="/forgotpassword" className="text-xs font-semibold text-[#387467] hover:underline">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  {...formik.getFieldProps('password')}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full text-sm pl-10 pr-12 py-3 bg-slate-50 border rounded-xl transition-all focus:ring-2 focus:ring-[#387467]/20 focus:bg-white outline-none ${
                    formik.touched.password && formik.errors.password ? 'border-red-400' : 'border-slate-200 focus:border-[#387467]'
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
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1.5 ml-1">{formik.errors.password}</p>
              )}
            </div>

            {/* Error Message */}
            {isError && (
              <div className="p-3 bg-red-50 border border-red-100 rounded-lg flex items-start gap-2 animate-shake">
                <p className="text-xs text-red-600 font-medium leading-relaxed text-center w-full">
                  Invalid credentials. Please try again or contact your admin.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#387467] hover:bg-[#2d5e53] text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-[#387467]/20 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Authenticating...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-slate-500 mt-8">
            New to ISO Training?{" "}
            <Link href="/signup" className="text-[#387467] font-bold hover:underline">
              Create a corporate account
            </Link>
          </p>
        </div>

        {/* ISO Compliance Footer */}
        <div className="mt-8 text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
            Certified Security & GDPR Compliant
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signin;