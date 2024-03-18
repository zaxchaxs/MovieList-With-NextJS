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
    const routeMovies = {
        popular : "/movies/popular",
        topRated : "/movies/top-rated",
        upComing : "/movies/upcoming"
    };
    const routeSeries = {
        popular : "/series/popular",
        topRated : "/series/top-rated",
        onTheAir : "/series/on-the-air"
    };

    return(
    <div className={`flex justify-center items-center gap-5 font-bold text-white`}>
        <Link href={"/"} className="text-2xl cursor-pointer mr-10">MoviList</Link>
        <ul className="flex gap-7 text-base">
            <li className="group">
                <input type="button" className="cursor-pointer" value={"Movies"} onClick={() => setMovieClicked(!isMovieClicked)} />
                <ListContent isMovieClicked={isMovieClicked} route={routeMovies} />
            </li>
            <li className="group">
                <input type="button" className="cursor-pointer" value={"TV Series"} onClick={() => setSeriesClicked(!isSeriesClicked)} />
                <ListContent isSeriesClicked={isSeriesClicked} route={routeSeries} />
            </li>
        </ul>
    </div>
    )
}

function ListContent({ isMovieClicked, isSeriesClicked, route }) {
    return(
        <ul className={"absolute rounded-md w-fit h-auto p-4 bg-red-900 font-bold text-white shadow-md " + (isMovieClicked||isSeriesClicked ? "" : "hidden")}>
            <li className="transform transition-transform duration-300 hover:translate-x-2 ease-in-out">
                <Link href={route.popular}>Popular</Link>
            </li>
            <li className="transform transition-transform duration-300 hover:translate-x-2 ease-in-out">
                <Link href={route.topRated}>Top Rated</Link>
            </li>
            <li className="transform transition-transform duration-300 hover:translate-x-2 ease-in-out">
                <Link href={route.upComing || route.onTheAir}>{route.upComing ? `Up Coming` : "On The Air"}</Link>
            </li>
        </ul>        
    )
};