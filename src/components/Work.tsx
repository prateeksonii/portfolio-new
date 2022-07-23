import { useState } from "react";
import Section from "./Section";

const workDetails = {
  ibm: {
    title: "Package Consultant @ IBM",
    date: "Jan 2021 - Present",
    Content: (
      <ul className="flex flex-col gap-3 list-disc">
        <li>
          Recognized for top performance through promotion and selection for
          high-priority tasks.
        </li>
        <li>
          Optimized system architecture to easily handle 20 million requests per
          day.
        </li>
        <li>Added various new functionalities to multiple microservices.</li>
        <li>Worked on AI-powered chat bot used by 5000+ employees daily.</li>
      </ul>
    ),
  },
  indshine: {
    title: "Software Development Intern @ Indshine",
    date: "Dec 2019",
    Content: (
      <ul className="flex flex-col gap-3 list-disc">
        <li>
          Enhanced preferences to improve user experience of existing
          application.
        </li>
        <li>
          Redesigned static pages to have consistent UI across the website.
        </li>
        <li>
          Setup Content Management System with Gitlab for the official blogs.
        </li>
      </ul>
    ),
  },
  iaugmentor: {
    title: "Web Developer Intern @ iAugmentor Labs",
    date: "Jun - Sep 2019",
    Content: (
      <ul className="flex flex-col gap-3 list-disc">
        <li>
          Developed complete frontend for CMS panel used by the organization.
        </li>
        <li>Redesigned official website using the mockups provided.</li>
        <li>Fixed 100+ bugs in existing codebase.</li>
      </ul>
    ),
  },
};

const Work = () => {
  const [selected, setSelected] = useState<"ibm" | "iaugmentor" | "indshine">(
    "ibm"
  );

  return (
    <Section title="Where I've worked">
      <div className="md:grid md:grid-cols-[1fr_3fr] gap-8 my-12 min-h-[40vh]">
        <ul className="flex flex-col gap-3 border-l border-emerald-400 h-max">
          <li
            className={`hover:bg-emerald-700 px-6 py-2 rounded cursor-pointer transition-all ${
              selected === "ibm" && "bg-emerald-700"
            }`}
            onClick={() => setSelected("ibm")}
          >
            IBM
          </li>
          <li
            className={`hover:bg-emerald-700 px-6 py-2 rounded cursor-pointer transition-all ${
              selected === "indshine" && "bg-emerald-700"
            }`}
            onClick={() => setSelected("indshine")}
          >
            Indshine
          </li>
          <li
            className={`hover:bg-emerald-700 px-6 py-2 rounded cursor-pointer transition-all ${
              selected === "iaugmentor" && "bg-emerald-700"
            }`}
            onClick={() => setSelected("iaugmentor")}
          >
            iAugmentor Labs
          </li>
        </ul>
        <div>
          <div className="flex items-center gap-4">
            <h4 className="font-bold text-xl">{workDetails[selected].title}</h4>
            <div className="italic">{workDetails[selected].date}</div>
          </div>
          <div className="mt-8">{workDetails[selected].Content}</div>
        </div>
      </div>
    </Section>
  );
};

export default Work;
