import Image from "next/future/image";
import Section from "./Section";

const About = () => {
  return (
    <Section title="About me">
      <div className="mt-16 md:text-xl leading-relaxed grid md:grid-cols-[2fr_1fr] gap-6">
        <div>
          <p className="">
            I&apos;m a software developer with 1.5 years of professional
            experience at IBM, and 5 years of learning experience about software
            development with various technologies to create a product from start
            to finish. I am seeking employment that will make best use of my
            skills and allow me to develop them further. I am determined,
            enthusiastic and confident in working independently or with a team.
          </p>
          <div className="mt-8">
            Here are the few technologies I use daily:
            <ul className="grid grid-cols-2 list-disc list-inside mt-4">
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>tRPC</li>
              <li>TailwindCSS</li>
              <li>Typescript</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full h-96 sm:my-8 md:my-0">
          <Image
            src="/about.webp"
            alt="About"
            width={200}
            height={384}
            className="z-10 w-full h-96 object-cover hover:bg-blend-darken"
          />
          <div className="absolute top-4 left-4 border-2 border-emerald-400 w-full h-96 -z-10" />
        </div>
      </div>
    </Section>
  );
};

export default About;
