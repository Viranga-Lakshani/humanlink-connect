import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import VideoChat from './pages/VideoChat';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/payment" component={Payment} />
                <Route path="/videochat/:roomId" component={VideoChat} />
            </Switch>
        </Router>
    );
}

export default App;
