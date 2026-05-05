import { useState, useMemo } from "react";
import { useSearchParams } from "react-router";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
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
  Ambulance,
  Smile,
  Calendar,
} from "lucide-react";
import { departments, doctors, getDepartmentById, getDoctorServices } from "@/data/hospitalData";

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Bone: <Bone className="w-5 h-5" />,
  Baby: <Baby className="w-5 h-5" />,
  Ear: <Ear className="w-5 h-5" />,
  Pill: <Pill className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  Microscope: <Microscope className="w-5 h-5" />,
  Scissors: <Scissors className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  Ambulance: <Ambulance className="w-5 h-5" />,
  Smile: <Smile className="w-5 h-5" />,
};

export default function Departments() {
  const [searchParams] = useSearchParams();
  const initialDept = searchParams.get("dept") || "all";
  const [activeTab, setActiveTab] = useState(initialDept);

  const tabs = useMemo(() => {
    const list = [{ slug: "all", name: "All" }];
    departments.forEach((d) => list.push({ slug: d.slug, name: d.name }));
    return list;
  }, []);

  const filteredDoctors = useMemo(() => {
    if (activeTab === "all") return doctors;
    const dept = departments.find((d) => d.slug === activeTab);
    if (!dept) return [];
    return doctors.filter((d) => d.departmentId === dept.id);
  }, [activeTab]);

  return (
    <div className="min-h-screen pt-[72px]">
      {/* Page Header */}
      <section className="bg-[#0A2540] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Departments & Doctors
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Meet our team of experienced specialists providing compassionate care across multiple disciplines.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.slug}
                onClick={() => setActiveTab(tab.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.slug
                    ? "bg-teal-500 text-white"
                    : "bg-[#F8FAFB] text-[#64748B] hover:bg-[#E0F2F1] hover:text-teal-600 border border-[#E2E8F0]"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Cards */}
      <section className="py-16 md:py-20 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor, i) => {
              const dept = getDepartmentById(doctor.departmentId);
              const svcs = getDoctorServices(doctor.id);
              return (
                <ScrollReveal key={doctor.id} delay={i * 80}>
                  <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 hover:border-teal-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    {/* Department badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#E0F2F1] flex items-center justify-center text-teal-600">
                        {iconMap[dept?.iconName || "Activity"] || <Activity className="w-4 h-4" />}
                      </div>
                      <Badge className="bg-teal-500/10 text-teal-700 hover:bg-teal-500/20 font-medium">
                        {dept?.name || "General"}
                      </Badge>
                    </div>

                    {/* Doctor info */}
                    <h3 className="font-display text-xl font-semibold text-[#1A2332] mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-[#64748B] italic mb-3">
                      {doctor.qualifications}
                    </p>

                    {/* Availability */}
                    {doctor.availability && (
                      <div className="inline-flex items-center gap-1.5 bg-[#E0F2F1] text-teal-700 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        Available: {doctor.availability}
                      </div>
                    )}
                    {doctor.isVisitingConsultant && !doctor.availability && (
                      <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        Visiting Consultant
                      </div>
                    )}

                    {/* Services */}
                    <div className="mt-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
                        Services
                      </p>
                      <ul className="space-y-1.5">
                        {svcs.slice(0, 8).map((svc) => (
                          <li key={svc.id} className="flex items-start gap-2 text-sm text-[#1A2332]">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                            {svc.name}
                          </li>
                        ))}
                        {svcs.length > 8 && (
                          <li className="text-sm text-[#64748B] pl-3.5">
                            +{svcs.length - 8} more services
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-20 text-[#64748B]">
              No doctors found for this department.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
