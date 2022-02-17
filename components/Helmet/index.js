import Head from 'next/head';
import { BASE_HEAD_TITLE } from './../../constants/headTitle';

const Helmet = ({ title }) => {
  return (
    <Head>
      <title>{title ? `${title} | ${BASE_HEAD_TITLE}` : BASE_HEAD_TITLE}</title>
    </Head>
  );
};

export default Helmet;
