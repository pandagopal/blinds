import React from "react";
// import Common from "./Components/Common";
import ProductSize from "./Components/ProductSize";
import UnoptimizedImage from "@/UnoptimizedImage";
import banner_products from "@/assets/images/Picture-products.webp";

const CustomProduct = () => {
  return (
    <section>
      <div className="main_product_banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5">
              <div className="product_banner_details p-4">
                <h3 className="text-sm-start text-md-center mb-4">
                  Configure Your Window Treatment
                </h3>
                <div className="border-bottom"></div>
              </div>
              <div className="main_size_section">
                {/* <Common data={data} leftControl={leftControl} /> */}
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-7">
              <div className="product_right_bg product_banner_right_details p-4 position-sticky vh-0 vh-md-100 vh-lg-100 top-0 bottom-0">
                <div className="bg-white text-dark p-2 text-center mb-3">
                  <h2 className="text-center">Product Preview</h2>
                </div>
                <div className="bg-white text-dark p-3">
                  <UnoptimizedImage
                    src={banner_products}
                    alt="banner_products"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-btn d-sm-block d-md-block d-lg-none">
          <button
            className=" border border-primary px-4 py-2 text-light top-0 right-0 rounded preview-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Preview
          </button>

          <div
            className="offcanvas offcanvas-end w-75 "
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-light"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="d-block product_right_bg product_banner_right_details p-4 position-sticky vh-0 vh-md-100 vh-lg-100 top-0 bottom-0">
                <div className="bg-white text-dark p-2 text-center mb-3">
                  <h2>Product Preview</h2>
                </div>
                <div className="preview-img bg-white text-dark p-3">
                  <UnoptimizedImage
                    src={banner_products}
                    alt="banner_products"
                    className="img-fluid w-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomProduct;
