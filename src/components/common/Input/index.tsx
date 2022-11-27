import { BsChevronRight } from 'react-icons/bs';

interface InputProps {
  placeholder: string;
  maxWidth?: boolean;
}

const Input = ({ placeholder, maxWidth = false }: InputProps) => {
  return (
    <div
      className={`border border-gray-500 mt-5 relative w-full ${
        !maxWidth && 'md:w-2/3'
      } `}
    >
      <input
        type='text'
        placeholder={placeholder}
        className='w-full h-full p-2 placeholder:font-bold placeholder:uppercase'
      />
      <button
        type='button'
        className=' hover:cursor-pointer absolute top-0 right-0 w-5 h-full'
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Input;
