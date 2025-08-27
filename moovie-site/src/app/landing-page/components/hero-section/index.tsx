"use client";
import useFetchMovies from "@/app/hooks/useFetchMovies";
import Image from "next/image";

function HeroSection({ movie }: { movie?: any }) {
  const { movies, loading, error } = useFetchMovies();


  return (
    <div className="relative w-full h-[400px]">
     
<Image
  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
  alt={movie?.title || "Movie backdrop"}
  fill
  className="object-cover rounded-lg"
/>
      
    </div>
  );
}

export default HeroSection;

