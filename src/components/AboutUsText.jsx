import Bubble from '../assets/Bubble.svg'

const AboutUsText = () => {
  return (
    <section className="bg-greenDark pt-5">
      <div className="container text-textWhite">
        <div className=" w-full md:w-3/4 xl:w-7/12 space-y-7 font-thin text-xl leading-7 tracking-wider relative">
          <img src={Bubble} className="absolute top-[-20px] right-[-250px] w-[200px] h-[200px] object-cover object-top rounded-t-full opacity-80 z-10" />
          <img src={Bubble} className="absolute top-[80px] right-[-100px] object-cover object-top rounded-t-full w-[80px] h-[80px] opacity-80 z-20" />
          <p className="relative">
            Manaus Hotel, signed by AMZ Arquitetos, is located near Amazonas Theater in the historic city center of Manaus (Brazil). The basic premises for developing the project was the renovation of an old house from the early 20th Century and the
            construction of a new attached building in the center of the block.
          </p>
          <p className="relative">
            The old house’s first floor was lowered to the street level to accommodate the hotel’s reception. Its walls’ paintings were scratched off revealing the raw conditions of the original stone arcs and bricks that supported the house’s wooden
            beams. In the upper floor (where its old rooms once were) is now located a restaurant that kept and recovered the original wooden floor and window frames of the house.
          </p>
          <p className="relative">
            For better preservation of the house’s original structure, all service areas (bar, kitchen, laundry) were placed in a new building construction. Still connected to the old house, it kept its same height creating a construction continuity.
          </p>
          <p className="relative">
            Occupying the center of the block, a new building for all the hotel’s dormitories was placed in the corner of the lot. The remaining space was occupied by the pool and garden creating a microclimate of their own (mild and shaded) and
            simulating the sensation of being in the middle of a tropical rainforest. Despite the building’s contemporary lines, it still created a changing dialogue with its surrounding historic center. The proportion of the window openings follow
            the rhythm of the nearby constructions.
          </p>
          <p className="relative">
            Furthermore, the preservation of the local atmosphere and culture were the starting point for the interior design. The bench’s and luminaires’ design, same use of colors, materials and preservation of original structure coverings all
            integrate with the old house’s style. Wooden and iron structure’s raw conditions blend with the indigenous basketry and regional crafting elements.
          </p>
          <div className="bg-greenLight w-10 h-10 shadow-[_0_0_240px_240px_#50c557] opacity-10 rounded-full relative z-0 top-[-650px] right-[-50px]"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsText;
