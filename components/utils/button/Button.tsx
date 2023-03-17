
export interface IButton {
  text: string;
}

const Button: React.FC<IButton> = ({ text }) => {
  return (
    <button className='rounded-md border border-indigo-500/100 px-1 py-3 w-32 hover:bg-indigo-100'>{text}</button>
  );
};

export default Button;