"use client";
import { useState } from "react";
import { EnquiryModal } from "@/components/ui/EnquiryModal";
import { ArrowRight } from "lucide-react";

interface EnquireNowButtonProps {
  product?: string;
  className?: string;
  label?: string;
}

export function EnquireNowButton({ product, className = "", label = "Enquire Now" }: EnquireNowButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`btn-primary ${className}`}
      >
        {label} <ArrowRight size={14} />
      </button>
      <EnquiryModal isOpen={open} onClose={() => setOpen(false)} defaultProduct={product} />
    </>
  );
}
