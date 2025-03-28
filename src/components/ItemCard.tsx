// components/ItemCard.tsx
import { GameItem } from "../types/GameItem";

interface ItemCardProps {
    item: GameItem,
    showValue: boolean
}


const ItemCard = ({ item, showValue }: ItemCardProps) => {
    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg">
            <img src={item.image} className="w-60 h-40 object-cover mb-4" />
            <h2 className="text-lg">{item.name}</h2>

            {/* Check if 'showValue' is true and then display either the price or box office depending on item type (car or movie) */}
            {showValue ? (
                item.type === "car" ? (
                    <p className="text-md text-yellow-500 ">Price: ${item.price}</p>
                ) : (
                    <p className="text-md text-blue-400">Box Office: ${item.boxOffice}</p>
                )
            ) : (
                // Render an empty paragraph when 'showValue' is false to hide the price/box office
                <p className="text-md text-gray-400"></p>
            )}
        </div>
    );
};

export default ItemCard;
