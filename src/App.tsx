import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Loading } from './components';
import { useAppSelector } from './hooks';
import { Footer, Header, Main } from './layouts';
import { getProducts } from './store/thunk';

const App = () => {
  const dispatch = useDispatch();

  const { isLoading } = useAppSelector((state) => state.products);

  useEffect(() => {
    //@ts-ignore
    dispatch(getProducts());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
