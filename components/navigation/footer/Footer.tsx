import Link from "next/link";

export interface IFooter {
  sampleTextProp: string;
}

const Footer: React.FC<IFooter> = ({ sampleTextProp }) => {
  const footerLinks = [
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
  ]
  return (
    <footer
      className='w-full p-5 bg-slate-100 text-slate-500 text-center'
    >
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, cumque?</p>
      <div className="w-full ">
        {
          footerLinks.map((footerLink, idx) => {
            return (<Link className='px-2 text-sky-400'  key={idx} href={footerLink.url}>{footerLink.text}
            </Link>)
          })
        }
      </div>
      <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quibusdam magni delectus voluptate nulla dicta iusto ab animi possimus soluta?</small>
    </footer>
  );
};

export default Footer;