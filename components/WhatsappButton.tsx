import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919990859602?text=Hi%20Yorra%20Tech%2C%20I’d%20like%20to%20discuss%20a%20digital%20solution%20for%20my%20business.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Yorra Tech on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        hover:bg-green-600
        text-white
        p-4
        rounded-full
        shadow-2xl
        text-3xl
        transition-colors
        duration-300
      "
      style={{
        animation: "whatsappFloat 2.5s ease-in-out infinite",
      }}
    >
      <FaWhatsapp />
    </a>
  );
}