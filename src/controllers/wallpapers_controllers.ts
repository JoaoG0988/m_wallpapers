import {type Request,type Response} from "express";

import wallpapersService from '../services/wallpapers_service.js';

const getAllWallpapers = async (req: Request, res: Response) => {
    try {
        const result = await wallpapersService.getAllWallpapers();
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao processar a requisição' });
    }
};

export default {
    getAllWallpapers
};