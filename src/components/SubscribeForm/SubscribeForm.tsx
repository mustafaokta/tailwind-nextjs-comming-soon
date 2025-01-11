"use client"
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [fullName, setFullName] = useState<string>("");
  const [isApproved, setIsApproved] = useState<boolean>(false);



  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log('email geldi');
    if (isApproved) {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, fullName, isApproved }),
      });
      const data = await res.json();
      setMessage(data.message);
      setEmail('');
    }else{
      setMessage('Please check the box to agree to the terms and conditions');
    }
   
    
    
  };

  return (
    <div className='bg-white text-black p-10'>
      <h1>Enter your email below to secure early access and exclusive offers!</h1>
    {/*   <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Submit</button>
      </form> */}
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="fullName"
          >
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none bg-white focus:border-purple-500"
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div className="md:w-2/3 text-black bg-white">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none bg-white focus:border-purple-500"
        />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block  bg-white text-gray-500 font-bold">
          <input
            className="mr-2 leading-tight bg-white"
            type="checkbox"
            checked={isApproved}
            onChange={(e) => {setIsApproved(e.target.checked), setMessage('') }}
          />
          <span className="text-sm">I approve to get email</span>
        </label>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
      
      {message && <p>{message}</p>}
    </div>
  );
}
