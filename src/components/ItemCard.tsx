// components/ItemCard.tsx
import { GameItem } from "../types/GameItem";

const ItemCard = ({ item }: { item: GameItem }) => {
    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg">
            <img src={item.image} className="w-60 h-40 object-cover mb-4" />
            <h2 className="text-lg">{item.name}</h2>

            {/* Verificamos si es un auto o una película */}
            {item.type === "car" ? (
                <p className="text-md text-yellow-300">Price: ${item.price}</p>
            ) : (
                <p className="text-md text-blue-400">Box Office: ${item.boxOffice}</p>
            )}
        </div>
    );
};

export default ItemCard;
