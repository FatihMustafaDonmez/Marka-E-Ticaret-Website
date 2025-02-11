import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">Nikee Ayakkabılar</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              asperiores vitae repellat consequatur rem dolor corporis, quidem,
              perspiciatis sunt facere quis repellendus libero vel dolorem
              temporibus esse ad tempora laboriosam?
            </div>
            <div className="border rounded-full cursor-pointer text-lg w-[200px] h-16 flex items-center justify-center bg-gray-200 ">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2aecf220-1477-4a70-9070-56216a01264b/NIKE+DUNK+LOW+RETRO.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">Nike Ayakkabılar</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              asperiores vitae repellat consequatur rem dolor corporis, quidem,
              perspiciatis sunt facere quis repellendus libero vel dolorem
              temporibus esse ad tempora laboriosam?
            </div>
            <div className="border rounded-full cursor-pointer text-lg w-[200px] h-16 flex items-center justify-center bg-gray-200 ">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/26c4acd1-385f-48fe-b4c0-8e573671e530/NIKE+DUNK+LOW+RETRO.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
