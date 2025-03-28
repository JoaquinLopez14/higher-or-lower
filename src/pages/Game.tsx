import { useState } from "react";
import { useLocation } from "react-router-dom";
import { GameItem } from "../types/GameItem";
import { mockItems } from "../utils/mockItems";
import ItemCard from "../components/ItemCard";

// Function to filter items based on game type
const getGameItems = (gameType: string | null): GameItem[] => {
    return mockItems.filter((item) => item.type === gameType);
};

const getItemValue = (item: GameItem): number => {
    return item.type === "car" ? item.price : item.boxOffice
}

const Game = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const gameType = searchParams.get("type");

    // Get filtered items based on the selected game type
    const filteredItems = getGameItems(gameType);

    const [remainingItems, setRemainingItems] = useState<GameItem[]>(filteredItems.slice(2))
    const [currentItems, setCurrentItems] = useState<GameItem[]>(filteredItems.slice(0, 2))

    // Early validation: If gameType is invalid or there aren't at least two items, show an error message
    if (!gameType || filteredItems.length < 2) {
        return (
            <h1 className="text-center mt-10 text-red-500">
                There's not enough elements to play
            </h1>
        );
    }

    // Select the first two items to be compared
    const [item1, item2] = currentItems

    const getRandomItem = (items: GameItem[]): GameItem | null => {
        if (items.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex]
    }

    const handleGuess = (choice: "higher" | "lower") => {
        const value1 = getItemValue(item1)
        const value2 = getItemValue(item2)

        const isCorrect =
            (choice === "higher" && value2 >= value1) ||
            (choice === "lower" && value2 <= value1)

        if (isCorrect) {
            // Choose a random item from remainingItems
            const randomItem = getRandomItem(remainingItems.filter(item => item !== item2));

            // Handle Exception if no more items are available to show
            if (!randomItem) {
                console.log("No more items available")
                return;
            }

            // Update status with new pair of items
            setCurrentItems([item2, randomItem])

            // Delete item1 from remainingItems
            setRemainingItems((prev) => prev.filter(item => item !== item1))

        } else {
            console.log("You failed!")
        }
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-4">
                {gameType === "car" ? "Which car is more expensive?" : "Which movie made more money?"}
            </h1>
            <div className="flex space-x-8">
                <ItemCard item={item1} showValue={true} />
                <ItemCard item={item2} showValue={false} />
            </div>
            <div className="flex flex-col gap-3 m-5">
                <button onClick={() => handleGuess("higher")} className="border-2 border-black p-2 cursor-pointer">Higher</button>
                <button onClick={() => handleGuess("lower")} className="border-2 border-black p-2 cursor-pointer">Lower</button>
            </div>
        </div>
    );
};

export default Game;
