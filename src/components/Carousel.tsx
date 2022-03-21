import { h, FunctionComponent } from 'preact';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from '../components/arrow';

interface CarouselProps {
  images: string[];
}

const NextArrow = (props: any) => {
  return <ArrowRight {...props} />;
};

const PrevArrow = (props: any) => {
  return <ArrowLeft {...props} />;
};

const Carousel: FunctionComponent<CarouselProps> = ({ images }) => {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h4 class="font-garamond italic text-primary mb-4">
        Our most popular foods
      </h4>
      <Slider {...settings}>
        {images.map((url, index) => {
          return (
            <div>
              <img
                class="h-[350px] w-full object-cover"
                key={index}
                src={url}
                alt="carousel image"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
