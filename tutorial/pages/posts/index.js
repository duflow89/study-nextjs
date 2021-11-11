import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>All Posts</h1>
      <Link href='/posts/first-post'>First Post</Link>
    </>
  );
};

export default Posts;
