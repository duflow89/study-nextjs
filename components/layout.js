import style from './layout.module.css';

const Layout = ({ children }) => (
  <div className={style.container}>{children}</div>
);

export default Layout;
