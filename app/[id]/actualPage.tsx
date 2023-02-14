/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { ISong } from "../interfaces";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import Error from "./error";

export interface ISongParams {
    song: ISong | null;
}

export default function SongActualPage({ song }: ISongParams) {
    if (song === null) {
        return <Error></Error>;
    }
    const [imageClass, setCurrentImageClass] = useState<string>("blur");
    const [openLink, setOpenLink] = useState<() => void>(() => { });
    const defaultPlatforms = (<div className="links card">
        <Link href={song.spotifyLink ?? "/not-there-yet"}>
            <button onClick={openLink} className="card platform spotify">Spotify</button>
        </Link>
        <Link href={song.appleMusicLink ?? "/not-there-yet"}>
            <button onClick={openLink} className="card platform apple">Apple Music</button>
        </Link>
        <Link href={song.youtubeLink ?? "/not-there-yet"}>
            <button onClick={openLink} className="card platform yt">Youtube</button>
        </Link>
    </div>)
    const [platforms, setPlatforms] = useState<JSX.Element>(defaultPlatforms);
    useEffect(() => {
        setOpenLink(() => {
            console.log("Open Link");
            setPlatforms(<div className="links card">
                <h3 className="text">Loading...</h3>
            </div>)
        });
    }, [])



    useEffect(() => {
        // setCurrentImageClass("blur")
        setPlatforms(defaultPlatforms);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (<>
        {/* <div className="center"> */}
        <div className={`card artwork`}>
            <Image placeholder="blur" blurDataURL="https://i.scdn.co/image/ab67616d0000b273cad190f1a73c024e5a40dddd" src={
                song.artworkUrl
            } alt="https://i.scdn.co/image/ab67616d0000b273cad190f1a73c024e5a40dddd" width="500" height="500" />
        </div>
        <h1 className="text-5xl text text-center">{song.name}</h1>
        <h2 className="text-3xl text text-center">{song.artist}</h2>
        {platforms}
        {/* </div> */}
    </>)
}
