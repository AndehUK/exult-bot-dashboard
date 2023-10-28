import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative mr-4 h-8 w-44">
        <Image fill alt="logo" src="/logo-dark-full.png" />
      </div>
    </Link>
  );
};
