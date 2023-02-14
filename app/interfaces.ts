export interface ISong {
    id: string;
    name: string;
    artist: string;
    artworkUrl: string;
    spotifyLink: string | undefined | null;
    youtubeLink: string | undefined | null;
    appleMusicLink: string | undefined | null;
}