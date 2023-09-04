import Link from "next/link";
import star_01 from "@/assets/images/star_start.webp";
import star_02 from "@/assets/images/star_end.webp";
import svg_01 from "@/assets/images/SVG.webp";
import svg_02 from "@/assets/images/SVG1.webp";
import svg_03 from "@/assets/images/SVG2.webp";
import swap_horiz from "@/assets/images/swap_horiz.svg";
import swap_vert from "@/assets/images/swap_vert.svg";
import home_icons from "@/assets/images/home-icons.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import sqlImages from "@/assets/images/details_page/sqlImages.jpg"
import banner_image from "@/assets/images/details_page/banner_image.jpg"

const DesignBlinds = ({ productDetails, getDetails, data }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  };

  const slidesData = [
    {
      id: 1,
      img: sqlImages.src,
      alt: "Image 1",
    },
    {
      id: 2,
      img: banner_image.src,
      alt: "Image 2",
    },
    {
      id: 3,
      img: sqlImages.src,
      alt: "Image 3",
    },
    {
      id: 4,
      img: banner_image.src,
      alt: "Image 4",
    },
    {
      id: 5,
      img: sqlImages.src,
      alt: "Image 5",
    },
    {
      id: 6,
      img: banner_image.src,
      alt: "Image 6",
    },
    {
      id: 7,
      img: sqlImages.src,
      alt: "Image 6",
    },
  ];

  const heightAndWidth = (startPoint, endPoint, text) => {
    const options = [];
    for (let i = startPoint; i <= endPoint; i++) options.push(i);
    return options.map((option, index) => {
      return (
        <option key={index}>
          {option}
          {text}
        </option>
      );
    });
  };

  function titleToSlug(title) {
    let slug = title?.toLowerCase();
    slug = slug?.replace(/\s+/g, "-");
    slug = slug?.replace(/[^a-z0-9-]/g, "");
    return slug;
  }

  const [design, setDesign] = useState({
    blindWidth: "",
    blindHeight: "",
    price: 20,
  });

  const handleOnChange = (event) => {
    const { name, value } = event?.target;
    setDesign({
      ...design,
      [name]: value,
    });
  };

  useEffect(() => {
    getDetails(design);
  }, [design]);

  return (
    <section>
      <div className="Product_page_section">
        <div className="Product_page_menu">
          <div className="container">
            <div className="p-2">
              <Link href="#" className="me-2">
                ‹ Window Treatments
              </Link>
              <Link href="#" className="me-2">
                ‹ Cellular Shades
              </Link>
              <Link href="#" className="me-2">
                ‹ Designer Light Filtering Cellular Shades
              </Link>
            </div>
          </div>
        </div>
        <div className="Product_bg_section products-content text-white">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-3 mt-lg-5">
                <h1 className="fs-2 fw-normal ">
                  {data?.product?.title && data?.product?.title}
                </h1>
                <div className="">
                  Brand :
                  <Link href="#" className="text-decoration-none">
                    Veneta
                  </Link>
                </div>
                <div className="d-flex justify-content-between mb-2 mb-md-2 mb-lg-4">
                  <div>
                    <span>
                      <img
                        src={star_01.src}
                        alt="star_01"
                        className="img-fluid"
                      />
                    </span>
                    <span>
                      <img
                        src={star_01.src}
                        alt="star_01"
                        className="img-fluid"
                      />
                    </span>
                    <span>
                      <img
                        src={star_01.src}
                        alt="star_01"
                        className="img-fluid"
                      />
                    </span>
                    <span>
                      <img
                        src={star_01.src}
                        alt="star_01"
                        className="img-fluid"
                      />
                    </span>
                    <span>
                      <img
                        src={star_02.src}
                        alt="star_02"
                        className="img-fluid me-3"
                      />
                    </span>
                    <Link
                      href="#"
                      className=" text-decoration-none me-3 text-underline-hover"
                    >
                      <span className="me-2">521</span>
                      Reviews
                    </Link>
                    <span className="me-2">|</span>
                    <Link
                      href="#"
                      className=" text-decoration-none text-underline-hover"
                    >
                      1 Question, 1 Answer
                    </Link>
                  </div>
                  <div className="border border-white border-1 rounded-circle py-2 px-2 d-none d-sm-block">
                    <svg
                      fill="#fff"
                      width="26px"
                      height="26px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z" />
                    </svg>
                  </div>
                </div>
                <div className="fw-semibold">
                  <p>30% OFF WITH CODE "GETSTARTED" ENDS 6/13</p>
                </div>
                <div className="fw-normal">
                  <p>
                    {data?.product?.long_description &&
                      data?.product?.long_description}
                    <Link href="#">Read More.</Link>
                  </p>
                </div>
                <div className="mb-3">
                  <div>
                    <img
                      src={svg_01.src}
                      alt="svg_01"
                      className="img-fluid me-2"
                    />
                    SureFit™ Guaranteed to Fit!
                  </div>
                  <div>
                    <img
                      src={svg_02.src}
                      alt="svg_02"
                      className="img-fluid me-2"
                    />
                    Measure Instructions and Specifications
                  </div>
                  <div>
                    <img
                      src={svg_03.src}
                      alt="svg_03"
                      className="img-fluid me-2"
                    />
                    Estimated Ship Date: 06/21/2023
                  </div>
                </div>
                <div className="d-flex justify-content-around bg-washed-blue mb-3 p-1 p-md-3">
                  <div>
                    <div className="main-gap-section d-flex align-items-center gap-3">
                      <span>Width</span>
                      <img src={swap_horiz.src} alt="swap_horiz" />
                      <div className="gcc-dropdown position-relative">
                        <select
                          defaultValue="0"
                          id="name0.125"
                          name="blindWidth"
                          autoComplete="off"
                        >
                          {heightAndWidth(
                            data?.product?.width_from,
                            data?.product?.width_to
                          )}
                        </select>
                        <label
                          className="form-label position-absolute top-0 start-0 z-10 text-dark"
                          htmlFor="name20"
                        >
                          Inches
                        </label>
                      </div>
                      <div className="position-relative">
                        <select
                          defaultValue="0"
                          id="name0.125"
                          name="name0.125"
                          autoComplete="off"
                        >
                          <option value="0">0/0</option>
                          <option value="0.125">1/8</option>
                          <option value="0.25">1/4</option>
                          <option value="0.375">3/8</option>
                        </select>
                        <label
                          className="form-label position-absolute top-0 start-0 text-dark"
                          htmlFor="name0.125"
                        >
                          Eighths
                        </label>
                      </div>
                    </div>
                    <div className="main-gap-section d-flex align-items-center gap-3">
                      <span>Height</span>
                      <img src={swap_vert.src} alt="swap_vert" />
                      <div className="position-relative">
                        <select
                          defaultValue={data?.product?.height_from}
                          id="name21"
                          name="blindHeight"
                          autoComplete="off"
                          onChange={(i) => handleOnChange(i)}
                        >
                          {heightAndWidth(
                            data?.product?.height_from,
                            data?.product?.height_to
                          )}
                        </select>
                        <label
                          className="form-label position-absolute top-0 start-0 z-10 text-dark"
                          htmlFor="name21"
                        >
                          Inches
                        </label>
                      </div>
                      <div className="position-relative">
                        <select
                          defaultValue="0.125"
                          id="name25"
                          name="name25"
                          autoComplete="off"
                        >
                          <option value="0.125">1/8</option>
                          <option value="0.25">1/4</option>
                          <option value="0.375">3/8</option>
                        </select>
                        <label
                          className="form-label position-absolute top-0 start-0 text-dark"
                          htmlFor="name25"
                        >
                          Eighths
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="m-0">
                      {data?.product?.discount_price &&
                        `$${data?.product?.discount_price}`}
                      <span className="ms-1 text-danger">SAVE 30%</span>
                    </p>
                    <h2 className="mb-3">
                      {data?.product?.unit_price &&
                        `$${data?.product?.unit_price}`}
                    </h2>
                    <Link
                      href={`/product/${data?.product?.id}/${titleToSlug(
                        data?.product?.title
                      )}`}
                      className="customize_btn"
                    >
                      Customize & Buy
                    </Link>
                  </div>
                </div>
                <div className="bg-white home_icons">
                  <div className="d-flex justify-content-center align-items-center text-dark p-1 p-md-3 gap-3">
                    <img src={home_icons.src} alt="home_icons" />
                    <div className="">
                      <h6 className="m-0">Want Professional Installation?</h6>
                      <small>
                        You can now add at checkout with just one click - it's
                        easy!
                      </small>
                      <div>
                        <Link href="#" className="text-decoration-none">
                          How it works
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-3 mt-lg-5">
                <div className="Product_right_bg_section">
                  <div className="slider-wrapper">
                    <Slider
                      {...settingsMain}
                      asNavFor={nav2}
                      ref={(slider) => setSlider1(slider)}
                    >
                      {slidesData.map((slide, ind) => (
                        <div className="slick-slide" key={ind}>
                          <img
                            className="slick-slide-image"
                            src={slide.img}
                            alt="slick-slide-image"
                          />
                        </div>
                      ))}
                    </Slider>
                    <div className="thumbnail-slider-wrap">
                      <Slider
                        {...settingsThumbs}
                        asNavFor={nav1}
                        ref={(slider) => setSlider2(slider)}
                      >
                        {slidesData.map((slide, ind) => (
                          <div className="slick-slide" key={ind}>
                            <img
                              className="slick-slide-image"
                              src={slide.img}
                              alt="slick-image"
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DesignBlinds;
