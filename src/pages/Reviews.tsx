import React, { useState } from 'react';

const CustomerReviewForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [overallRating, setOverallRating] = useState(5);
  const [recommendToFriend, setRecommendToFriend] = useState(true);
  const [comments, setComments] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      email,
      overallRating,
      recommendToFriend,
      comments,
    });
  };

  return (
      <div className='flex justify-center items-center mt-5'>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-sans-serif">Customer Review form</h2>
            <p className="mb-4 text-roboto">We value your feedback. Please take a moment to review your experience with us.</p>

            <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2 text-roboto">
            Name
            </label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2 text-roboto">
            Email
            </label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="overallRating" className="block font-medium mb-2 text-roboto">
            Overall Experience
            </label>
            <div className="flex items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                  <button
                  key={rating}
                  type="button"
                  className={`px-3 py-1 rounded-md mr-2 ${
                  rating === overallRating
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setOverallRating(rating)}
                  >
                  {rating}
                  </button>
            ))}
            </div>
            </div>

            <div className="mb-4">
            <label htmlFor="recommendToFriend" className="block font-medium mb-2 text-roboto">
            Would you recommend to a friend?
            </label>
            <div className="flex items-center">
            <button
                  type="button"
                  className={`px-3 py-1 rounded-md mr-2 ${
                  recommendToFriend ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setRecommendToFriend(true)}
            >
                  Yes
            </button>
            <button
                  type="button"
                  className={`px-3 py-1 rounded-md ${
                  !recommendToFriend ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setRecommendToFriend(false)}
            >
                  No
            </button>
            </div>
            </div>

            <div className="mb-4">
            <label htmlFor="comments" className="block font-medium mb-2">
            Comments
            </label>
            <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="border rounded px-3 py-2 w-full resize-none h-24"
            ></textarea>
            </div>

            <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded w-full"
            >
            Submit
            </button>
      </form>
      </div>
  );
};

export default CustomerReviewForm;