import Link from 'next/link';
import Image from "next/image";

const Logo = ({className}) => {
    return (
        <Link href="/" className={`leading-0 inline-block ${className ?? ""}`}>
                <Image
                    alt="2ul.top logo"
                    className="rounded-full"
                    width={60}
                    height={60}
                    src={'/2ul-top-logo.webp'}
                />
        </Link>
    );
};


export default Logo;
