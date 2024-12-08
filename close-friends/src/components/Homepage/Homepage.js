import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import cardBackSvg from "../../assets/close-connections-purple-background.svg";


const Homepage = () => {
    const navigate = useNavigate();

    const handleStartGame = () => {
        navigate("/game"); // Navigate to the card game route
    };

    return (
        <div className="homepage">
            {/* Existing Content */}
            <div className="content">
                <h1 className="title">Close Connections</h1>
                <p className="subtitle">
                    This deck revitalizes professional networking one question at a time and is a great way to break the ice to learn more about your colleagues and acquaintances
                </p>
                <button className="start-game-button" onClick={handleStartGame}>
                    Start Game
                </button>
            </div>

            <section className="how-it-works">
                <h2 className="section-title">how it works</h2>
                <p className="section-description">
                    Click on a card and it will flip horizontally to reveal questions to ask your colleagues
                </p>

                <div className="card-stack">
                    {/* Stacked Cards */}
                    <div className="card-overlay purple">
                        <img src={cardBackSvg} alt="Card Back" className="card-image" />
                    </div>
                    <div className="card-overlay">
                        <img src={cardBackSvg} alt="Card Back" className="card-image" />
                    </div>
                    <div className="card-overlay">
                        <img src={cardBackSvg} alt="Card Back" className="card-image" />
                    </div>
                </div>

                <p className="section-note">
                </p>
            </section>
        </div>
    );
};

export default Homepage;