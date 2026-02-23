import SocialButton from "./components/SocialButton";
import ContactIcons from "./components/ContactIcons";
import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 bg-[length:200%_200%] animate-gradient-x flex items-center justify-center px-4 sm:px-6">

      {/* Glass Container */}
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 text-white flex flex-col items-center">

        {/* Logo Section */}
        <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8">
          <img
            src="/AllLogo.png"
            alt="AH Logo"
            className="w-64 sm:w-72 md:w-80 lg:w-96 max-w-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mt-4 sm:mt-6 bg-white text-blue-900 px-4 sm:px-6 py-2 rounded-xl text-center break-words">
          AH MEDIA NETWORK
        </h1>

        {/* Subtitle */}
        <p className="tracking-widest mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-center opacity-80 break-words">
          AH NEWS - AH MEDIA - AH SPORTS
        </p>

        {/* Contact Icons */}
        <ContactIcons />

        {/* Social Section */}
        <h2 className="mt-8 text-sm sm:text-base md:text-lg tracking-widest">
          FIND US ON
        </h2>

        {/* Social Buttons */}
        <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6 w-full items-center">

          <SocialButton
            icon={<FaFacebookF />}
            text="FACEBOOK | AH SPORTS"
            link="https://www.facebook.com/actionhivestreamz"
          />

          <SocialButton
            icon={<FaFacebookF />}
            text="FACEBOOK | AH MEDIA NETWORK"
            link="https://www.facebook.com/ah.media.network"
          />

          <SocialButton
            icon={<FaYoutube />}
            text="YOUTUBE | AH MEDIA NETWORK"
            link="https://www.youtube.com/@ah_media_network"
          />

          <SocialButton
            icon={<FaTiktok />}
            text="TIKTOK | AH MEDIA NETWORK"
            link="https://www.tiktok.com/@AHMediaNetwork"
          />

          <SocialButton
            icon={<FaInstagram />}
            text="INSTAGRAM | AH MEDIA NETWORK"
            link="https://www.instagram.com/AHMediaNetwork"
          />

          <SocialButton
            icon={<FaWhatsapp />}
            text="WHATSAPP | AH MEDIA NETWORK"
            link="https://chat.whatsapp.com/CVqeiYIJ4GQ40RExIUbYpV"
          />

        </div>

        {/* Developer Credit */}
        <p className="mt-8 text-xs sm:text-sm text-center opacity-70">
          Developed by <span className="font-semibold"> -Rohanbenjamin</span><br />
          Contact Number{" "}
          <a
            href="https://wa.me/94755391504"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-green-400 transition"
          >
            -0755391504
          </a>
        </p>

      </div>
    </div>
  );
}

export default App;