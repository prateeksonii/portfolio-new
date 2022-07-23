import Section from "./Section";

const Work = () => {
  return (
    <Section title="Where I've worked">
      <div className="md:grid md:grid-cols-[1fr_3fr]">
        <ul className="flex flex-col gap-3 my-12 border-l border-emerald-400 pl-4">
          <li>IBM</li>
          <li>Indshine</li>
          <li>iAugmentor Labs</li>
        </ul>
      </div>
    </Section>
  );
};

export default Work;
