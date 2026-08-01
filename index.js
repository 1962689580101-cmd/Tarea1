
const express = require("express");

const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        nombre: "Morse Iván Méndez González ----------------------", 
        cancionFavorita: "Album Canciones de Javier Solís"
    });
});

const PORT = 18000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});


