import {type Request,type Response} from "express";

import wallpapersService from '../services/wallpapers_service.js';

const getAllWallpapers = async (req: Request, res: Response) => {
    try {
        const result = await wallpapersService.getAllWallpapers();
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao recuperar wallpapers' });
    }
};

const getWallpaperById = async (req : Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const result = await wallpapersService.getWallpaperById(id);
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao recuperar wallpaper' });
    }
};

const createWallpaper = async (req: Request, res: Response) => {
    try {
        const wallpaperData = req.body;
        const result = await wallpapersService.createWallpaper(wallpaperData);
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao processar a requisição' });
    }
};

const deleteWallpaper = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const result = await wallpapersService.deleteWallpaper(id);
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar wallpaper' });
    }
};

export default {
    getAllWallpapers,
    getWallpaperById,
    createWallpaper,
    deleteWallpaper
};