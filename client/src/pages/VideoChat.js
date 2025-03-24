import React from 'react';
import { useParams } from 'react-router-dom';

function VideoChat() {
    const { roomId } = useParams();

    return (
        <div>
            <h1>Video Chat Room {roomId}</h1>
            {/* Video chat integration code goes here */}
        </div>
    );
}

export default VideoChat;
