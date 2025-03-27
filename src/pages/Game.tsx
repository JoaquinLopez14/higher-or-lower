import { useLocation } from "react-router-dom";
import { GameItem } from "../types/GameItem";
import { mockItems } from "../utils/mockItems";
import ItemCard from "../components/ItemCard";

// Function to filter items based on game type
const getGameItems = (gameType: string | null): GameItem[] => {
    return mockItems.filter((item) => item.type === gameType);
};

const Game = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const gameType = searchParams.get("type");

    // Get filtered items based on the selected game type
    const items = getGameItems(gameType);

    // Early validation: If gameType is invalid or there aren't at least two items, show an error message
    if (!gameType || items.length < 2) {
        return (
            <h1 className="text-center mt-10 text-red-500">
                There's not enough elements to play
            </h1>
        );
    }

    // Select the first two items to be compared
    const [item1, item2] = items;

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-4">
                {gameType === "car" ? "Which car is more expensive?" : "Which movie made more money?"}
            </h1>
            <div className="flex space-x-8">
                <ItemCard item={item1} />
                <ItemCard item={item2} />
            </div>
        </div>
    );
};

export default Game;
