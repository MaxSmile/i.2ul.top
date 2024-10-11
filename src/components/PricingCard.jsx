// src/components/PricingCard.jsx
import PropTypes from "prop-types";
import { FaCheck, FaTimes } from "react-icons/fa";

// Function to select the correct icon
const icons = (icon) => {
  const predef = {
    "check": <FaCheck />,
    "times": <FaTimes />,
  };
  return predef[icon] || <FaTimes />;
};

const PricingCard = ({ plan, price, features, link, buttonText, className }) => {
  return (
    <div className={`pricing group relative flex flex-col px-5 py-7 rounded-md duration-300 hover:bg-gray-100 ${className ?? ""}`}>
      {/* Plan Title */}
      <div className="mb-4">
        <h2 className="font-semibold text-lg">{plan}</h2>
        <p className="text-2xl font-bold my-2">{price}</p>
      </div>

      {/* Plan Features */}
      <ul className="mb-6 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center mb-2">
            {icons(feature.icon)}
            <span className="ml-2">{feature.text}</span>
          </li>
        ))}
      </ul>

      {/* Fixed Button at the Bottom */}
      <div className="mt-auto">
        <a href={link} className="button-teal inline-block w-full">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  plan: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  link: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PricingCard;
