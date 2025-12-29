export interface Wallpaper {
    id: string;
    title: string;
    category: 'Natureza' | 'Minimalista' | 'Anime' | 'Outros' | 'Cyberpunk';
    imageUrl: string;
    resolution?: string;
    createdAt?: Date;
}