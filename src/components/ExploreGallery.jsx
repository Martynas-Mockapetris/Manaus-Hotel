import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { GrFormPreviousLink } from 'react-icons/gr';
import { GrFormNextLink } from 'react-icons/gr';

import 'slick-carousel/slick/slick-theme.css';

const ExploreGallery = () => {
  const data = [
    {
      place: 'Teatro Amazonas',
      desc: 'Iconic opera house',
      img: '/Places/Place1.png'
    },
    {
      place: 'Mercado Municipal',
      desc: 'Mercado Municipal Manaus',
      img: '/Places/Place2.png'
    },
    {
      place: 'Teatro Amazonas',
      desc: 'Iconic opera house',
      img: '/Places/Place1.png'
    },
    {
      place: 'Mercado Municipal',
      desc: 'Mercado Municipal Manaus',
      img: '/Places/Place2.png'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="bg-greenDark pb-24 md:py-20 relative">
      <div className="container space-y-7">
        <h1 className="text-4xl text-textWhite font-body">
          Explore <br /> <span className="text-3xl tracking-wider font-light font-text">nearby us</span>
        </h1>
        <p className="font-text text-textWhite w-[300px] text-[0.8rem] font-thin opacity-70 pb-10">Uncover Local Gems and Nearby Adventures to Enhance Your Experience.</p>
        <div className="w-3/4 m-auto z-40 relative">
          <div className="">
            <Slider {...settings}>
              {data.map((place) => {
                return (
                  <div className="relative">
                    <div className="h-[500px] w-[90%] m-auto">
                      <img src={place.img} alt={place.place} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-5 left-10">
                      <h1 className="text-3xl text-textWhite">{place.place}</h1>
                      <p className="text-sm tracking-wider opacity-70 font-thin text-textWhite">{place.desc}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="min-h-[300px] w-full bg-greenLight opacity-5 absolute bottom-0"></div>
    </section>
  );
};

export default ExploreGallery;
