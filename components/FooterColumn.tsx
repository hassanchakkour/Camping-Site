"use client";

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="bold-18 whitespace-nowrap">{title}</h2>
      {children}
    </div>
  );
};

export default FooterColumn;
