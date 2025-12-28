import "./AboutUs.css";

import aboutOne from "@assets/Crop600x400.jpg";
import aboutTwo from "@assets/3.jpg";

const AboutUs = () => {
  return (
    <section className="About-Us max-w-7xl mx-auto px-6 py-16 font-sans text-gray-700">
      <div className="about-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="about-content text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-800 mb-4">
            About Us
          </h2>
          <div className="w-48 lg:w-32 h-px bg-amber-700 mb-8 mx-auto lg:mx-0"></div>

          <div className="space-y-6 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            <p>
              Contrary to popular belief, Lorem isn't simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Avalon's leading hotels with gracious
              island hospitality, thoughtful amenities and distinctive.
            </p>
            <p>
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage...
            </p>
          </div>

          <button className="mt-10 px-10 py-3 border-2 border-gray-900 font-bold tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-colors uppercase">
            Read More
          </button>
        </div>

        {/* Right Column: Image Composition */}
        <div className="relative h-[400px] md:h-[400px] order-2 lg:order-2">
          {/* Main Large Image (Top Right) */}
          <div className="absolute top-0 right-0 w-4/5 h-2/3 overflow-hidden shadow-lg">
            <img
              src={aboutOne}
              alt="Resort Pool"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle Overlapping Image (Bottom Left) */}
          <div className="absolute bottom-10 left-0 w-3/5 h-1/2 border-8 border-white shadow-2xl z-10 hidden lg:block">
            <img
              src={aboutTwo}
              alt="Woman at Pool"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Top-most Image (Bottom Right) */}
          <div className="absolute bottom-0 right-10 w-2/5 h-1/2 border-8 border-white shadow-2xl z-20 hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400"
              alt="Spa Treatment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile Single Image (Shown only on small screens) */}
          <div className="lg:hidden w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800"
              alt="Resort"
              className="w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
