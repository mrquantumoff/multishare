import { ISong } from "../interfaces";
import { getSong as getSongApi } from "@/pages/api/getSong";
import SongActualPage from "./actualPage";

export default async function SongPage({ params }: any) {
    const song: ISong | null = await getSongApi(params.id);

    return <SongActualPage song={song}></SongActualPage>
}