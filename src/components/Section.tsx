import type { FC } from "react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section
      id="about"
      className="w-4/5 md:w-2/5 mx-auto min-h-screen flex flex-col justify-center"
    >
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex-1 border border-emerald-800 opacity-40" />
      </div>
      {children}
    </section>
  );
};

export default Section;
