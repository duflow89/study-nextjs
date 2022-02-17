import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const { pathname } = useRouter();

  const handleActiveClass = (current) => (pathname === current ? 'active' : '');

  return (
    <>
      <nav>
        <Link href='/'>
          <a className={handleActiveClass('/')}>Home</a>
        </Link>{' '}
        <Link href='/about'>
          <a className={handleActiveClass('/about')}>About</a>
        </Link>
      </nav>

      <style jsx>{`
        nav {
          max-width: 200px;
          margin: auto;
          display: flex;
          justify-content: space-around;
          background-color: tomato;
          text-transform: uppercase;
        }
        nav a {
          width: 50%;
          padding: 10px 0;
          color: #fff;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        nav .active {
          font-weight: bold;
          color: yellow;
        }
      `}</style>
    </>
  );
}
