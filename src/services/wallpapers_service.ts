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

export default {
    getAllWallpapers,
    getWallpaperById
};