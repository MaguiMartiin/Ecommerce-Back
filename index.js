const express = require('express');
const app = express();
const PORT = 3001; // Puedes cambiar el número de puerto si lo deseas

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express!');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
