import React, { useState } from 'react';
import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';

const CustomerReviewPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [overallExperience, setOverallExperience] = useState(5);
  const [recommend, setRecommend] = useState(true);
  const [comments, setComments] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      email,
      overallExperience,
      recommend,
      comments
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Customer Review</h1>
          <p className="text-gray-600 text-center">
            We value your feedback. Please take a moment to review your experience with us.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Overall Experience</label>
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div
                  key={value}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    overallExperience >= value
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                  }`}
                  onClick={() => setOverallExperience(value)}
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <label className="block text-gray-700 font-medium mb-2">
                Would you recommend to a friend?
              </label>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className={`mr-2 flex items-center rounded-full p-2 ${
                  recommend
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                }`}
                onClick={() => setRecommend(true)}
              >
                <BsHandThumbsUp className="mr-2" />
                Yes
              </button>
              <button
                type="button"
                className={`flex items-center rounded-full p-2 ${
                  !recommend
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                }`}
                onClick={() => setRecommend(false)}
              >
                <BsHandThumbsDown className="mr-2" />
                No
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">
              Comments
            </label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Please provide any more comments"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Your Feedback Matters</h2>
        <p className="text-gray-600 mb-4">
          Your feedback helps us improve our products and services to better meet your needs. We
          value your honest input and use it to make informed decisions about our business.
        </p>
        <p className="text-gray-600">
          Thank you for taking the time to share your experience with us.
        </p>
      </div>
    </div>
  );
};

export default CustomerReviewPage;