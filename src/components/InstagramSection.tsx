"use client";

const igPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600" },
  { id: 2, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600" },
  { id: 3, image: "https://images.unsplash.com/photo-1595152248441-c3a882b35a9a?auto=format&fit=crop&q=80&w=600" },
  { id: 4, image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600" },
  { id: 5, image: "https://images.unsplash.com/photo-1570172619383-2ca050162231?auto=format&fit=crop&q=80&w=600" },
  { id: 6, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" },
];

export default function InstagramSection() {
  return (
    <section className="py-40 bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mb-24">
          <span className="font-body text-[11px] tracking-[0.4em] uppercase text-gray-400 mb-6 block font-bold">
            The Community
          </span>
          <h2 className="text-5xl lg:text-7xl text-[#171717] leading-tight mb-8 font-display font-medium tracking-tight">
            Digital <span className="italic font-light text-gray-300">Perspective.</span>
          </h2>
          <a href="https://instagram.com" className="font-body text-[13px] tracking-widest uppercase font-bold text-[#171717] border-b border-black pb-1 hover:text-[#a6549e] hover:border-[#a6549e] transition-all">
            @destinationwholesale
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {igPosts.map((post) => (
            <div key={post.id} className="aspect-square overflow-hidden bg-gray-50 group cursor-pointer">
              <img 
                src={post.image} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                alt="Instagram" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
