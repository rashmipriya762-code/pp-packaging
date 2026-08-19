import { MapPin, ArrowRight } from "lucide-react";

export function ClientsOfficeMap() {
  return (
    <section className="bg-cream pb-16 lg:pb-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-lg border border-[#E5DCC9]">
          
          {/* Left: Map Visual */}
          <div className="w-full lg:w-[60%] relative h-64 lg:h-auto bg-[#EBE4D3] overflow-hidden flex items-center justify-center">
            {/* Map-like background pattern */}
            <div className="absolute inset-0 opacity-[0.15]" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%233D6B7A' stroke-width='1'/%3E%3Cpath d='M30 10v80M50 10v80M70 10v80M10 30h80M10 50h80M10 70h80' stroke='%233D6B7A' stroke-width='0.5'/%3E%3C/svg%3E")`,
                   backgroundSize: '100px 100px'
                 }}>
            </div>
            
            {/* The Map Pin */}
            <div className="relative z-10 flex flex-col items-center animate-bounce-slow">
              <div className="w-12 h-12 bg-teal-900 rounded-full flex items-center justify-center shadow-xl shadow-teal-900/30 text-white">
                <MapPin size={24} strokeWidth={2} className="text-gold-600" />
              </div>
              <div className="w-4 h-1 bg-teal-900/20 rounded-[100%] mt-2 blur-[1px]"></div>
            </div>
          </div>

          {/* Right: Info Panel */}
          <div className="w-full lg:w-[40%] bg-teal-900 p-10 lg:p-16 flex flex-col justify-center">
            <h3 className="font-display text-white text-3xl mb-6">Visit Our Office</h3>
            <p className="font-body text-white/80 text-base leading-relaxed mb-10">
              We'd love to meet you in person and discuss how we can help your brand grow with premium packaging solutions.
            </p>
            <button className="btn-pill btn-white self-start">
              Get Directions <ArrowRight size={16} strokeWidth={1.5} className="ml-2" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
