'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { officeLocations } from '@/lib/officeLocations';

const DownArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [successMessage, setSuccessMessage] = React.useState('');

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
    setSuccessMessage('Thank you! We have received your enquiry.');
    reset();

    setTimeout(() => {
      setSuccessMessage('');
    }, 4000);
  };

  return (
    <div className="w-full bg-[linear-gradient(0deg,white_50%,#e2e2e2_50%)] pt-12 pb-6">
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center pb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-heading mb-2">Not sure who to contact?</p>
        <p className="text-lg text-heading mb-4">
          Complete and send the form and a KGK team member will reply as soon as possible:
        </p>

        <motion.div
          className="relative md:w-72 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <select
            {...register('enquiryType', { required: 'Please select an enquiry type' })}
            className="w-full appearance-none pl-5 pr-10 py-2 rounded-full bg-[#8c7459] text-white text-sm border border-[#8c7459] focus:outline-none"
            defaultValue=""
          >
            <option disabled value="">
              HOW CAN WE HELP YOU?
            </option>
            <option value="info@kgkmail.com">General enquiry</option>
            <option value="media@kgkmail.com">Media/press enquiry</option>
            <option value="info@kgkmail.com">Partnership enquiry</option>
            <option value="hr@kgkmail.com">Career enquiry</option>
            <option value="enquiry.minhk@kgkmail.com">Mining</option>
            <option value="enquiry.gemhk@kgkmail.com">Precious and semi-precious gemstones</option>
            <option value="enquiry.diahk@kgkmail.com">Diamonds</option>
            <option value="enquiry.jewhk@kgkmail.com">Jewellery</option>
          </select>

          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <DownArrowIcon />
          </div>

          {errors.enquiryType && (
            <p className="text-red-500 text-sm mt-2">{errors.enquiryType.message}</p>
          )}
        </motion.div>

        {successMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 font-medium mt-6"
          >
            {successMessage}
          </motion.p>
        )}
      </motion.div>

      {/* Form Card */}
      <motion.div
        className="relative max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#2c2c25] text-white p-8 rounded-2xl shadow-lg">
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            {/* Left Side Inputs */}
            <motion.div className="space-y-4" variants={fadeUp}>
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none placeholder-gray-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('mobile', {
                    required: 'Mobile is required',
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: 'Enter a valid mobile number',
                    },
                  })}
                  type="tel"
                  placeholder="Mobile"
                  className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none placeholder-gray-300"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register('about')}
                  placeholder="About yourself"
                  rows={3}
                  className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none placeholder-gray-300 resize-none"
                />
              </div>
            </motion.div>

            {/* Right Side Inputs */}
            <motion.div className="space-y-4" variants={fadeUp}>
              <div>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none placeholder-gray-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <select
                  {...register('location', { required: 'Please select a location' })}
                  className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none text-gray-300"
                >
                  <option value="">Location</option>
                  {officeLocations.flatMap((region) =>
                    region.offices
                      .filter((office) => office.city)
                      .reduce((acc, office) => {
                        const key = office.country;
                        if (!acc.some((group) => group.country === key)) {
                          acc.push({ country: key, options: [] });
                        }
                        const group = acc.find((g) => g.country === key);
                        group.options.push(
                          <option
                            key={`${office.city}-${office.country}`}
                            value={`${office.city}, ${office.country}`}
                          >
                            {office.city}, {office.country}
                          </option>
                        );
                        return acc;
                      }, [])
                      .map((group) => (
                        <optgroup key={group.country} label={group.country}>
                          {group.options}
                        </optgroup>
                      ))
                  )}
                </select>
                {errors.location && (
                  <p className="text-red-500 text-sm">{errors.location.message}</p>
                )}
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div className="md:col-span-2 mt-4" variants={fadeUp}>
              <button
                type="submit"
                className="bg-[#8c7459] px-8 py-3 rounded-full font-bold text-white mx-auto block hover:opacity-90 transition"
              >
                SUBMIT
              </button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
