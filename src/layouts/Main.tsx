import {
  Breadcrumbs,
  GalleryProduct,
  ProductDetail,
  ProductInfo,
  ProductsSlider,
} from '../components';
import { useAppSelector } from '../hooks';
import { Product } from '../interfaces/Product';

const sections = [
  {
    title: 'Detalles de Producto',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quam deserunt non totam rem praesentium unde officiis. Nulla, dicta fuga fugiat iste exercitationem officia commodi maxime, consequatur velit totam a voluptate non necessitatibus facere placeat amet, suscipit excepturi quia natus nemo repudiandae? Quam recusandae doloremque quis, assumenda porro soluta repellat.',
  },
  {
    title: 'Tecnologías',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quam deserunt non totam rem praesentium unde officiis.',
  },
];

const Main = () => {
  const { active, products } = useAppSelector((state) => state.products);

  return (
    <div className='md:px-32 mt-5 px-5 pb-5'>
      <Breadcrumbs />
      <main className='mt-5'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2'>
            <GalleryProduct photo={(active as Product).photo} />
          </div>
          <div className='md:w-1/2'>
            <ProductInfo {...(active as Product)} />
          </div>
        </div>
      </main>
      {sections.map((section) => (
        <ProductDetail key={section.title} {...section} />
      ))}
      <ProductsSlider
        title='Completa tu look'
        products={products}
        variant={'slider-1'}
        showButton={true}
      />
      <ProductsSlider
        title='Productos Recomendados'
        products={products}
        showButton={false}
        variant={'slider-2'}
      />
    </div>
  );
};

export default Main;
