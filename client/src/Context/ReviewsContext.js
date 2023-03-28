import { createContext, useState, useEffect } from "react";

const ReviewsContext = createContext ([]);

const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([])

  useEffect (() => {
    fetch('/reviews')
      .then(r => r.json())
      .then(data => 
        { 
        setReviews(data)
      })
  }, [])

  const addReview = review => {
    setReviews([...reviews, review]);
  }

  
  return <ReviewsContext.Provider value={{ reviews, addReview }}>{ children }</ReviewsContext.Provider>


}



export { ReviewsContext, ReviewsProvider };