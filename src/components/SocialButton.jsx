import React from "react";

const SocialButton = ({ icon, text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center 
        bg-white rounded-full 
        px-4 sm:px-6 md:px-8 
        py-2 sm:py-3 md:py-4 
        shadow-md 
        w-full max-w-xl 
        hover:scale-105 transition duration-300 
        cursor-pointer
      "
    >
      {/* Icon */}
      <div className="
        w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
        flex items-center justify-center 
        bg-blue-900 text-white rounded-full 
        mr-3 sm:mr-4 md:mr-5
      ">
        {icon}
      </div>

      {/* Text */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-900 font-semibold tracking-wide break-words">
        {text}
      </p>
    </a>
  );
};

export default SocialButton;