import express from 'express'; // Importa o Express
const router = express.Router();    // Cria um roteador do Express

import wallpapersController from "../controllers/wallpapers_controllers.js"; // Importa o controlador de produtos

router.get("/", wallpapersController.getAllWallpapers); // Rota inicial para todos os wallpapers

export default router; // Exporta o roteador