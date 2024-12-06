import AboutUsText from '../components/AboutUsText';

const WhatToDoPage = () => {
  return (
    <section className="bg-greenDark pt-10 text-textWhite">
      <div className="container">
        <h1 className=" font-body text-4xl font-normal relative z-20 pb-5">
          Manau a city <br />
          <span className="ml-2">Of great wonders</span>
        </h1>
        <div className="left-5 relative top-[-25px] h-2 w-[370px] bg-greenLight shadow-[_0_0_15px_10px_#50c557] opacity-40"></div>
      </div>

      <AboutUsText />
    </section>
  );
};

export default WhatToDoPage;
