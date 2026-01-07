import express from 'express'; // Importa o Express
const router = express.Router();    // Cria um roteador do Express
import {adminOnly} from "../middlewares/auth_middleware.js"
import wallpapersController from "../controllers/wallpapers_controllers.js"; // Importa o controlador de produtos

router.get("/", adminOnly,wallpapersController.getAllWallpapers); // Rota inicial para todos os wallpapers
router.get("/:id",adminOnly, wallpapersController.getWallpaperById);

export default router; // Exporta o roteador