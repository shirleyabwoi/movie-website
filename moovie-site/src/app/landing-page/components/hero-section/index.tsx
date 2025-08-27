"use client";
import Image from "next/image";

interface Movie {
  id: number;
  title?: string;
  poster_path?: string;
  backdrop_path?: string;
}

function HeroSection({ movie }: { movie?: Movie }) {
  if (!movie || !movie.poster_path) {
    return (
      <div className="relative w-full h-[400px] bg-gray-800 rounded-lg flex items-center justify-center">
        <span className="text-white text-center px-4">
          Movie not available
        </span>
      </div>
    );
  }
  return (
    <div className="relative w-full h-[400px]">   
       <Image
           src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
           alt={movie.title || "Movie backdrop"}
           fill
           className="object-cover rounded-lg"
        />
    </div>
  );
}

export default HeroSection;