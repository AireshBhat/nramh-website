import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const phones = [
  { num: "6363-767-805", label: "Emergency / Main" },
  { num: "6363-793-603", label: "Appointments" },
  { num: "7676-831-270", label: "General Inquiry" },
  { num: "7676-802-114", label: "Diagnostics" },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-[72px]">
      {/* Page Header */}
      <section className="bg-[#0A2540] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Reach out for appointments, emergencies, or general inquiries. We are here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <ScrollReveal direction="left">
              <div>
                <SectionHeader
                  eyebrow="Get In Touch"
                  title="Contact Information"
                  centered={false}
                />

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0F2F1] flex items-center justify-center text-teal-600 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A2332] mb-1">Address</h4>
                      <p className="text-[#64748B]">
                        N.H.-66, Koteshwara, Kundapura Taluk,<br />
                        Udupi district - 576222
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0F2F1] flex items-center justify-center text-teal-600 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A2332] mb-1">Phone Numbers</h4>
                      <div className="space-y-1">
                        {phones.map((p) => (
                          <a
                            key={p.num}
                            href={`tel:+91${p.num.replace(/-/g, "")}`}
                            className="flex items-center gap-2 text-[#64748B] hover:text-teal-600 transition-colors"
                          >
                            <span className="text-sm">{p.num}</span>
                            <span className="text-xs text-[#94A3B8]">({p.label})</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0F2F1] flex items-center justify-center text-teal-600 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A2332] mb-1">Working Hours</h4>
                      <p className="text-[#64748B]">
                        Emergency: 24/7<br />
                        OPD: 9:00 AM – 6:00 PM (Mon – Sat)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0F2F1] flex items-center justify-center text-teal-600 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A2332] mb-1">Email</h4>
                      <p className="text-[#64748B]">
                        For general inquiries, please call us directly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 font-semibold text-sm">
                    For emergencies, please call directly. Do not wait for email responses.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Map placeholder */}
            <ScrollReveal direction="right">
              <div className="h-full min-h-[400px] bg-[#F8FAFB] rounded-xl border border-[#E2E8F0] overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-[#1A2332] mb-2">
                    Dr. N.R. Acharya Memorial Hospital
                  </h3>
                  <p className="text-[#64748B] mb-4">
                    N.H.-66, Koteshwara,<br />Kundapura Taluk, Udupi district - 576222
                  </p>
                  <a
                    href="https://maps.google.com/?q=Koteshwara+Kundapura+Udupi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-600 font-medium hover:underline"
                  >
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
