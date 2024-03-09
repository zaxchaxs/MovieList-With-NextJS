"use client"

import Link from "next/link";
import { Roboto } from "next/font/google";
import { useState } from "react";

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: "--roboto"
});

export default function ContentHeader () {
    const [isMovieClicked, setMovieClicked] = useState(false);
    const [isSeriesClicked, setSeriesClicked] = useState(false);

    return(
    <div className={`flex justify-center items-center gap-5`}>
        <Link href={"#"} className="text-2xl cursor-pointer mr-10">MoviList</Link>
        <ul className="flex gap-7">
            <li className="group">
                <input type="button" className="cursor-pointer" value={"Movies"} onClick={() => setMovieClicked(!isMovieClicked)} />
                <ListContent isMovieClicked={isMovieClicked} />
            </li>
            <li>
                <input type="button" className="cursor-pointer" value={"TV Series"} onClick={() => setSeriesClicked(!isSeriesClicked)} />
                <ListContent isSeriesClicked={isSeriesClicked} />
            </li>
        </ul>
    </div>
    )
}

function ListContent({ isMovieClicked, isSeriesClicked }) {
    return(
        <ul className={"absolute rounded-md border-gray-200 border-2 w-fit h-auto p-4 bg-white " + (isMovieClicked||isSeriesClicked ? "" : "hidden")}>
            <li className="transform transition-transform duration-300 hover:translate-x-2 ease-in-out">
                <Link href={"#"}>Popular</Link>
            </li>
            <li className="transform transition-transform duration-300 hover:translate-x-2 ease-in-out">
                <Link href={"#"}>Top Rated</Link>
            </li>
            <li className="transform transition-transform duration-300 hover:translate-x-2 ease-in-out">
                <Link href={"#"}>Now Playing</Link>
            </li>
        </ul>        
    )
};