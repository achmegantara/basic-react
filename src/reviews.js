import React from 'react';
import './App.css'


function Reviews(){
    // mempersiapkan data dummy JSON
    const reviews = [
      {
        "id": 1,
        "name": "Masayoshi",
        "review": "Harganya murah, kualitas bagus",
        "link" : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      },
      {
        "id": 2,
        "name": "Achmad",
        "review": "Harganya merakyat",
        "link" : "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "id": 3,
        "name": "Akbar",
        "review": "barangnya bagus, perngiriman cepat.",
        "link" : "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ];
    const ListReviews = reviews.map((itemReview) => 
    <div className="Item">
    <img src={itemReview.link}></img>
    <div className="User">
      <h3>{itemReview.name}</h3>
      <p>{itemReview.review}</p>
    </div>
    </div>
  );
    return (
      <div className="Review-box">
        <h2>Reviews</h2>
        {ListReviews}
      </div>
    );
  }

  export default Reviews;