import express from "express";
import { mockItems } from "./data/mockItems";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta de prueba (podés dejarla o eliminarla si ya no la querés)
app.get("/", (_req, res) => {
    res.send("API funcionando :)");
});

// ✅ Nueva ruta para devolver los items
app.get("/items", (_req, res) => {
    res.json(mockItems);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
