import express, {type Request,type Response} from "express";
import {prismaDatabase} from './lib/prisma.js';

const app = express();

app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


app.get("/wallpapers", async (req: Request, res: Response) => {
    const wallpapers = await prismaDatabase.wallpaper.findMany();
    res.json(wallpapers); // Retorna a lista de wallpapers
});

app.post("/wallpapers", async (req: Request, res: Response) =>{
    const result = await prismaDatabase.wallpaper.create({
        data: {
            title: req.body.title,
            category: req.body.category,
            imageUrl: req.body.imageUrl,
            resolution: req.body.resolution,
        },
    });
    res.status(201).json(result);
});



