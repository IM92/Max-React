import React from 'react';
import {Route} from "react-router-dom";
import HomePage from "./componets/pages/HomePage.js";
import LoginPage from "./componets/pages/LoginPage";

const App = () => (
    <div className="ui container">
        <Route path= "/" exact component={HomePage} />
        <Route path= "/login" exact component={LoginPage} />
    </div>
);
export default App;
