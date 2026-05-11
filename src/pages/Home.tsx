import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import EmergencyBanner from "@/components/EmergencyBanner";
import {
  Stethoscope,
  Heart,
  Brain,
  Bone,
  Baby,
  Ear,
  Pill,
  Activity,
  Microscope,
  Scissors,
  Dumbbell,
  HeartPulse,
  ChevronRight,
  Phone,
  Ambulance,
  Smile,
  Scan,
  Waves,
} from "lucide-react";
import { departments } from "@/data/hospitalData";
import founderWebp from "@/assets/nr-bhaskara-acharya.webp";
import founderJpg from "@/assets/nr-bhaskara-acharya.jpg";
import hospitalDayWebp from "@/assets/hospital-exterior-day.webp";
import hospitalDayJpg from "@/assets/hospital-exterior-day.jpg";
import hospitalDuskWebp from "@/assets/hospital-exterior-dusk.webp";
import hospitalDuskJpg from "@/assets/hospital-exterior-dusk.jpg";

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Bone: <Bone className="w-6 h-6" />,
  Baby: <Baby className="w-6 h-6" />,
  Ear: <Ear className="w-6 h-6" />,
  Pill: <Pill className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Microscope: <Microscope className="w-6 h-6" />,
  Scissors: <Scissors className="w-6 h-6" />,
  Dumbbell: <Dumbbell className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Ambulance: <Ambulance className="w-6 h-6" />,
  Smile: <Smile className="w-6 h-6" />,
};

const stats = [
  { value: "40+", label: "Years of Service" },
  { value: "15+", label: "Departments" },
  { value: "24/7", label: "Emergency Care" },
  { value: "100000+", label: "Patients Treated" },
];

const departmentTags: Record<string, string[]> = {
  "emergency-care": ["24/7", "Trauma care", "Surgical"],
  "obstetrics-gynaecology": ["Maternity", "C-section", "PCOD"],
  "general-physician": ["Diabetes", "Hypertension", "Fever care"],
  "general-surgery": ["Hernia", "Endoscopy", "Gallbladder"],
  "neuro-psychiatry": ["Counselling", "Anxiety", "Depression"],
  "orthopaedic-surgery": ["Fractures", "Joint care", "Back pain"],
  "ent-surgery": ["Tonsils", "Sinus", "Hearing"],
  "paediatric-care": ["Newborn", "Vaccinations", "Child health"],
  "endocrinology": ["Diabetes", "Thyroid", "Hormones"],
  "dental-care": ["Cleaning", "Extraction", "Root canal"],
  "physiotherapy": ["Rehabilitation", "Recovery", "Mobility"],
  "rheumatology": ["Arthritis", "Joint pain", "Auto-immune"],
  "cardiology": ["Heart disease", "ECG", "Cardiac testing"],
  "obg-infertility": ["Fertility", "Reproductive", "Conception"],
};

