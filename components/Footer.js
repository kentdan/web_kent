import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base">
                {config.appName}
              </strong>
            </Link>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
