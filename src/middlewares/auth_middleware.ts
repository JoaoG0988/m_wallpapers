import {type Request, type Response, type NextFunction} from "express";

export const adminOnly = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['x-api-key'];
    const secret = process.env.ADMIN_API_KEY;

    if (apiKey && apiKey === secret) {
        return next(); // Chave correta, segue para o controller
    }
    res.status(403).json({message:"Acesso negado: apenas o administrador pode realizar esta operação."});
};
