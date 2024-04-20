import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Corrected import statement

function CorzinaImage() {
    const { id } = useParams();
    const API = "https://66090ee3a2a5dd477b1509cc.mockapi.io/bainur";
    const [user, setUser] = useState({});
    const navigate = useNavigate(); // Changed to useNavigate()

    async function getService(userID) {
        try {
            const res = await fetch(`${API}/${id}`);
            const data = await res.json();
            setUser(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getService(id);
    }, [id]);

    // Function to navigate to -1
    const navigateToMinusOne = () => {
        navigate(-1); // Changed from navigation.navigate() to navigate()
    }

    return (
        <div style={{display:"flex",alignItems:"flex-start"}} className='container'>
            <img style={{width:"1000px",height:"1200px"}} src={user.avatar} alt="" />
            <button onClick={navigateToMinusOne}>x</button>
        </div>
    );
}

export default CorzinaImage;
