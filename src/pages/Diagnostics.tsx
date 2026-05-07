import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { HeartPulse, Brain, Scan, Ear, Scissors, Microscope } from "lucide-react";
import { diagnosticTests } from "@/data/hospitalData";

const categoryIcons: Record<string, React.ReactNode> = {
  Cardiac: <HeartPulse className="w-6 h-6" />,
  Neurological: <Brain className="w-6 h-6" />,
  Radiological: <Scan className="w-6 h-6" />,
  ENT: <Ear className="w-6 h-6" />,
  Surgery: <Scissors className="w-6 h-6" />,
};

const categoryColors: Record<string, string> = {
  Cardiac: "bg-red-50 text-red-600",
  Neurological: "bg-purple-50 text-purple-600",
  Radiological: "bg-blue-50 text-blue-600",
  ENT: "bg-amber-50 text-amber-600",
  Surgery: "bg-teal-50 text-teal-600",
};

export default function DiagnosticsPage() {
  const grouped = diagnosticTests.reduce<Record<string, typeof diagnosticTests>>((acc, test) => {
    if (!acc[test.category]) acc[test.category] = [];
    acc[test.category].push(test);
    return acc;
  }, {});

  const sortedCategories = Object.entries(grouped).sort(([, a], [, b]) => b.length - a.length);

  return (
    <div className="min-h-screen pt-[72px]">
      {/* Page Header */}
      <section className="bg-[#0A2540] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Diagnostics & Facilities
            </h1>
            <p className="text-center text-white/60 text-lg max-w-2xl mx-auto">
              State-of-the-art diagnostic equipment for accurate and timely diagnosis.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Test Categories */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Offer"
            title="Diagnostic Test Categories"
            subtitle="Comprehensive testing services across multiple specialties to ensure precise diagnosis."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {sortedCategories.map(([category, items], i) => (
              <ScrollReveal
                key={category}
                delay={i * 100}
                className={`h-full ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
              >
                <div className="h-full bg-[#F8FAFB] border border-[#E2E8F0] rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${categoryColors[category] || "bg-teal-50 text-teal-600"}`}>
                      {categoryIcons[category] || <Microscope className="w-6 h-6" />}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#1A2332]">
                      {category} Tests
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {items.map((test) => (
                      <li key={test.id} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                        <div>
                          <span className="text-[#1A2332] font-medium">{test.name}</span>
                          {test.description && (
                            <p className="text-sm text-[#64748B]">{test.description}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Special Facility */}
      <section className="py-16 md:py-24 bg-[#E0F2F1]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Microscope className="w-4 h-4" />
              New Facility Announcement
            </div>
            <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-4">
              Endoscopy & Colonoscopy Now Available
            </h2>
            <p className="text-center text-[#64748B] leading-relaxed">
              We are proud to announce that advanced Endoscopy and Colonoscopy facilities are now available at Dr. N.R. Acharya Memorial Hospital. These procedures are performed by our experienced surgical team led by Dr. Apoorva Acharya.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
