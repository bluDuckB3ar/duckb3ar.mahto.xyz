import Link from "next/link";
import Image from "next/image";

const links = [
  { url: "/about", title: "about" },
  { url: "/blog", title: "blog" },
  { url: "/contact", title: "contact" },
  { url: "/support", title: "support" },
];

const StartPage = () => (
  <div className="flex flex-col justify-center items-center flex-grow bg-duck-night text-white px-4 md:px-12 lg:px-24 xl:px-42">
    <div className="w-full">
      <div className="flex items-center justify-center bg-duck-night text-rachel">
        <Image
          src="/public/logo.svg"
          alt="duckb3ar logo"
          width={200}
          height={200}
          className="h-20 md:h-64"
        />
        <h1 className="text-md md:text-xl font-bold">duckb3ar</h1>
      </div>
      <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 text-xl md:text-2xl px-4 sm:px-0">
        {links.map((link) => (
          <Link key={link.title} href={link.url} className="w-full">
            <button className="group relative inline-flex h-20 w-full items-center justify-center overflow-hidden rounded-md border bg-transparent font-medium text-white transition-all duration-100 [box-shadow:5px_5px_rgb(237_236_145)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(237_236_145)]">
              {link.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default StartPage;