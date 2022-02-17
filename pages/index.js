import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Helmet from '../components/Helmet';
import HEAD_TITLE from '../constants/headTitle';
import Link from 'next/link';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  const { results: movies } = await (
    await fetch('http://localhost:3000/api/movies')
  ).json();
  return { props: { movies } };
}

export default function Home({ movies }) {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch('/api/movies')).json();
  //     console.log(results);
  //     setMovies(results);
  //   })();
  // }, []);

  const router = useRouter();
  const handleImageClick = (id, title) => () =>
    router.push(`/movies/${title}/${id}`);

  return (
    <>
      <Helmet title={HEAD_TITLE.HOME} />

      <h2>MAIN PAGE</h2>

      <div className='movie-list'>
        {movies?.map(({ id, poster_path, original_title }) => (
          <div key={id} className='movie'>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              width='200'
              height='300'
              alt='poster'
              className='movie-poster'
              onClick={handleImageClick(id, original_title)}
            />
            <Link href={`/movies/${original_title}/${id}`}>
              <a>
                <h4>{original_title}</h4>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <style>
        {`
          .movie-list {
            display: grid;
            grid-template-columns: repeat(4, minmax(50px, auto));
            max-width: 768px;
            margin: auto;
            gap: 20px 10px;
          }
          .movie-poster {
            border-radius: 10px;
            overflow: hidden;
            vertical-align: middle;
          }
          .movie h4 {
            padding: 0;
            margin: 0;
          }
        `}
      </style>
    </>
  );
}
