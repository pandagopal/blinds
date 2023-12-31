import category from "@/assets/images/category+online-shopping.webp";
import categorybg from "@/assets/images/category-banner.webp";
import UnoptimizedImage from "@/UnoptimizedImage";

const CategoryShop = () => {
  return (
    <section>
      <div className="shop_by_category">
        <div className="container mb-4">
          <h2 className="text-center fw-semibold mb-5">Shop by category</h2>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 border-end">
              <UnoptimizedImage
                src={category}
                alt="img-category"
                className="mb-3 w-100 h-auto"
                loading="lazy"
              />
              <hr className="mt-1" />
              <h5 className="fw-semibold text-center">Blinds</h5>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 border-end">
              <UnoptimizedImage
                src={category}
                alt="img-category"
                className="mb-3 w-100 h-auto"
                loading="lazy"
              />
              <hr className="mt-1" />
              <h5 className="fw-semibold text-center">Blinds</h5>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 border-end">
              <UnoptimizedImage
                src={category}
                alt="img-category"
                className="mb-3 w-100 h-auto"
                loading="lazy"
              />
              <hr className="mt-1" />
              <h5 className="fw-semibold text-center">Blinds</h5>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <UnoptimizedImage
                src={category}
                alt="img-category"
                className="mb-3 w-100 h-auto"
                loading="lazy"
              />
              <hr className="mt-1" />
              <h5 className="fw-semibold text-center">Blinds</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid position-relative shoping_images_section h-100">
          <div className="row height_inherit">
            <div className="col-md-8">
              <div className="shop_by_left mb-4">
                <UnoptimizedImage
                  src={categorybg}
                  alt="img-category"
                  className="w-100 h-100"
                  loading="lazy"
                />
                <div className="catgeory_text text-white">
                  <h2 className="text-uppercase fw-bold fs-1">
                    Rather have a pro, do it?
                  </h2>
                  <h3>
                    Add professional measure and install for one low price!
                  </h3>
                </div>
              </div>
              <div className="shop_by_bottom">
                <div className="row">
                  <div className="col-12 col-md-6 col-xl-6 position-relative">
                    <UnoptimizedImage
                      src={categorybg}
                      alt="img-category"
                      loading="lazy"
                    />
                    <div className="buy_text position-absolute">
                      <h4 className="text-white fw-bolder">
                        Buy <br /> Risk-Free
                      </h4>
                      <p className="text-white">
                        Get the perfect fit and our 100% satisfaction guarantee
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6 position-relative">
                    <UnoptimizedImage
                      src={categorybg}
                      alt="img-category"
                      loading="lazy"
                    />
                    <div className="buy_text position-absolute">
                      <h4 className="text-white fw-bolder">
                        Find your <br /> Inspiration
                      </h4>
                      <p className="text-white">
                        See real customer photos and snag the looks you love!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="shop_by_right position-relative h-100">
                <UnoptimizedImage
                  src={category}
                  alt="img-category"
                  loading="lazy"
                  className="w-100 h-100"
                />
                <div className="category_shop_text position-absolute top-0 bottom-0 start-0 end-0 text-center text-white mt-5">
                  <h1 className="text-uppercase fs-1 fw-bold">
                    breathe <br />
                    with <br /> freeflow
                  </h1>
                  <h5 className="mb-4">shop outdoor gear sale</h5>
                  <button className="btn_shop">Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShop;
