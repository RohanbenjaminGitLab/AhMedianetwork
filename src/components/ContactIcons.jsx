import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactIcons = () => {
  return (
    <div className="flex justify-center gap-3 sm:gap-6 md:gap-8 mt-4 sm:mt-6">

      {/* Phone */}
      <a
        href="tel:+94756172378"
        className="bg-blue-100 p-3 sm:p-4 md:p-5 rounded-full shadow-md hover:scale-110 neon-hover transition duration-300"
      >
        <Phone className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/94781197062"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-100 p-3 sm:p-4 md:p-5 rounded-full shadow-md hover:scale-110 neon-hover transition duration-300"
      >
        <FaWhatsapp className="text-green-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>

      {/* Location */}
      <a
        href="https://www.google.com/maps/search/192A,+Keni+Road,+Nintavur+-+01/@7.3617404,81.8460639,17z?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-100 p-3 sm:p-4 md:p-5 rounded-full shadow-md hover:scale-110 neon-hover transition duration-300"
      >
        <MapPin className="text-red-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </a>
    {/* Mail */}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=ah.media.network@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-purple-100 p-3 sm:p-4 md:p-5 rounded-full shadow-md hover:scale-110 neon-hover transition duration-300"
    >
    <Mail className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
</a>

    </div>
  );
};

export default ContactIcons;