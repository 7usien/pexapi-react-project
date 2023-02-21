import styles from './header.module.css';

const { headerWrap, logo } = styles;

function Header() {
  return (
    <header className={headerWrap}>
      <span className={logo}></span>
    </header>
  );
}

export default Header;
