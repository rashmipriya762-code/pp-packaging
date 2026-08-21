"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { EnquiryModal } from "@/components/ui/EnquiryModal";

interface EnquireNowButtonProps {
  /** Preselects the "Product Interest" dropdown in the modal. */
  product?: string;
  /** Replaces the default pill styling entirely when supplied. */
  className?: string;
  label?: string;
}

export function EnquireNowButton({
  product,
  className,
  label = "Enquire Now",
}: EnquireNowButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className ?? "btn-pill btn-teal"}
      >
        {label}
        <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
      </button>
      <EnquiryModal
        isOpen={open}
        onClose={() => setOpen(false)}
        defaultProduct={product}
      />
    </>
  );
}
