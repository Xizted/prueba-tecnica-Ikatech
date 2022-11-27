import { BsHandbag } from 'react-icons/bs';

const NavbarCategories = () => {
  return (
    <div className='md:flex md:justify-between text-center items-end'>
      <nav className='p-2'>
        <ul className='md:flex gap-10 text-gray-500 font-semibold uppercase'>
          <li>
            <a href='#'>Hombre</a>
          </li>
          <li>
            <a href='#'>Mujer</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Historia</a>
          </li>
          <li>
            <a href='#'>Tiendas</a>
          </li>
        </ul>
      </nav>
      <div className='uppercase font-semibold text-sm text-gray-600 p-2 '>
        <BsHandbag className='inline-block mr-2' />
        Carrito <span>0</span>
      </div>
    </div>
  );
};

export default NavbarCategories;
