import NavBar from '../components/NavBar';
import HEAD_TITLE from '../constants/headTitle';
import Helmet from './../components/Helmet/index';

export default function About() {
  return (
    <>
      <Helmet title={HEAD_TITLE.ABOUT} />

      <h2>ABOUT</h2>
    </>
  );
}
