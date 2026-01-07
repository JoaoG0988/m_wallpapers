import prismaDatabase from "../lib/prisma.js";

const getAllWallpapers = async () => {
    try {
        const wallpapers = await prismaDatabase.wallpaper.findMany();
        return { status: 200, data: wallpapers };
    } catch {
        return { status: 500, data: { message: 'Erro ao buscar wallpapers' } };
    }
};

export default {
    getAllWallpapers
};