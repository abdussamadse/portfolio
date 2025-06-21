import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 border-t border-gray-800">
      <p className="text-gray-500">
        © {new Date().getFullYear()} Abdus Samad. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
