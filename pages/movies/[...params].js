import { useRouter } from 'next/router';
import Helmet from '../../components/Helmet';

export async function getServerSideProps({
  params: {
    params: [title, id],
  },
}) {
  const movie = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json();
  console.log('movie', movie);
  return { props: { title, id, movie } };
}

export default function Detail({ title, id, movie }) {
  // const {
  //   query: {
  //     params: [title, id],
  //   },
  // } = useRouter();
  console.log(movie);
  return (
    <>
      <Helmet title={title} />

      <div>
        <h2>{title}</h2>
      </div>
    </>
  );
}
