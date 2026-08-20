import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export function Logo({ className = "", isFooter = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 shrink-0 ${className}`}>
      {/* Logo Mark */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image
          src="/images/p_p_logo.png"
          alt="P&P Packaging Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Wordmark */}
      <div className="flex flex-col">
        <span className={`font-display text-2xl leading-none tracking-tight ${isFooter ? "text-white" : "text-teal-900"}`}>
          P&P
        </span>
        <span className={`font-body text-[10px] font-bold tracking-[0.15em] uppercase leading-none mt-1 ${isFooter ? "text-white/80" : "text-teal-900/80"}`}>
          PACKAGING
        </span>
      </div>
    </Link>
  );
}
