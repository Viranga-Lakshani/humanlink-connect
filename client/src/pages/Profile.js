import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function Profile() {
    const { id } = useParams();
    const history = useHistory();

    const handlePayment = () => {
        history.push('/payment');
    };

    return (
        <div>
            <h1>Profile {id}</h1>
            <button onClick={handlePayment}>Pay and Enter Video Chat</button>
        </div>
    );
}

export default Profile;
