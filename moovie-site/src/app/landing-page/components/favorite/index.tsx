'use client'
import Image from "next/image";
import useFetchMovies from "@/app/hooks/useFetchMovies";
import Header from "@/app/shared-components/header";
import Footer from "@/app/shared-components/footer";
import CategoriesFilter from "@/app/shared-components/categories-bar";


export default function HomePage() {
  const {movies, loading, error} = useFetchMovies();


  return (
    <div className="bg-gray-950">
      <Header/>
      <CategoriesFilter/>
      <div className="display: flex flex-wrap ml-10 mb-10">
        {loading && <h3>Loading ...</h3>}
        {error && <h3>{error}</h3>}
        {movies.map(movie =>(
          <div key={movie.id}className="w-70 mt-4 ml-4 pl-10 relative">
            {movie.poster_path && (
                  <Image
                    alt={`${movie.title} poster`}
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    width={300}
                    height={300}
                    className="rounded-md"
                  />
                )}

            </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

