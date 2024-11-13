import React from 'react';

const Hero = () => {
  return (
    <section className="flex justify-center items-center mt-24 mb-32">
      <div className="w-3/5 text-left">
        <h2 id="monsterrat" className="mb-1 text-xl font-bold">Lewis Cabal</h2>
        <h3 id="monsterrat" className="mb-4 opacity-65">Computer Science @ UVic</h3>
        <h1 id="monsterrat" className="mb-6 text-6xl ">Hello! I'm a <a className="underline decoration-sky-500">Computer Science student</a> based in Victoria, BC.</h1>
      </div>
    </section>
  );
};

export default Hero;