import { useState } from "react";
import { motion } from "framer-motion";

const roasts = [
    "You're not single by choice, but by universal consensus.",
    "Your ex moved on so fast, NASA is trying to study her speed.",
    "Being single isn't a status, it's just a lifestyle you never grew out of.",
    "You bring 'forever alone' to a whole new level.",
    "Your love life is like a ghost town—plenty of history, but no activity.",
];

export default function RoastPage() {
    const [roast, setRoast] = useState("Click the button for a roast");

    const getRandomRoast = () => {
        const randomIndex = Math.floor(Math.random() * roasts.length);
        setRoast(roasts[randomIndex]);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
            <motion.h1 className="text-4xl font-bold mb-6">Single Guy Roast Generator</motion.h1>
            <div className="p-6 w-96 bg-gray-800 rounded-2xl shadow-xl">
                <p className="text-lg font-semibold text-center">{roast}</p>
            </div>
            <button className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl shadow-lg transition duration-300"
                onClick={getRandomRoast}>Roast Me</button>
        </div>
    );
}
