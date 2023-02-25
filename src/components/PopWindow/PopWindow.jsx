import styles from './popwindow.module.css';
import loadingImg from '../../assets/loading.gif';

const { popContainer, popclose, popup } = styles;

const PopWindow = ({ popImg, PopWin, setPopWin }) => {
  return (
    PopWin === true && (
      <div
        className={popContainer}
        onClick={() => {
          setPopWin(false);
        }}
      >
        <span
          className={popclose}
          onClick={() => {
            setPopWin(false);
          }}
        >
          close
        </span>
        <div className={popup}>
          <img src={popImg} alt='' />
        </div>
      </div>
    )
  );
};

export default PopWindow;
