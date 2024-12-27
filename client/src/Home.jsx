import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Home() {

    axios.defaults.withCredentials=true;
    useEffect(() => {
        axios.post('http://localhost:3001/login')
            .then(result => {
                console.log(result)
                if (result.data !== "Success ho gaya") {
                    navigate('/thanks')
                }
            })
            .catch(err => console.log(err))
    }, [])

  

    return (
      
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input 
                        type="text"
                        placeholder="Enter Name"
                        autoComplete="off"
                        name="name"
                        className="form-control rounded-0"
                       
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                        type="email" 
                        placeholder="Enter email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                     
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Message</strong>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Enter your message"
                        name="message"
                        className="form-control rounded-0"
                       
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Submit
                    </button>
                    </form>
                   
              
            </div>
        </div>
    );
}

export default Home;