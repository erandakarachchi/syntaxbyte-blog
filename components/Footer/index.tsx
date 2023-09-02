import Link from "next/link";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-slate-50 mt-20">
      <div className="container mx-auto py-8 grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-12">
        <div className="md:col-span-4">
          <h4 className="font-semibold text-xl">About</h4>
          <p className="text-md py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>
            <span className="font-semibold text-md">Email : </span>{" "}
            hello@example.com
          </p>
          <p className="mt-2">
            <span className="font-semibold text-md">Phone : </span> +1 890 899
            123
          </p>
        </div>
        <div className="md:col-span-4">
          <div className="flex justify-between md:justify-around">
            <div>
              <h4 className="font-semibold text-xl">Links</h4>
              <div className="flex flex-col gap-2 py-4">
                <Link className="block" href="/">
                  Home
                </Link>
                <Link className="block" href="/about">
                  About
                </Link>
                <Link className="block" href="/blog">
                  Blog
                </Link>
                <Link className="block" href="/author">
                  Author
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-xl">Category</h4>
              <div className="flex flex-col gap-2 py-4">
                <Link className="block" href="/">
                  Life style
                </Link>
                <Link className="block" href="/about">
                  Technology
                </Link>
                <Link className="block" href="/blog">
                  Travel
                </Link>
                <Link className="block" href="/author">
                  Business
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="flex flex-col items-center  gap-2">
            <h4 className="font-semibold text-xl">Weekly Newsletter</h4>
            <p>Get weekly updates via email</p>
            <div className="border-2 border-slate-100 flex items-center pr-2 py-1 bg-white w-3/4 rounded mt-2">
              <input
                placeholder="Your email"
                className="px-5 w-full py-1 outline-none text-base-content rounded"
              ></input>
              <MdMailOutline />
            </div>
            <button className="font-semibold text-justify uppercase font px-8 py-2 mt-2 rounded bg-red-100 hover:bg-red-200 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
