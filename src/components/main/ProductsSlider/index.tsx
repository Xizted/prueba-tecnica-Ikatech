import { useState } from 'react';
import Slider from 'react-slick';
import { Product } from '../../../interfaces/Product';
import ProductItem from './ProductItem';

type Variant = 'slider-1' | 'slider-2';

interface ProductsSliderProps {
  title: string;
  products: Product[];
  variant: Variant;
  showButton: boolean;
}

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
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

const ProductsSlider = ({
  title,
  products,
  variant,
  showButton,
}: ProductsSliderProps) => {
  const [productLength] = useState(products.length);

  return (
    <section>
      <div className='mt-10 '>
        <h2
          className={`p-1 uppercase text-gray-600 font-semibold text-2xl ${
            variant === 'slider-1' ? 'bg-gray-200' : 'border-b border-gray-400'
          }`}
        >
          {title}
        </h2>
        <Slider
          {...settings}
          slidesToShow={productLength > 3 ? 4 : productLength}
          slidesToScroll={productLength > 3 ? 4 : productLength}
        >
          {products.map((product, index) => (
            <ProductItem key={product.name} {...product} index={index} showButton={showButton} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductsSlider;
