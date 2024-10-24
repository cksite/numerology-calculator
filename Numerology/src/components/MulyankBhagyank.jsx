import React, { useState } from 'react';
import { mulyankData, bhagyankData } from '../data';
import "./MulyankBhagyank.css"

const calculateMulyank = (day) => {
    let mulyank = day % 9;
    return mulyank === 0 ? 9 : mulyank;
};

const calculateBhagyank = (date) => {
    const sum = date.getDate() + (date.getMonth() + 1) + date.getFullYear();
    let bhagyank = sum % 9;
    return bhagyank === 0 ? 9 : bhagyank;
};

const MulyankBhagyank = () => {
    const [dob, setDob] = useState('');
    const [mulyank, setMulyank] = useState(null);
    const [bhagyank, setBhagyank] = useState(null);
    const [mulyankResult, setMulyankResult] = useState({});
    const [bhagyankResult, setBhagyankResult] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date(dob);
        const mulyankValue = calculateMulyank(date.getDate());
        const bhagyankValue = calculateBhagyank(date);
        setMulyank(mulyankValue);
        setBhagyank(bhagyankValue);
        setMulyankResult(mulyankData[mulyankValue]);
        setBhagyankResult(bhagyankData[bhagyankValue]);
    };

    return (
        <div className="container">
            <h1 className="cks">Mulyank and Bhagyank Calculator</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="date" 
                    value={dob} 
                    onChange={(e) => setDob(e.target.value)} 
                    required 
                />
                <button type="submit">Calculate</button>
            </form>
            {mulyank && bhagyank && (
                <div className="results">
                    <div className="card">
                        <h2>Mulyank: {mulyank}</h2>
                        <p><b>Traits:</b> {mulyankResult.traits.join(", ")}</p>
                        <p><b>Strengths:</b> {mulyankResult.strengths.join(", ")}</p>
                        <p><b>Challenges:</b> {mulyankResult.challenges.join(", ")}</p>
                        <p><b>Description (English):</b> {mulyankResult.description.en}</p>
                        <p><b>Description (Hindi):</b> {mulyankResult.description.hi}</p>
                    </div>
                    <div className="card">
                        <h2>Bhagyank: {bhagyank}</h2>
                        <p><b>Traits:</b> {bhagyankResult.traits.join(", ")}</p>
                        <p><b>Purpose:</b> {bhagyankResult.purpose}</p>
                        <p><b>Description (English):</b> {bhagyankResult.description.en}</p>
                        <p><b>Description (Hindi):</b> {bhagyankResult.description.hi}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MulyankBhagyank;
