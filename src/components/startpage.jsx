import Link from "next/link";

const links = [
    { url: "/about", title: "About" },
    { url: "/blog", title: "Blog" },
    { url: "/contact", title: "Contact" },
    { url: "/support", title: "Support" },
];

const StartPage = () => (
    <div className="flex flex-col justify-center items-center flex-grow text-black bg-bear px-4 md:px-12 lg:px-24 xl:px-42">
        <div className="w-full max-w-screen-xl">
            <div className=" flex items-center justify-center  bg-bear text-rachel ">
                <div className="flex items-end  ">
                    <div className="flex items-end">
                        <img src="/duckb3ar-logo.svg" alt="Duckb3ar Logo" className="h-16 md:h-64" />  
                      <div className=" font-xl md:grid-cols-2 gap-4 md:gap-10 text-xl md:text-2xl px-4   ">
                        <div className="text-8xl">test </div>
                      </div>
                    </div>
                </div>
            </div>
            <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 text-xl md:text-2xl px-4 sm:px-0">
                {links.map((link) => (
                    <Link key={link.title} href={link.url}>
                        <button
                            className="border-4 md:border-8 p-4 sm:p-8 md:p-16 border-black flex items-center justify-center w-full bg-bear text-black hover:bg-black hover:text-bear focus:bg-black focus:text-bear"
                        >
                            {link.title}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);

export default StartPage;
