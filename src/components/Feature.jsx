// src/components/Feature.jsx
import PropTypes from "prop-types";
import { BiAbacus, BiLink, BiPen, BiQrScan } from "react-icons/bi";

const icons = (idx) => {
    const predef = {
        "Pen": <BiPen />,
        "Link": <BiLink />,
        "QRCode": <BiQrScan />,
    };
    if (predef.hasOwnProperty(idx)) {
        return predef[idx];
    } else {
        return <BiAbacus />;
    }
};
const Feature = ({ title, desc, className }) => {
    return (
        <div className={`service group relative flex px-3 py-5 rounded-md duration-300 hover:bg-gray-50  ${className ?? ""}`}>
            {/* Feature Icon */}
            {/* <div className="mr-4 bg-white group-hover:bg-gray-50 relative flex-shrink-0 self-start w-[50px] md:w-auto">
                {icons(thumb)}
            </div> */}

            {/* Service Content */}
            <div>
                <h2 className="font-semibold text-base mb-3">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

const serviceBefore = "before:absolute before:left-10 before:top-9 before:h-[calc(100%-60px)] before:w-[1px] before:bg-gray-300";
const serviceAfter = "after:absolute after:left-9 after:bottom-4 after:h-[10px] after:w-[10px] after:rounded-full after:bg-gray-300";

Feature.propTypes = {
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

export default Feature;
