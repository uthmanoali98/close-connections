import React, { useState, useEffect } from "react";
import "./Card.css";
import cardBackSvg from "../../assets/close-connections-purple-background.svg"; // Update the path if necessary

// List of questions
const QUESTIONS = [
    "What was my dream job as a kid?",
    "If I could retire in another country where would I go?",
    "Have I attended any professional development conferences? If yes, which was my favorite part?",
    "What would I give a TED talk on?",
    "Am I pro or against office potlucks? Explain why.",
    "What would I get my masters in that’s unrelated to my day job?",
    "What can someone in this room do to help you accomplish your next big goal?",
    "What is the superpower of the colleague next to you?",
    "In three words, explain your role.",
    "What’s one mistake you made at work that you can now laugh about?",
    "What is my go-to office drink order?",
    "What’s my ideal day of company-sponsored volunteering?",
    "What’s one professional goal you’d like to accomplish by the end of the year?",
    "Share a piece of advice you’d give to someone who is new to your field.",
    "What’s one idea you’d like to pitch to your boss but you haven’t done yet because you’ve been too nervous?",
    "Talk about one person who has helped you in your professional life that you’d like to thank.",
    "Who is my current professional role model?",
    "Name 3 artists or musical groups you listen to on your morning commute.",
    "What motivated me to enter this career field?",
    "What’s my favorite part about the work I do?",
    "How would your family describe what you do for work?",
    "Have I ever lived or studied abroad? If yes, where?",
    "What was my first job?",
    "What’s my ideal casual Friday work outfit?",
    "What’s the best office lunch or dinner restaurant?",
    "If you had a time machine, what is a mistake you previously made that you’d choose to make again?",
];

const CardGame = () => {
    const [cards, setCards] = useState([{ id: 0, flipped: false, used: false }]);
    const [currentCard, setCurrentCard] = useState(0);
    const [usedQuestions, setUsedQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState("");

    useEffect(() => {
        // Set the initial question when the component mounts
        setCurrentQuestion(getRandomQuestion());
    }, []);

    const getRandomQuestion = () => {
        if (usedQuestions.length === QUESTIONS.length) {
            // If all questions have been used, reset the used questions
            setUsedQuestions([]);
        }

        // Get a random question that hasn't been used
        const remainingQuestions = QUESTIONS.filter((q) => !usedQuestions.includes(q));
        const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
        const question = remainingQuestions[randomIndex];

        // Add the selected question to the used list
        setUsedQuestions((prev) => [...prev, question]);

        return question;
    };

    const handleFlip = () => {
        const updatedCards = [...cards];
        updatedCards[currentCard].flipped = true; // Flip the current card to show the front
        setCards(updatedCards);
    };

    const handleMoveToUsed = () => {
        const updatedCards = [...cards];
        updatedCards[currentCard].used = true; // Mark the card as "used"
        setCards(updatedCards);

        // Add a new card to the pile
        const newCard = { id: cards.length, flipped: false, used: false };
        updatedCards.push(newCard);
        setCards(updatedCards);

        // Set the next random question
        setCurrentQuestion(getRandomQuestion());

        // Move to the next card in the pile
        setCurrentCard(currentCard + 1);
    };

    return (
        <div className="card-container">
            {cards.map((card, index) => (
                <div
                    key={card.id}
                    className={`card ${card.flipped ? "flipped" : "" // Flip to show the front
                        } ${card.used ? "used" : ""}`} // Move to the used pile
                    style={{
                        zIndex: cards.length - index, // Ensure the top card is on top
                    }}
                    onClick={
                        index === currentCard && !card.used
                            ? card.flipped
                                ? handleMoveToUsed // Move to used pile if already flipped
                                : handleFlip // Flip the card
                            : null
                    }
                >
                    <div className="card-back">
                        <img
                            src={cardBackSvg}
                            alt="Card Back"
                            className="card-image"
                        />
                    </div>
                    <div className="card-front">
                        <p>{currentQuestion}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardGame;
