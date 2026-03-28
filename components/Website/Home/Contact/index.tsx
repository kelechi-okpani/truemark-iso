"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSubmitEnquiryMutation } from "@/lib/redux/features/courses/commerceApi";

const validationSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]*$/, "Phone number must contain only digits") // Only numbers
    .length(11, "Phone number must be exactly 11 digits")         // Exactly 11
    .required("Phone number is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  
  // ✅ Initialize RTK Query Mutation
  const [submitEnquiry, { isLoading, error: apiError }] = useSubmitEnquiryMutation();

  // Auto-hide success message
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // ✅ Call the RTK Query mutation
        await submitEnquiry({
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
          subject: values.subject,
          message: values.message,
        }).unwrap(); // .unwrap() allows us to catch errors in the try/catch block

        setShowSuccess(true);
        resetForm();
      } catch (err) {
        console.error("Enquiry failed:", err);
      }
    },
  });

  return (
    <section id="support" className="px-4 md:px-8 2xl:px-0 mb-[4rem]">
      <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-linear-to-t from-transparent to-[#dee7ff47] dark:bg-linear-to-t dark:to-[#252A42]"></div>
        
        <div className="flex flex-col-reverse md:flex-row md:justify-between gap-">
          {/* ===== Enquiry Form ===== */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full rounded-lg bg-white p-7.5 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-2/4 xl:p-15 shadow-solid-8"
          >
            <h2 className="mb-8 text-3xl font-semibold text-black dark:text-white">Send us a message</h2>

            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="w-full">
                  <input
                    {...formik.getFieldProps('name')}
                    placeholder="Full name"
                    className={`w-full border-b bg-transparent p-3 focus-visible:outline-none transition-all ${
                      formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-500 focus:border-waterloo'
                    }`}
                  />
                  {formik.touched.name && formik.errors.name && <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>}
                </div>

                <div className="w-full">
                  <input
                    {...formik.getFieldProps('email')}
                    placeholder="Email"
                    className={`w-full border-b bg-transparent p-3 focus-visible:outline-none transition-all ${
                      formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-500 focus:border-waterloo'
                    }`}
                  />
                  {formik.touched.email && formik.errors.email && <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="w-full">
                  <input
                    {...formik.getFieldProps('subject')}
                    placeholder="Subject"
                    className="w-full border-b border-gray-500 bg-transparent p-3 focus:border-waterloo focus-visible:outline-none"
                  />
                  {formik.touched.subject && formik.errors.subject && <p className="text-red-500 text-xs mt-1">{formik.errors.subject}</p>}
                </div>

                <div className="w-full">
                  <input
                    {...formik.getFieldProps('phoneNumber')}
                    placeholder="Phone number"
                    type="tel"
                     maxLength={11} 
                    className="w-full border-b border-gray-500 bg-transparent p-3 focus:border-waterloo focus-visible:outline-none"
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{formik.errors.phoneNumber}</p>}
                </div>
              </div>

              <div>
                <textarea
                  {...formik.getFieldProps('message')}
                  placeholder="Your message"
                  rows={4}
                  className="w-full border-b border-gray-500 bg-transparent p-3 focus:border-waterloo focus-visible:outline-none"
                />
                {formik.touched.message && formik.errors.message && <p className="text-red-500 text-xs mt-1">{formik.errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center rounded-md bg-[#387467] py-3 text-white font-semibold transition-all hover:bg-opacity-90 disabled:bg-opacity-50"
              >
                {isLoading ? "Sending message..." : "Send Message"}
              </button>

              {/* API Feedback */}
              {apiError && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded text-center">
                  Something went wrong. Please try again.
                </div>
              )}
              {showSuccess && (
                <div className="p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded text-center animate-pulse">
                  Message sent successfully! We'll get back to you shortly.
                </div>
              )}
            </form>
          </motion.div>

          {/* ===== Contact Info ===== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 md:p-7.5 "
            // className="w-full md:w-2/5 md:p-7.5 lg:w-[26%]"
          >
            <h2 className="mb-8 text-3xl font-semibold text-black dark:text-white">Find us</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-black dark:text-white">Our Location</h3>
                <p className="text-gray-500">Plot 2116 Perfect Mall, Amuwo Odofin, Lagos</p>
              </div>
              <div>
                <h3 className="font-medium text-black dark:text-white">Email</h3>
                <a href="mailto:info@truemarkglobal.com" className="text-[#387467] hover:underline">info.truemarkglobal@gmail.com</a>
              </div>
              <div>
                <h3 className="font-medium text-black dark:text-white">Call Us</h3>
                <a href="tel:+2349057438835" className="text-[#387467]">+234 905 743 8835</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;