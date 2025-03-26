import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const Carosel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
            <img className="Img-Fild" src="https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          {/* <ExampleCarouselImage text="First slide" /> */}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="Img-Fild" src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="Img-Fild" src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Carosel;
