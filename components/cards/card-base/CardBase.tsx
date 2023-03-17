
export interface ICardBase {
  sampleTextProp: string;
}

const CardBase: React.FC<ICardBase> = ({ sampleTextProp }) => {
  return <div className='rounded-md border-2 border-slate-300 hover:border-slate-400 p-4 m-2 w-1/2'>{sampleTextProp}</div>;
};

export default CardBase;