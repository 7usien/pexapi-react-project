import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DownloadingIcon from '@mui/icons-material/Downloading';
import loadingImg from '../../assets/loading.gif';
import styles from './image.module.css';

const { imgCard, cardInfo, imgDownload } = styles;

const Image = ({ src, loading, photographer, alt }) => {
  return (
    <div className={imgCard}>
      <div className={imgDownload}>
        <ul>
          <li>
            <a target={'_blank'} href={src.original} download={true}>
              <DownloadingIcon fontSize='small' /> original
            </a>
          </li>
          <li>
            <a target={'_blank'} href={src.large2x} download={true}>
              <DownloadingIcon fontSize='small' /> large2x
            </a>
          </li>
          <li>
            <a target={'_blank'} href={src.large} download={true}>
              <DownloadingIcon fontSize='small' /> large
            </a>
          </li>
          <li>
            <a target={'_blank'} href={src.medium} download={true}>
              <DownloadingIcon fontSize='small' /> medium
            </a>
          </li>
          <li>
            <a target={'_blank'} href={src.small} download={true}>
              <DownloadingIcon fontSize='small' /> small
            </a>
          </li>
        </ul>
      </div>
      <div className={cardInfo}>
        <CameraAltIcon /> {photographer}
        <h4>{alt}</h4>
      </div>
      <img src={loading ? loadingImg : src.tiny} alt={alt} />
    </div>
  );
};

export default Image;
