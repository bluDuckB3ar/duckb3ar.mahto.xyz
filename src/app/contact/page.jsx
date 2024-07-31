"use client"; 
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 text-duck-yellow"
    >
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-700 rounded text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-700 rounded text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 bg-gray-700 rounded text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-duck-yellow text-gray-800 px-4 py-2 rounded hover:bg-yellow-400 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-2" />
              <a href="mailto:brennan@mahto.xyz" className="hover:text-duck-pink">brennan@mahto.xyz</a>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" />
              <a href="tel:+13177920841" className="hover:text-duck-pink">(317) 792-0841</a>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>Indianapolis, Indiana</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Connect with me</h3>
            <a
              href="https://www.linkedin.com/in/brennan-mahto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;