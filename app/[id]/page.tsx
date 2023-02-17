import { ISong } from "../interfaces";
import { getSong as getSongApi } from "@/pages/api/getSong";
import SongActualPage from "./actualPage";

export const revalidate = 120;

export default async function SongPage({ params }: any) {
    const song: ISong | null = await getSongApi(params.id);

    return <div className="center">
        <SongActualPage song={song} />
    </div>
}