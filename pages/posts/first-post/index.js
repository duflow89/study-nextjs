import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../../components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <Image src='/images/profile.png' width={200} height={200} alt='profile' />
      <h1>First Post!</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
