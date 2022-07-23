const Nav = () => {
  return (
    <nav className="mx-auto w-[90vw] h-24 flex items-center">
      <div className="text-2xl font-black rounded-full border-emerald-400 border-4 w-10 h-10 grid place-items-center text-emerald-400">
        P
      </div>
      <div className="ml-auto items-center gap-8 hidden md:flex">
        <a href="#about">About</a>
        <div>Experience</div>
        <div>Work</div>
        <div>Contact</div>
        <div className="py-2 px-4 border border-emerald-400 text-emerald-400 rounded-md">
          Resume
        </div>
      </div>
    </nav>
  );
};

export default Nav;
