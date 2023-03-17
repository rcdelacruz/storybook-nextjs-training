import Link from "next/link";
import Image from "next/image";

export interface IHeader {
  sampleTextProp: string;
}

const Header: React.FC<IHeader> = ({ sampleTextProp }) => {
  return <header
    className='w-full flex flex-row justify-between bg-slate-100' 
  >
    <div className="flex space-x-5 m-5">
      <Link href="/">
        <Image
          src="images/devLogo.png"
          alt="Logo"
          width={55}
          height={55}
          priority
        />
      </Link>
      <div>
        <form>
          <input
            type="text"
            className="rounded-md border-2 w-5/6 sm:w-96 h-11 px-3"
            placeholder="Search"
          />
             <button className="border ml-1 p-2 px-4 sm:px-6 border-indigo-500 hover:bg-indigo-100 rounded text-indigo-500">
        Search
      </button>
        </form>
      </div>
    </div>
    <div className="space-x-5 m-5">
    <button className="border p-2 px-4 sm:px-6 border-indigo-500 hover:bg-indigo-100 rounded text-indigo-500">
        Log in
      </button>
      <button className="border-1 p-2 px-4 sm:px-6 bg-indigo-500 rounded text-white">
        Create account
      </button>
    </div>
  </header>;
};

export default Header;