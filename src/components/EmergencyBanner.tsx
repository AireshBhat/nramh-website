import { useState } from "react";
import { X, Phone } from "lucide-react";

const phones = ["6363-767-805", "6363-793-603", "7676-831-270", "7676-802-114"];

export default function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative bg-red-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex-1">
          <p className="text-sm sm:text-base font-semibold">
            Emergency Medical & Surgical Care — Immediate, Life-Saving Care When You Need It The Most
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
            {phones.map((num) => (
              <a
                key={num}
                href={`tel:+91${num.replace(/-/g, "")}`}
                className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3" />
                {num}
              </a>
            ))}
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 p-1 hover:bg-white/10 rounded transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
