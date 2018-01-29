import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const players = [
    { id: "pc", name: "Prince Chaudhary", role: "Batsman"},
    { id: "vk", name: "Virat Kohli", role: "Batsman"},
    { id: "hp", name: "Hardik Pandya", role: "Allrounder"},
    { id: "msd", name: "Mahendra Singh Dhoni", role: "Wicket-Keeper"},
    { id: "bk", name: "Bhuvaneshwar Kumar", role: "Bowler"},
    { id: "rj", name: "Ravindra Jadeja", role: "Allrounder"},
    { id: "ar", name: "Ajinkya Rahane", role: "Batsman"}
]

ReactDOM.render(<App players={players}/>, document.getElementById('root'));
registerServiceWorker();
