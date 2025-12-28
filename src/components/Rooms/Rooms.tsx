import "./Rooms.css";

const roomData = [
  // Row 1: Desktop Zigzag (Img, Txt, Img, Txt)
  {
    id: 1,
    type: "img",
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
  },
  {
    id: 2,
    type: "txt",
    theme: "bg-neutral-900",
    title: "PENTHOUSE WITH PANORAMIC CITY SKYLINE",
    desc: "Experience ultimate luxury with floor-to-ceiling windows overlooking the heart of the metropolitan district.",
    price: "ZAR 12000.00",
  },
  {
    id: 3,
    type: "img",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
  },
  {
    id: 4,
    type: "txt",
    theme: "bg-neutral-900",
    title: "MINIMALIST LOFT WITH PRIVATE BALCONY",
    desc: "A serene, industrial-style space designed for the modern traveler seeking peace and architectural beauty.",
    price: "ZAR 8500.00",
  },

  // Row 2: Desktop Zigzag (Txt, Img, Txt, Img)
  {
    id: 5,
    type: "txt",
    theme: "bg-[#c49a6c]",
    title: "RUSTIC HIDEAWAY IN THE ANCIENT FOREST",
    desc: "Reconnect with nature in this handcrafted timber suite, featuring an outdoor stone bath and fireplace.",
    price: "ZAR 9500,00",
  },
  {
    id: 6,
    type: "img",
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
  },
  {
    id: 7,
    type: "txt",
    theme: "bg-[#c49a6c]",
    title: "COASTAL RETREAT WITH OCEAN FRONTS",
    desc: "Wake up to the sound of crashing waves in our premier beachfront suite with direct access to the white sands.",
    price: "ZAR 15000.00",
  },
  {
    id: 8,
    type: "img",
    src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
  },
];

export default function Rooms() {
  return (
    <div>
      <div className="RoomGrid">
        {roomData.map((item) => (
          <div key={item.id} className="block-item">
            {item.type === "img" ? (
              <div className="group h-full w-full overflow-hidden relative">
                <img
                  src={item.src}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt="Accommodation"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className={`text-content ${item.theme} text-white`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-px bg-white/40"></span>
                  <span className="text-[10px] tracking-[0.4em] uppercase font-light">
                    KING ROOM
                  </span>
                  <span className="w-6 h-px bg-white/40"></span>
                </div>
                <h2 className="text-xl font-serif mb-4 uppercase leading-tight max-w-[250px] text-center">
                  {item.title}
                </h2>
                <p className="text-[11px] italic opacity-60 mb-6 max-w-[220px] text-center font-light">
                  Ut Enim Ad Minima Veniam, Quis Nostrum Exercitationem Ullam
                  Corporis Suscipit Laboriosam Nisi Ut Al.
                </p>
                <button className="border border-white/50 px-8 py-2 text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300 uppercase">
                  {item.price}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
