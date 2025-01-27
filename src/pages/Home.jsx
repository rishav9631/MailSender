import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast"; // Import toast for success/error messages
import { apiConnector } from "../services/apiConnector";
import { contactusEndpoint } from "../services/apis";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [isJobRoleMentioned, setIsJobRoleMentioned] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    try {
      setLoading(true);
      // Make backend API call with the form data
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );

      // Check if the response indicates success
      if (res.data.success) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }

      setLoading(false);
      reset(); // Reset form fields after successful submission
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
        jobRole: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div>
      <form
        className="flex flex-col gap-6 p-6 p-12 mt-20 max-w-md mx-auto bg-white rounded-lg shadow-md border border-gray-200"
        onSubmit={handleSubmit(submitContactForm)}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Contact Recipients
        </h2>

        {/* Recipient's Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="recipientName" className="text-sm font-medium text-gray-700">
            Recipient's Name
          </label>
          <input
            type="text"
            id="recipientName"
            placeholder="Enter recipient's name"
            className="form-input"
            {...register("recipientName", { required: "Recipient's name is required." })}
          />
          {errors.recipientName && (
            <span className="text-xs text-red-500">{errors.recipientName.message}</span>
          )}
        </div>

        {/* Recipient's Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="recipientEmail" className="text-sm font-medium text-gray-700">
            Recipient's Email
          </label>
          <input
            type="email"
            id="recipientEmail"
            placeholder="Enter recipient's email"
            className="form-input"
            {...register("recipientEmail", {
              required: "Recipient's email is required.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address.",
              },
            })}
          />
          {errors.recipientEmail && (
            <span className="text-xs text-red-500">{errors.recipientEmail.message}</span>
          )}
        </div>

        {/* Recipient's Company */}
        <div className="flex flex-col gap-2">
          <label htmlFor="recipientCompany" className="text-sm font-medium text-gray-700">
            Recipient's Company
          </label>
          <input
            type="text"
            id="recipientCompany"
            placeholder="Enter recipient's company"
            className="form-input"
            {...register("recipientCompany", { required: "Recipient's company is required." })}
          />
          {errors.recipientCompany && (
            <span className="text-xs text-red-500">{errors.recipientCompany.message}</span>
          )}
        </div>

        {/* Is Job Role Mentioned */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="isJobRoleMentioned"
            className="form-checkbox"
            checked={isJobRoleMentioned}
            onChange={(e) => setIsJobRoleMentioned(e.target.checked)}
          />
          <label htmlFor="isJobRoleMentioned" className="text-sm font-medium text-gray-700">
            Is job role mentioned?
          </label>
        </div>

        {/* Job Role (conditional rendering) */}
        {isJobRoleMentioned && (
          <div className="flex flex-col gap-2">
            <label htmlFor="jobRole" className="text-sm font-medium text-gray-700">
              Job Role
            </label>
            <input
              type="text"
              id="jobRole"
              placeholder="Enter job role"
              className="form-input"
              {...register("jobRole")}
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          disabled={loading}
          type="submit"
          className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
        >
          Send Message
        </button>
      </form>
      {loading && <div className="mx-auto spinner"></div>}
    </div>
  );
};

export default ContactUsForm;
