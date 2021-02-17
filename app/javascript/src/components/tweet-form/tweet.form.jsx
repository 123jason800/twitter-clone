import React from 'react';
import Tweet from '../tweet/tweet';
const TweetForm = ({handleChange,handleImageChange,handleSubmit,message,image}) => (
    <div className="p-4 input-post shadow">
        <form onSubmit={handleSubmit}>
            <textarea onChange={handleChange} className="tweet-input mb-3 w-100 px-2 py-1" type="text" value={message}/> 
            <button className="btn-form btn-tweet w-75" type="submit">Tweet</button>
            <label htmlFor="image-select"><span className="icon-upload"></span></label>
            <img className="img-fluid" src={image} />
            <input className="d-none" type="file" onChange={handleImageChange} id="image-select" name="image" accept="image/*" />
        </form> 
    </div>
);

export default TweetForm;