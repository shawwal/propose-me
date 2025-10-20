import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer aria-label="Site footer" className="border-t border-border mt-20">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <p className="text-muted-foreground text-sm text-center">
          © {year} Brinc. Internal Tool - For authorized use only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;