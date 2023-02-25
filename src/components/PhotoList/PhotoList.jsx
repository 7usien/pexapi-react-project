import styles from './photolist.module.css';
import Container from '../Container/Container';
import loadingImg from '../../assets/loading.png';

import Image from '../Image/Image';
import { useState } from 'react';
import PopWindow from './../PopWindow/PopWindow';

function PhotoList({ data, term, loading, count }) {
  const { photolist, heading, loadingwrap } = styles;

  const [popWin, setPopWin] = useState(false);
  const [popImg, setPopImg] = useState(null);

  return (
    <>
      <Container>
        {count > 0 && term && (
          <h3 className={heading}>
            you serach for : <span>{term}</span>
            <p>
              found <span>{count}</span> result for it
            </p>
          </h3>
        )}
        {loading && (
          <div className={loadingwrap}>
            <img src={loadingImg} alt='' />
            fetching data wait ..
          </div>
        )}
        <div className={photolist}>
          {data?.map((photo) => (
            <Image
              setPopWin={setPopWin}
              setPopImg={setPopImg}
              loading={loading}
              key={photo.id}
              {...photo}
            />
          ))}
        </div>

        <PopWindow setPopWin={setPopWin} PopWin={popWin} popImg={popImg} />
      </Container>
    </>
  );
}

export default PhotoList;
