import loadingImg from '../../assets/loading.png';

import styles from './image.module.css';

const { imgCard } = styles;

const Image = ({ src, loading }) => {
  return (
    <div className={imgCard}>
      <img src={loading ? loadingImg : src.tiny} alt='' />
    </div>
  );
};

export default Image;
