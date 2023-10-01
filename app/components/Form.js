"use client";
import React, { useState } from "react";
import Loader from "./Loader";
import { createPrompt,  } from "@/utils/searchApi";

const Form = (props) => {

  //data that will be used by utils
  const [formData, setFormData] = useState({
    programmingLanguage: "",
    database: "",
    platform: "",
    frontendComplexity: "",
    backendComplexity: "",
  });

  //different options for the user to select from
  const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
  const databases = ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Oracle"];
  const platforms = ["Web", "Mobile", "Desktop"];
  const complexityLevels = ["Simple", "Robust"];

  //function to handle changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //simple loader to show that the app is working
  const [loading, setLoading] = useState(false);

  //function to handle the submit of the form
    const handleSubmit = async (e) => {
      
    e.preventDefault();

        setLoading(true);
        let response = await createPrompt(formData);
    setTimeout(() => {
      setLoading(false);
        props.setResults(response)
    }, 2000);
    
    console.log(response);
  };

  return (
    <div className="bg-black bg-opacity-70 min-h-screen text-white  px-4">
      <h2 className="text-black text-3xl font-semibold text-center mb-6">
        Stack Print
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="programmingLanguage"
            className="text-black block text-sm font-medium mb-2"
          >
            Programming Language:
          </label>
          <select
            id="programmingLanguage"
            name="programmingLanguage"
            value={formData.programmingLanguage}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-blue-500 focus:outline-none bg-transparent"
          >
            <option value="">Select a programming language</option>
            {programmingLanguages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="database"
            className="text-black block text-sm font-medium mb-2"
          >
            Database:
          </label>
          <select
            id="database"
            name="database"
            value={formData.database}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-blue-500 focus:outline-none bg-transparent"
          >
            <option value="">Select a database</option>
            {databases.map((db) => (
              <option key={db} value={db}>
                {db}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="platform"
            className="text-black block text-sm font-medium mb-2"
          >
            Platform:
          </label>
          <select
            id="platform"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            className=" w-full p-2 border-b-2 border-blue-500 focus:outline-none bg-transparent"
          >
            <option value="">Select a platform</option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="frontendComplexity"
            className="text-black block text-sm font-medium mb-2 "
          >
            Frontend Complexity:
          </label>
          <select
            id="frontendComplexity"
            name="frontendComplexity"
            value={formData.frontendComplexity}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-blue-500 focus:outline-none bg-transparent"
          >
            <option value="">Select frontend complexity</option>
            {complexityLevels.map((complexity) => (
              <option key={complexity} value={complexity}>
                {complexity}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="backendComplexity"
            className="text-black block text-sm font-medium mb-2"
          >
            Backend Complexity:
          </label>
          <select
            id="backendComplexity"
            name="backendComplexity"
            value={formData.backendComplexity}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-blue-500 focus:outline-none bg-transparent"
          >
            <option value="">Select backend complexity</option>
            {complexityLevels.map((complexity) => (
              <option key={complexity} value={complexity}>
                {complexity}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-6">
          <button
                      type="submit"
                      
            rounded-lg
            p-4
            className="mt-8 w-full bg-indigo-900 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-gray-300 border border-gray-600 leading-snug"
          >
            Get Results
          </button>
        </div>
      </form>

      <Loader loading={loading} />
    </div>
  );
};

export default Form;
