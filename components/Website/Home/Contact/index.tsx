"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client/react";
import { CREATE_USERS, CUSTOMER_ENQUIRY } from "@/lib/Mutation/mutation";

// ✅ Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9+\-()\s]*$/, "Enter a valid phoneNumber number")
    .required("Phone number is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  // React.useEffect(() => {
  //   setHasMounted(true);
  // }, []);
  // if (!hasMounted) return null;

  const [CreateEnquiry, { loading, error }] = useMutation(CUSTOMER_ENQUIRY, {
    onCompleted: async (data:any) => {
      const payload = data?.createEnquiry;
      if(payload){
         setSuccess(true)
         formik.resetForm()
      }
    },
    onError: (err: any) => {
      if (err?.graphQLErrors?.length) {
        err.graphQLErrors.forEach((graphError: any) => {
          if (graphError.extensions?.errors) {
          }
        });
      }
    }
  });


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
        await CreateEnquiry({
          variables: {
            input: {
              name: values.name,
              email: values.email,
              phoneNumber: values.phoneNumber,
              subject: values.subject,
              message: values.message,
            }
          }
        })
      } catch (error: any) {
        console.log(error, "error")
      }
    },
  });

  return (
    <section id="support" className="px-4 md:px-8 2xl:px-0 mb-[4rem]">
      <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        {/* Background */}
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-linear-to-t from-transparent to-[#dee7ff47] dark:bg-linear-to-t dark:to-[#252A42]"></div>
        <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
          <Image
            key="light-dotted"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
            fill
          />
          <Image
            key="dark-dotted"
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
            fill
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row md:justify-between gap-10">
          {/* ===== Enquiry Form ===== */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full rounded-lg bg-white p-7.5  dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
          >
            <h2 className="mb-8 text-3xl font-semibold text-black dark:text-white">Send us a message</h2>

            <div className="flex flex-col gap-6">
              {/* Full Name + Email */}
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="w-full">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="full name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-b border-gray-500 bg-transparent p-3 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    // className="w-full rounded-md border border-gray-300 p-3  focus:outline-none focus:ring-2 focus:ring-[#387467]"
                  />

                  {formik.errors.name && formik.touched.name && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-b border-gray-500 bg-transparent p-3 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"

                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject + Phone */}
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="w-full">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-b border-gray-500 bg-transparent p-3 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"

                  />
                  {formik.errors.subject && formik.touched.subject && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Phone number"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-b border-gray-500 bg-transparent p-3 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"

                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full border-b border-gray-500 bg-transparent p-3 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"

                />
                {formik.errors.message && formik.touched.message && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                )}
              </div>

              {/* Submit */}

              <button
                onClick={() => formik.handleSubmit()}
                disabled={loading}
                className="inline-flex items-center justify-center w-full rounded-xl   text-white font-semibold px-4  shadow-md w-full  rounded-md bg-[#387467] text-white py-3 mt-4 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending please wait...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {error?.message && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mt-3 text-sm text-center">
                  {error?.message}
                </div>
              )}

              {success && (
                <p className=" text-green-600 px-4 py-3 rounded text-sm relative mt-3 text-center font-medium ">Message sent successfully! </p>
              )}

            </div>
          </motion.div>


          {/* ===== Contact Info ===== */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
          >
            <h2 className="mb-10 text-3xl font-semibold text-black dark:text-white">Find us</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-black dark:text-white">Our Location</h3>
              <p className="text-[#387467]">Plot 2116 Perfect Mall, Amuwo Odofin</p>
              <p className="text-[#387467]">Lagos, Nigeria</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-black dark:text-white">Email Address</h3>
              <a href="mailto:info.truemarkglobal@gmail.com" className="text-[#387467] ">
                info.truemarkglobal@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-medium text-black dark:text-white">Phone Number</h3>
              <a href="tel:+2349057438835" className="text-[#387467]">
                +234 905 743 8835
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
