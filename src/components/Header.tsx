const Header = () => {
  return (
    <div className="mx-auto flex flex-col justify-center min-h-[calc(100vh-96px)] w-4/5 md:w-2/5">
      <div className="space-y-2 md:space-y-4">
        <h4 className="text-emerald-400 md:text-xl">Hi, my name is</h4>
        <h2 className="text-zinc-300 text-3xl md:text-6xl font-black">
          Prateek Soni
        </h2>
        <h1 className="text-zinc-500 text-3xl md:text-6xl font-black">
          I build things for the web.
        </h1>
      </div>
      <p className="text-zinc-300 md:text-xl leading-relaxed mt-8 w-4/5 md:w-[60ch]">
        I&apos;m a software developer specialized in building beautiful digital
        experiences. Currently, I help in building products for various clients
        at{" "}
        <a className="text-emerald-400 hover:underline" href="https://ibm.com">
          IBM
        </a>
        .
      </p>
      <a
        href="/work"
        className="block mt-8 w-max py-3 px-6 border border-emerald-400 rounded hover:bg-emerald-600 transition-all"
      >
        Check out my work
      </a>
    </div>
  );
};

export default Header;
