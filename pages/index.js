import { useState } from "react";
import { Button, Card } from "@/components/ui";
import { motion } from "framer-motion";

const roasts = [
    "You're not single by choice, but by universal consensus.",
    "Your ex moved on so fast, NASA is trying to study her speed.",
    "Being single isn't a status, it's just a lifestyle you never grew out of.",
    "You bring 'forever alone' to a whole new level.",
    "Your love life is like a ghost town—plenty of history, but no activity.",
    "Your Tinder matches are so rare, they should be classified as endangered species.",
    "Your ex moved on faster than your Wi-Fi connection.",
    "Even your shadow left you because it found someone better to follow.",
    "You're so single, even your imaginary girlfriend ghosted you.",
    "Your love life is like Windows XP—outdated and no longer supported.",
    "Your dating life is so bad, even Google can't find any matches.",
    "You're proof that love at first sight doesn't always work both ways.",
    "Your longest relationship is with disappointment.",
    "Even a participation trophy would break up with you.",
    "You're like a bad Wi-Fi signal—no connection, no reception, just buffering.",
    "You're so single, you get jealous of third wheels.",
    "If loneliness was a sport, you'd have multiple gold medals.",
    "Your texts are so dry, even the Sahara is concerned.",
    "You're like a forgotten password—no one remembers you and everyone moves on.",
    "Your dating life is like a broken elevator—never going up, always stuck at zero.",
    "Even your pillow stopped cuddling with you at night.",
    "If your love life had a theme song, it would be 'Hello Darkness, My Old Friend.'",
    "Your love life is so bad, even Cupid filed a restraining order against you.",
    "You're so single, your reflection swipes left on you.",
    "Your ex didn’t just move on—she upgraded to first class while you’re still on standby.",
    "Your love life is like a horror movie—everyone is running away from you.",
    "Even Siri ignores your 'Hey' messages at this point.",
    "You have more chances of getting hit by lightning than getting a date.",
    "Your love life is so nonexistent, even FBI background checks come up empty.",
    "You’re so lonely, even Alexa won’t talk to you anymore.",
    "Your romantic history is like a DVD nobody wants to rent.",
    "You’re so undateable, your dating app matches come with a sympathy card.",
    "Even ghosts don’t want to haunt your love life—it’s too dead for them.",
    "You're so single, Hallmark is making a 'Forever Alone' card in your honor.",
    "Your ex didn’t just move on—she sprinted like she was escaping a burning building.",
    "Your love life is so cold, even penguins are warmer than your relationships.",
    "Your last real relationship was with your childhood stuffed animal, and even it left you."
];

export default function RoastPage() {
    const [roast, setRoast] = useState("Click the button for a roast");

    const getRandomRoast = () => {
        const randomIndex = Math.floor(Math.random() * roasts.length);
        setRoast(roasts[randomIndex]);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
            <motion.h1 
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Single Guy Roast Generator
            </motion.h1>
            <Card className="p-6 w-96 bg-gray-800 rounded-2xl shadow-xl">
                <p className="text-lg font-semibold text-center">{roast}</p>
            </Card>
            <Button 
                className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl shadow-lg transition duration-300"
                onClick={getRandomRoast}
            >
                Roast Me
            </Button>
        </div>
    );
}
