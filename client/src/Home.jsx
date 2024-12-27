import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Home() {


const[email,setEmail]=useState()
const[password,setPassword]=useState()
const navigate=useNavigate()
    axios.defaults.withCredentials=true;
    // useEffect(() => {
    //     axios.post('http://localhost:3001/login',{email})
    //         .then(result => {
    //             console.log(result)
    //             if (result.data !== "Success ho gaya") {
    //                 navigate('/thanks')
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{console.log(result)
            if(result.data==="Success ho gaya"){
                alert("Correct details entered")
                navigate('/thanks')
            }
    
    })
        .catch(err=>console.log(err))
    }

    return (
      
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
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
                        onChange={(e)=> setEmail(e.target.value)}
                     
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input 
                        type="password" 
                        placeholder="Enter Password"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e)=> setPassword(e.target.value)}
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