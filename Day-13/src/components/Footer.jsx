import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-8 border-t border-white/10 text-slate-400 text-sm">
      © {new Date().getFullYear()} Nitish Chauhan — Built with ❤️ using React +
      TailwindCSS
    </footer>
  );
};

export default Footer;
