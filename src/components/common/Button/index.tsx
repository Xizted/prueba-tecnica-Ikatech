interface ButtonProps {
  text: string;
  maxWidth?: boolean;
}

const Button = ({ text, maxWidth }: ButtonProps) => {
  return (
    <button
      type='button'
      className={`bg-ruby uppercase w-full py-3 text-white font-bold ${
        !maxWidth && 'md:w-auto md:px-20'
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
