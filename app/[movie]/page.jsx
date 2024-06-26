import Image from "next/image"
import {formatDate} from "../js-utils";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()

  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }))
}

export default async function MovieDetail({ params }) {
  const { movie } = params
  const imagePath = "https://image.tmdb.org/t/p/original"
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()

  return (
    <div>
      <div>
        <h2 className="text-4xl">{res.title}</h2>
        <h1 className="text-lg ">{formatDate(res.release_date)}</h1>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2>Rating: {res.vote_average}</h2>
        <h2 className="text-white bg-green-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">
          {res.status}
        </h2>
        <div>
          {Array.isArray(res.genres) && res.genres.map((genre) => (
              <h2 key={genre.id} className="text-white bg-blue-600 inline-block my-2 mr-1.5 py-2 px-4 rounded-lg text-sm">
                {genre.name}
              </h2>
          ))}
        </div>
        <div className="my-4">
          <p className="text-lg">{res.overview}</p>
        </div>
        <Image
          className="my-12 w-full"
          src={imagePath + res.backdrop_path}
          alt={res.title}
          width={1000}
          height={1000}
          priority
        />
      </div>
    </div>
  )
}