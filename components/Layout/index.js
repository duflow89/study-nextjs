import Image from 'next/image';
import Helmet from '../Helmet';
import NavBar from './../NavBar/index';

export default function Layout({ children }) {
  return (
    <>
      <Helmet />

      <div style={{ textAlign: 'center' }}>
        <h1>
          <Image
            src='/vercel.svg'
            alt='Next Movies'
            width={200}
            height={50}
            className='test'
          />
        </h1>

        <NavBar />

        <div>{children}</div>
      </div>
    </>
  );
}
