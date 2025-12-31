import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../api/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductsSlider() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <p className="mt-10 text-center">Loading...</p>;
  return (
    <>
      <div className="mt-10 flex justify-between px-2">
        <p className="cursor-default">Products</p>
        <button className="cursor-pointer">All Products</button>
      </div>
      <div className="mt-2 flex">
        <Swiper spaceBetween={10} slidesPerView={6}>
          {products.map((item) => (
            <SwiperSlide>
              <div className="flex h-full flex-col justify-between rounded bg-gray-50/80 px-2 pt-4 pb-2">
                <div>
                  <img
                    loading="lazy"
                    className="h-44 w-full object-contain"
                    src={item.image}
                    alt={item.title}
                  />
                  <h3 className="mt-4 line-clamp-2 cursor-pointer text-center text-sm hover:underline">
                    {item.title}
                  </h3>
                </div>
                <div className="flex justify-between">
                  <p className="mt-6 cursor-pointer text-sm">Add to Cart</p>
                  <p className="mt-6 cursor-default text-sm">{item.price}$</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ProductsSlider;
