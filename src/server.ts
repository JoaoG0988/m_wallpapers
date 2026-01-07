import express from 'express';

import wallpapersRoutes from './routes/wallpapers_routes.js';

const app = express();
app.use(express.json()); // Middleware para parsear JSON
const PORT = 3000;

app.listen(PORT, () => { // Inicia o servidor na porta 3000
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.use("/wallpapers", wallpapersRoutes);

export default app;