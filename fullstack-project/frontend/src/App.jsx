import React, { useEffect, useState } from "react";
import Editor from '@monaco-editor/react'
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'


  const App = () => {
  const [review,setreview]=useState(``)

  const [language,setLanguage]=useState("python")
  
  const [loading,setloading]=useState(false)

    const [code,setcode]=useState("// Write code here..")


  async function getReview() {
  setloading(true);

  try {
    const response = await axios.post("http://localhost:3000/ai/get-res", {
      code,
    });

    setreview(response.data);
  } catch (err) {
    setreview("Error Getting AI response",err);
  }

  setloading(false);
}
    
    return (
    <main className='flex h-screen  bg-[#0d1117] text-white '>
      <section className='left flex flex-1 flex-col border-r rounded-2xl border-gray-700'>
      <div className="px-2 py-3  border-b text-white">
        <h1 className="text-2xl  font-semibold hover:text-amber-200 text-center ">AI Code Review </h1>
      </div>
      <div className="h-full rounded-lg overflow-auto">
        <select
        className="bg-emerald-900 mt-1 px-2  rounded-2xl text-[20px] font-medium hover:text-green-200  hover:cursor-pointer active:scale-95 p-1 ml-[35vw]"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
       
        <option value="" disabled>
          Select Language
        </option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
        <option value="java">Java</option>
        
      </select>
   <Editor
        key={language}
        
        defaultLanguage="javascript"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={(value)=>{setcode(value)}}
        className="w-full h-screen pt-1 p-2 rounded-full bg-[#0d1117] font-mono outline-none"
      />
  </div>
      <div className="p-2">
        <button onClick={getReview} className='hover:bg-blue-700 bg-blue-600 py-2 hover:text-black text-2xl cursor-pointer w-full rounded-lg font-semibold transition'>Review</button>
        </div>
      </section>

      <section className="flex flex-col w-1/2 h-screen  border-gray-500 flex-1">
      <div className="px-2 py-3 border-b text-white">
        <h1 className="text-3xl font-light hover:text-green-500 text-center">AI Review✨ </h1>
      </div>
     <div className="rigth p-5 font-light text-2xl overflow-auto text-white rounded bg-gray-900 h-full">
  {loading ? (
    <div className="flex items-center justify-center h-full text-gray-400 animate-pulse">
      Gemini Analyse your Code....
    </div>
  ) : (
    <ReactMarkdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</ReactMarkdown  >
  )}
</div>
      </section>
    </main>
    
    )
  }

  export default App

