import Link from 'next/link';
import Image from "next/image";
import { BASE_URL } from '../data/constants';

const Logo = ({className, chain=true}) => {
    return (
        <Link href={BASE_URL} className={`leading-0 inline-block ${className ?? ""}`}>
                <Image
                    alt="2UL.top logo"
                    width={60}
                    height={60}
                    src={chain?'/2ul-chain-logo.svg':'/2ul-logo.svg'}
                />
        </Link>
    );
};


export default Logo;
