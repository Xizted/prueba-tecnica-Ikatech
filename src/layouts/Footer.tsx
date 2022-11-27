import { Input, Social } from '../components';

const Footer = () => {
  return (
    <footer className='mt-10'>
      <Social />
      <nav className='grid place-content-center sm:grid-cols-2 md:grid-cols-4 text-center md:text-left  p-20 gap-5 md:gap-2'>
        <div>
          <h3 className='uppercase text-lg font-semibold text-gray-500 mb-3'>
            Servicio al cliente
          </h3>
          <ul className='text-gray-500 uppercase'>
            <li>
              <a href='#'>Contáctenos</a>
            </li>
            <li>
              <a href='#'>Cambios y devoluciones</a>
            </li>
            <li>
              <a href='#'>Políticas de la tienda</a>
            </li>
            <li>
              <a href='#'>Políticas de datos</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='uppercase text-lg font-semibold text-gray-500 mb-3'>
            Mi cuenta
          </h3>
          <ul className='text-gray-500 uppercase'>
            <li>
              <a href='#'>Mis pedidos</a>
            </li>
            <li>
              <a href='#'>Mis devoluciones</a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h3 className='uppercase text-lg font-semibold text-gray-500 mb-3'>
              Recursos
            </h3>
            <ul className='text-gray-500 uppercase'>
              <li>
                <a href='#'>Mis pedidos</a>
              </li>
              <li>
                <a href='#'>Mis devoluciones</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className='uppercase text-lg font-semibold text-gray-500 mb-3'>
            Newsletter
          </h3>
          <p className='text-gray-500'>
            Registrate para ser el primero en recibir nuestras noticias
          </p>
          <form action='#'>
            <Input placeholder='E-mail' />
          </form>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
