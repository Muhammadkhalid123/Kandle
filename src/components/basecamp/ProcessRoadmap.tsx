import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, PenTool, FileText, Palette, Upload, Globe, Megaphone, TrendingUp } from "lucide-react";

interface Step {
    id: number;
    title: string;
    desc: string;
    x: string;
    y: string;
    icon: React.ElementType;
}

const steps: Step[] = [
    { id: 1, title: "Idea", desc: "Transform your concept into a clear vision with structured planning and audience-focused development.", x: "15%", y: "5%", icon: Lightbulb },
    { id: 2, title: "Writing", desc: "Turn your ideas into a complete manuscript through guided writing and creative refinement.", x: "65%", y: "15%", icon: PenTool },
    { id: 3, title: "Editing", desc: "Polish your content with professional editing to ensure clarity, accuracy, and quality.", x: "25%", y: "28%", icon: FileText },
    { id: 4, title: "Design", desc: "Create a visually compelling book cover and interior layout that attracts and engages readers.", x: "65%", y: "40%", icon: Palette },
    { id: 5, title: "Publishing", desc: "Prepare and publish your book on global platforms with proper setup, ISBN, and compliance.", x: "15%", y: "52%", icon: Upload },
    { id: 6, title: "Distribution", desc: "Make your book available worldwide across major online stores and retail networks.", x: "60%", y: "65%", icon: Globe },
    { id: 7, title: "Marketing", desc: "Promote your book with strategic campaigns, branding, and visibility-driven promotion.", x: "20%", y: "78%", icon: Megaphone },
    { id: 8, title: "Growth", desc: "Build your author career through readership expansion, sales tracking, and long-term brand development.", x: "65%", y: "90%", icon: TrendingUp },
];

export function ProcessRoadmap() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"] // Start drawing when section hits bottom of screen, finish when it's centered
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={ref} className="bg-surface min-h-screen relative overflow-hidden py-20 lg:py-32 text-white">
            {/* Background Heading */}
            <div className="absolute top-5 left-5 lg:top-10 lg:left-10 opacity-10 pointer-events-none">
                <h2 className="text-[15vw] lg:text-[10vw] font-black uppercase leading-none">
                    The<br />Journey
                </h2>
            </div>

            <div className="container mx-auto relative w-full max-w-5xl px-6">

                {/* MOBILE LAYOUT (Vertical Stack) */}
                <div className="lg:hidden flex flex-col gap-12 mt-24 relative z-10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={`mobile-${i}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 p-6 rounded-2xl border border-white/10"
                        >
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-white mb-4 text-sm">
                                <step.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-2 text-sand">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* DESKTOP LAYOUT (Topographic Map) */}
                <div className="hidden lg:block relative h-[1800px]">
                    {/* Topographic Lines (Decorative) */}
                    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 800 1800" preserveAspectRatio="none">
                        <path d="M0,0 Q400,200 800,0" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
                        <path d="M0,600 Q400,800 800,600" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
                        <path d="M0,1200 Q400,1400 800,1200" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
                        <circle cx="200" cy="300" r="300" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
                        <circle cx="600" cy="1200" r="400" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
                    </svg>

                    {/* The Path */}
                    <svg className="absolute inset-0 w-full h-full visible lg:visible invisible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path
                            d="M15,5 C40,5 65,15 65,15 C85,15 45,28 25,28 C5,28 65,40 65,40 C85,40 15,52 15,52 C-5,52 60,65 60,65 C80,65 20,78 20,78 C0,78 65,90 65,90"
                            fill="none"
                            stroke="#bf5640"
                            strokeWidth="0.5"
                            strokeDasharray="1 1"
                            style={{ pathLength }}
                        />
                    </svg>

                    {/* Steps */}
                    {steps.map((step, i) => (
                        <StepCard key={step.id} step={step} index={i} progress={scrollYProgress} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, index, progress }: { step: Step, index: number, progress: MotionValue<number> }) {
    // Reveal steps sequentially as we scroll
    const start = index * 0.12;
    const end = start + 0.1;

    const opacity = useTransform(progress, [start, end], [0, 1]);
    const scale = useTransform(progress, [start, end], [0.8, 1]);

    return (
        <motion.div
            className="absolute w-72 p-6 glass-panel rounded-xl border border-white/5 backdrop-blur-sm"
            style={{ left: step.x, top: step.y, opacity, scale }}
        >
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-white mb-4 shadow-lg shadow-orange-500/20">
                <step.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold uppercase mb-2 text-primary">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
        </motion.div>
    )
}
