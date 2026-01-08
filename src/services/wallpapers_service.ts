import prismaDatabase from "../lib/prisma.js";

const getAllWallpapers = async () => {
    try {
        const wallpapers = await prismaDatabase.wallpaper.findMany();
        return { status: 200, data: wallpapers };
    } catch {
        return { status: 500, data: { message: 'Erro ao buscar wallpapers' } };
    }
};

const getWallpaperById = async (id: number) => {
    try{
        const wallpaper = await prismaDatabase.wallpaper.findUnique({
            where: { id }
        });
        return { status: 200, data: wallpaper };
    } catch {
        return { status: 500, data: { message: 'Erro ao buscar wallpaper' } };
    }
};

const createWallpaper = async (wallpaperData: { title: string, imageUrl: string}) => {
    try {
        const newWallpaper = await prismaDatabase.wallpaper.create({
            data: {
                title: wallpaperData.title,
                imageUrl: wallpaperData.imageUrl
            }
        });
        return { status: 201, data: newWallpaper };
    } catch {
        return { status: 500, data: { message: 'Erro ao criar wallpaper' } };
    }
};

export default {
    getAllWallpapers,
    getWallpaperById,
    createWallpaper
};