const diagnosticsPreview = [
  { name: "ECG", desc: "Heart activity recording", Icon: Activity },
  { name: "2D Echo", desc: "Heart imaging", Icon: Heart },
  { name: "X-rays", desc: "Digital radiography", Icon: Scan },
  { name: "Ultrasound", desc: "Soft tissue imaging", Icon: Waves },
  { name: "Endoscopy", desc: "Upper GI examination", Icon: Microscope },
  { name: "EEG", desc: "Brain activity mapping", Icon: Brain },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0A2540] overflow-hidden">
        <picture className="absolute inset-0 block">
          <source srcSet={hospitalDayWebp} type="image/webp" />
          <img
            src={hospitalDayJpg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/90 via-[#0A2540]/75 to-[#0A2540]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,184,166,0.12)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal delay={0}>
            <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              YOUR HEALTH IS<br />OUR MISSION.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-center text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Compassionate healthcare for rural communities of coastal Karnataka, since 1983.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/departments">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-lg font-semibold">
                  Explore Departments
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60 px-6 py-3 rounded-lg font-semibold"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Emergency Banner */}
      <EmergencyBanner />

      {/* Stats */}
      <section className="py-20 md:py-28 bg-[#F8FAFB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#64748B] font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Departments"
            title="Comprehensive Care Across Multiple Specialties"
            subtitle="Our team of experienced specialists provides quality healthcare across a wide range of medical disciplines."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <ScrollReveal key={dept.id} delay={i * 80}>
                <Link
                  to={`/departments?dept=${dept.slug}`}
                  className="group block bg-white border border-[#E2E8F0] rounded-xl p-6 hover:border-teal-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#E0F2F1] flex items-center justify-center shrink-0 text-teal-600">
                      {iconMap[dept.iconName || "Activity"] || <Activity className="w-6 h-6" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-semibold text-[#1A2332] mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                        {dept.name}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {(departmentTags[dept.slug] || ["Specialist care"]).map(tag => (
                          <span
                            key={tag}
                            className="inline-block bg-[#E0F2F1] text-teal-700 text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1 text-sm text-teal-600 font-medium">
                        View Doctors <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder / About */}
      <section className="py-20 md:py-28 bg-[#E0F2F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden border-4 border-teal-500">
                <picture>
                  <source srcSet={founderWebp} type="image/webp" />
                  <img
                    src={founderJpg}
                    alt="Dr. N. Bhaskara Acharya, Founder"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="lg:max-w-xl">
                <span className="inline-block text-xs font-medium uppercase tracking-[0.08em] text-teal-600 mb-3">
                  Our Legacy
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
                  Dr. N. Bhaskara Acharya, MBBS
                </h2>
                <p className="text-teal-600 font-medium mb-8">Director and Founder</p>
                <p className="text-justify hyphens-auto text-[#1A2332] leading-relaxed mb-6">
                  Our founder, Dr. N. Bhaskara Acharya's journey is a testament to compassion in action. What began in 1983 as a modest 15-bed facility grew from his unwavering commitment to the rural communities around Koteshwara.
                </p>
                <p className="text-justify hyphens-auto text-[#1A2332] leading-relaxed mb-6">
                  Starting his clinical practice alongside his father, Dr. N. R. Acharya, in 1979, delivering infants and tending to the sick during house visits, he witnessed firsthand the hardships faced by the poor and underserved. Those experiences ignited his vision: to create a place where every person, regardless of background or income, could receive affordable, dignified, and quality healthcare.
                </p>
                <p className="text-justify hyphens-auto text-[#1A2332] leading-relaxed mb-8">
                  His dedication laid the foundation for a hospital in memory of Dr. N. R. Acharya that continues to heal, uplift, and inspire generations.
                </p>
                <Link to="/about">
                  <Button className="bg-[#0A2540] hover:bg-[#081C32] text-white px-6 py-3 rounded-lg font-semibold">
                    Read Our Full Story
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Diagnostics Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Diagnostics & Facilities"
            title="Advanced Testing For Accurate Diagnosis"
            subtitle="State-of-the-art diagnostic equipment and modern facilities ensure precise diagnosis and effective treatment planning."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagnosticsPreview.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 80}>
                <div className="flex items-center gap-4 bg-[#F8FAFB] border border-[#E2E8F0] rounded-xl p-5 hover:border-teal-500 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0 text-teal-600">
                    <item.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A2332]">{item.name}</h4>
                    <p className="text-sm text-[#64748B]">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/diagnostics">
              <Button className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-lg font-semibold">
                View All Diagnostics
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 md:py-28 bg-[#0A2540] overflow-hidden">
        <picture className="absolute inset-0 block">
          <source srcSet={hospitalDuskWebp} type="image/webp" />
          <img
            src={hospitalDuskJpg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/95 via-[#0A2540]/90 to-[#0A2540]/95" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-center text-white/70 text-lg mb-8">
              Our team is available 24/7 for emergencies. For appointments and inquiries, reach out anytime.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
              {["6363-767-805", "6363-793-603", "7676-831-270", "7676-802-114"].map(
                (num) => (
                  <a
                    key={num}
                    href={`tel:+91${num.replace(/-/g, "")}`}
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg transition-colors font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    {num}
                  </a>
                )
              )}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-center text-white/50 text-sm mb-6">
              N.H.-66, Koteshwara, Kundapura Taluk, Udupi district - 576222
            </p>
            <Link to="/contact">
              <Button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-lg font-semibold text-lg">
                Contact Us
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
