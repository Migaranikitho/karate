import Carousel from 'react-bootstrap/Carousel';
import I1 from './../Resources_/download.jpeg';
import I2 from './../Resources_/download.jpeg';
import I3 from './../Resources_/download.jpeg';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={I1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chief Instructor Mahesh Peiris</h3>
          <p><a href="./../InstructorInfo/Empty.js"target={'_blank'}>read more about this instructor</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={I2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Shihan Fukuyama Shuichi</h3>
          <p><a href="./../InstructorInfo/Empty.js" target={'_blank'}>read more about this instructor</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={I3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Sensei Douglas Peiris</h3>
          <p>
            <a href='./../InstructorInfo/Empty.js' target={'_blank'}>read more about this instructor</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;