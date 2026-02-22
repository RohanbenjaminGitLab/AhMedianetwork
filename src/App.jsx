import SocialButton from "./components/SocialButton";
import ContactIcons from "./components/ContactIcons";
import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram,FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 flex items-center justify-center px-4 sm:px-6">

      {/* Glass Container */}
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 text-white flex flex-col items-center animate-fadeIn">

        {/* Logo Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <img
            src="/AllLogo.png"
            alt="AH Logo"
            className="w-24 sm:w-36 md:w-40 max-w-full rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mt-4 sm:mt-6 bg-white text-blue-900 px-4 sm:px-6 py-2 rounded-xl text-center shadow-md break-words">
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
            className="w-full sm:w-auto"
          />
          <SocialButton
            icon={<FaFacebookF />}
            text="FACEBOOK | AH MEDIA NETWORK"
            link="https://www.facebook.com/ah.media.network/"
            className="w-full sm:w-auto"
          />
          <SocialButton
            icon={<FaYoutube />}
            text="YOUTUBE | AH MEDIA NETWORK"
            link="https://youtube.com/@ah_media_network?si=k0m007jo8hkRJvQT"
            className="w-full sm:w-auto"
          />
          <SocialButton
            icon={<FaTiktok />}
            text="TIKTOK | AH MEDIA NETWORK"
            link="https://www.tiktok.com/@AHMediaNetwork"
            className="w-full sm:w-auto"
          />
          <SocialButton
            icon={<FaInstagram />}
            text="INSTAGRAM | AH MEDIA NETWORK"
            link="https://www.instagram.com/AHMediaNetwork"
            className="w-full sm:w-auto"
          />
          <SocialButton
           icon={<FaWhatsapp />}
           text="WHATSAPP | AH MEDIA NETWORK"
           link="https://chat.whatsapp.com/CVqeiYIJ4GQ40RExIUbYpV?mode=gi_t" // Replace 947XXXXXXXX with your number
           className="w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default App;