"use client";
import BouncingSprite from "./components/BouncingSprite";
import { BsArrowDownRight } from "react-icons/bs";
import React, { useState } from "react";
import Form from "./components/Form";
import TypewriterText from "./components/TypewriterText";
import { Monofett } from "next/font/google";
import ResultsCard from "./components/ResultsCard";
import Header from "./components/Header";


const mono = Monofett({ subsets: ["latin"], weight: "400" });
export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 ">
      
      <Header />
      
      {results.length == 0 ? (
        <>
          <BouncingSprite />
          <TypewriterText />
          <Form setResults={setResults} />
        </>
      ) : (
        <>
          <h1
            className={`text-white text-6xl font-semibold text-center mb-6 + ${mono.className}`}
          >
            Results
          </h1>
          <ul>
            <li>
              {results.map((result) => (
                <div key={result.autopromptString}>
                  <p className="text-white text-1xl mt-4">
                    {result.autopromptString}
                  </p>
                  <BsArrowDownRight className="relative right-8 top-5" />

                  {result.results.map((item) => (
                    <ResultsCard
                      string={item.title}
                      color="white"
                      link={item.url}
                      id={item.id}
                      key={item.id}
                    />
                  ))}
                </div>
              ))}
            </li>
          </ul>

          <button
            className="mt-8 w-40 text-center bg-indigo-900 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-gray-300 border border-gray-600 leading-snug"
            onClick={() => setResults([])}
          >
            Go Back
          </button>
        </>
      )}
    </main>
  );
}
