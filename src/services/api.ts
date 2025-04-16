import axios from "axios";
import { GameItem } from "../../Backend/src/types/GameItem"; // o desde donde lo tengas accesible

const BASE_URL = "https://higher-or-lower-j1l1.onrender.com"

export const getItems = async (): Promise<GameItem[]> => {
    try {
        const response = await axios.get<GameItem[]>(`${BASE_URL}/items`);
        return response.data
    } catch (error) {
        console.error("Error al obtener los items", error)
        return []
    }
}
