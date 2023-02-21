import styles from './photolist.module.css';
import Container from '../Container/Container';
function PhotoList({ data, term }) {
  const { photolist } = styles;

  console.log(data);
  return (
    <>
      <Container>
        <h3>photo results for : {term} </h3>
        <div className={photolist}>
          {data?.map((photo) => (
            <div key={photo.id}>
              <img src={photo.src.tiny} alt='' />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default PhotoList;
