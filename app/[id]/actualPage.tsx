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
    const [openLink, setOpenLink] = useState<() => void>(() => { });
    const defaultPlatforms = (<div className="links py-8 px-16 card center">
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
        <div className={`card artwork center`}>
            <Image placeholder="blur" blurDataURL="https://i.scdn.co/image/ab67616d0000b273cad190f1a73c024e5a40dddd" src={
                song.artworkUrl
            } alt="https://i.scdn.co/image/ab67616d0000b273cad190f1a73c024e5a40dddd" width="400" height="400" />
        </div>
        <div className="card p-4 my-4 title center">
            <h1 className="text-4xl text center text-center">{song.name}</h1>
            <h2 className="text-2xl text center text-center">{song.artist}</h2>
        </div>
        {platforms}
    </>)
}
