import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Book = () => {
    const {bedType} = useParams();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    return (
        <div style={{textAlign: 'center'}}>
            <h1>WelCome {loggedInUser.name} Let's  book a {bedType} Room for you.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>
        </div>
    );
};

export default Book;