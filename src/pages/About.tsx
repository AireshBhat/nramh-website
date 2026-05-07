import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { Heart, Users, Shield, Lightbulb, Stethoscope } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Compassion",
    desc: "We treat every patient with empathy, dignity, and respect.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Accessibility",
    desc: "Affordable healthcare for all, regardless of background or income.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Excellence",
    desc: "Committed to the highest standards of medical care and safety.",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Community",
    desc: "Serving rural communities with dedication since 1983.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Integrity",
    desc: "Honest, transparent, and ethical in all our practices.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    desc: "Embracing modern technology for better patient outcomes.",
  },
];

const timeline = [
  { year: "1979", event: "Dr. Bhaskara Acharya begins clinical practice with his father, Dr. N. R. Acharya" },
  { year: "1983", event: "A modest 15-bed facility is established in Koteshwara" },
  { year: "1990s", event: "Expanded services to include surgery and specialist consultations" },
  { year: "2000s", event: "Added diagnostic facilities and modern medical equipment" },
  { year: "2026", event: "A full-service hospital with 15+ departments and 24/7 emergency care" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-[72px]">
      {/* Page Header */}
      <section className="bg-[#0A2540] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Our Story"
              title="A Legacy of Compassion"
              subtitle="The journey of Dr. N.R. Acharya Memorial Hospital is rooted in a deep commitment to serving the underserved."
              centered
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="prose prose-lg max-w-none text-[#1A2332] leading-relaxed space-y-6">
              <p className="text-xl text-[#1A2332] font-medium border-l-4 border-teal-500 pl-4 italic">
                "Our founder, Dr. N. Bhaskara Acharya's journey, is a testament to compassion in action."
              </p>
              <p className="text-justify hyphens-auto">
                What began in 1983 as a modest 15-bed facility grew from his unwavering commitment to the rural communities around Koteshwara. Started his clinical practice along with his father, Dr. N. R. Acharya, in 1979, delivering infants and tending to the sick during house visits, he witnessed firsthand the hardships faced by the poor and backward populations.
              </p>
              <p className="text-justify hyphens-auto">
                Those experiences ignited his vision — to create a place where every person, regardless of background or income, could receive affordable, dignified, and quality healthcare. His dedication laid the foundation for a hospital in memory of Dr. N. R. Acharya that continues to heal, uplift, and inspire generations.
              </p>
              <p className="text-justify hyphens-auto">
                Today, the hospital stands as a beacon of hope for thousands of families across Udupi district and beyond, offering comprehensive medical care across more than 15 departments with a team of dedicated specialists.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-[#F8FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="Timeline of Growth"
            centered
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-teal-500/30" />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 100}>
                <div className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow mt-1.5" />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="inline-block bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded mb-2">
                      {item.year}
                    </span>
                    <p className="text-[#1A2332]">{item.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 md:py-28 bg-[#E0F2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Principles"
            title="Mission & Values"
            subtitle="The guiding principles that define our approach to healthcare."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 border border-[#E2E8F0] hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600 mb-4">
                    {val.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#1A2332] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
