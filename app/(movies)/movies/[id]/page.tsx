import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo, { getMovies } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({params:{id}}: IParams) {
  const movie = await getMovies(id);
  return {
    title: movie.title,
  }
}

export default async function MovieDetailPage({
  params:{id},
}: IParams) {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h3>Videos</h3>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}