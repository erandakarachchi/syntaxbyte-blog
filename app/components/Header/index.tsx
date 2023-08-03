import Image from "next/image";
import Link from "next/link";
import { headerData } from "@/app/data/data";

const Header = () => {
  return (
    <header className="container py-5">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-3">
          <Image src="/syntax_logo.png" alt="Logo" width={250} height={50} />
        </div>
        <nav className="col-span-6">
          <div className="w-full flex items-center justify-center gap-10">
            {headerData.map((item, index) => {
              return <Link className="font-medium link-hover transition hover:duration-300" href={item.path}>{item.name}</Link>;
            })}
          </div>
        </nav>
        <div className="col-span-3 flex justify-end">
          <input placeholder="Search" className="px-5 py-1 border-2 border-slate-500"></input>
        </div>
      </div>
    </header>
  );
};

export default Header;
