import { ISong } from "../interfaces";
import { getSong as getSongApi } from "@/pages/api/getSong";
import SongActualPage from "./actualPage";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const song: ISong | null = await getSongApi(params.id);
    if (song !== null) {
        const title = song.name + " by " + song.artist;
        return {
            title: title,
            icons: { icon: "/logo.png" }
        }
    }
    else {
        return {
            title: "Unknown song"
        }
    }
}


export const revalidate = 120;

export default async function SongPage({ params }: any) {
    const song: ISong | null = await getSongApi(params.id);

    return <div className="center">
        <SongActualPage song={song} />
    </div>
}