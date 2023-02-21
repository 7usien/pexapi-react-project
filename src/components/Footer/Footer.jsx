import styles from './footer.module.css';

const { footer, copyrights } = styles;
function Footer() {
  return (
    <footer className={footer}>
      <p className='rights'>All rights are reseved to pexels site api</p>
      <p className={copyrights}>
        Developed by : Husien Ade as Learning project for demo - 2023
      </p>
    </footer>
  );
}

export default Footer;
