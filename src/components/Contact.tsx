"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate form inputs
    if (
      !formData.name.value ||
      !formData.email.value ||
      !formData.message.value
    ) {
      alert("Please fill out all fields!");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_sqyd7h9", // Replace with your EmailJS service ID
        "template_bxkeedy", // Replace with your EmailJS template ID
        {
          from_name: formData.name.value,
          from_email: formData.email.value,
          message: formData.message.value,
        },
        "2tu4HTr9tnEGiVPHv" // Replace with your EmailJS public key
      );

      if (result.text === "OK") {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData(defaultFormState); // Reset the form
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
      {successMessage && (
        <p className="text-green-500 text-sm mt-4">{successMessage}</p>
      )}
    </form>
  );
};
