'use client';

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import { Message } from '../../../_components/Message';

import classes from './index.module.scss';

function AddReview() {
  const [formData, setFormData] = useState({
    rating: null,
    name: '',
    message: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: '6659035bd18734501b5073b3', // Form ID
          submissionData: Object.entries(formData).map(([name, value]) => ({
            field: name,
            value,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to add review.');
      }

      setSuccess('Review submitted successfully.');
      setFormData({
        rating: null,
        name: '',
        message: '',
      });
    } catch (error) {
      setError(error.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.supaviews}>
      <div className={classes.supaviews__gradient}></div>
      <div className={classes.supaviews__add}>
        <div className={classes.supaview}>
          <p className={classes.supaview__title}>Add a new review</p>
          <form onSubmit={handleSubmit}>
            <div className={classes.supaview__rating}>
              {[...Array(5)].map((_, index) => (
                <div key={index} className={classes.starContainer}>
                  <input
                    type="radio"
                    id={`star${index + 1}`}
                    name="rating"
                    value={index + 1}
                    checked={formData.rating === index + 1}
                    onChange={handleChange}
                    className={classes.hiddenRadio}
                  />
                  <label htmlFor={`star${index + 1}`} className={classes.starLabel}>
                    <FaStar className={formData.rating >= index + 1 ? classes.checked : ''} />
                  </label>
                </div>
              ))}
            </div>
            <div className={classes.supaview__copy}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className={classes.formBtn}>
              <button
                type="submit"
                disabled={isLoading}
                className={classes.submit}
              >
                Add Review
              </button>
            </div>
          </form>
          <Message className={classes.message} error={error} success={success} />
        </div>
      </div>
    </div>
  );
}

export default AddReview;



// 'use client'
// import React, { useState } from 'react'
// import { FaStar } from 'react-icons/fa'

// import { Message } from '../../../_components/Message'

// import classes from './index.module.scss'

// function AddReview() {
//   const [formData, setFormData] = useState({
//     rating: null,
//     name: '',
//     message: '',
//   });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);
//     setError(null);
//     setSuccess(null);

//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           form: '6659035bd18734501b5073b3', // Form ID
//           submissionData: Object.entries(formData).map(([name, value]) => ({
//             field: name,
//             value,
//           })),
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         console.error('Error response:', data); // Log the server response
//         throw new Error(data.message || 'Failed to add review.');
//       }

//       setSuccess('Review submitted successfully.');
//       setFormData({
//         rating: null,
//         name: '',
//         message: '',
//       });
//     } catch (error) {
//       console.error('Catch error:', error); // Log the caught error
//       setError(error.message || 'Something went wrong.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="number"
//         name="rating"
//         value={formData.rating}
//         onChange={handleChange}
//         placeholder="Rating"
//       />
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Name"
//       />
//       <textarea
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         placeholder="Message"
//       />
//       <button type="submit" disabled={isLoading}>
//         Submit Review
//       </button>
//       {error && <p>{error}</p>}
//       {success && <p>{success}</p>}
//     </form>
//   );
// }


// export default AddReview
