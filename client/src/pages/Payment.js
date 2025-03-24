import React from 'react';
import { useHistory } from 'react-router-dom';

function Payment() {
    const history = useHistory();

    const handlePaymentSuccess = () => {
        history.push('/videochat/room123');
    };

    return (
        <div>
            <h1>Payment Page</h1>
            <button onClick={handlePaymentSuccess}>Complete Payment</button>
        </div>
    );
}

export default Payment;
