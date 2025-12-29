import express, {type Request,type Response} from "express";
import {type Wallpaper} from './models.js';
import { prisma } from './lib/prisma.js';

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

let wallpapers: Wallpaper[] = [ // Exemplo de dados -> LIsta de wallpapers
    {
        id: "1",
        title: "Neon City",
        category: "Cyberpunk",
        imageUrl: "/uploads/neon-city.jpg",
        createdAt: new Date()
    }
];

app.get("/wallpapers", (req: Request, res: Response) => {
    res.json(wallpapers) // Retorna a lista de wallpapers
});

app.post("/wallpapers", async (req: Request, res: Response) =>{
    const result = await prisma.Wallpaper.create({
        data: {
            title: req.body.title,
            category: req.body.category,
            imageUrl: req.body.imageUrl,
            resolution: req.body.resolution,
        },
    });
    res.status(201).json(result);
});



