interface AppConfig {
    name: string;
    port: number;
}

const config: AppConfig = {
    name: "WallHub - Wallpaper Manager",
    port: 3000
};

console.log(` ${config.name} rodando http://localhost:${config.port}`)