import styles from './photolist.module.css';
import Container from '../Container/Container';
import Image from '../Image/Image';
function PhotoList({ data, term, loading, count }) {
  const { photolist, heading } = styles;

  return (
    <>
      <Container>
        {count && term && (
          <h3 className={heading}>
            photo for : {term} is : {count} getten result
          </h3>
        )}
        {loading && <div className='loading'>fetching data wait ..</div>}
        <div className={photolist}>
          {data?.map((photo) => (
            <Image loading={loading} key={photo.id} {...photo} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default PhotoList;
