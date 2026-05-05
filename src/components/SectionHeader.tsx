interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-medium uppercase tracking-[0.08em] mb-3 ${
            light ? "text-teal-400" : "text-teal-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-[#1A2332]"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-[3px] w-[60px] rounded-full mb-4 ${
          centered ? "mx-auto" : ""
        } ${light ? "bg-teal-400" : "bg-teal-500"}`}
      />
      {subtitle && (
        <p
          className={`text-base max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-[#64748B]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
