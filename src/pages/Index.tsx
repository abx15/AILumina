import { Link } from "react-router-dom";
import { BarChart3, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import { testimonials, blogPosts } from "@/data/siteData";
import heroImage from "@/assets/hero-image.png";
import aboutTeam from "@/assets/about-team.jpg";

// Stats data
const statsData = [
  { value: "24,654", label: "Worldwide Students" },
  { value: "300+", label: "Best Courses" },
  { value: "2.5k+", label: "Professional Mentor" },
  { value: "95%", label: "Positive Feedback" },
];

// Your Courses data
const yourCourses = [
  {
    icon: "php",
    title: "Fun with PHP",
    instructor: "Mikey Taylor",
    level: "BEGINNERS",
    progress: 68,
  },
  {
    icon: "wordpress",
    title: "Wordpress",
    instructor: "Sam Chris",
    level: "BEGINNERS",
    progress: 68,
  },
  {
    icon: "shopify",
    title: "Shopify Store",
    instructor: "Adam Hunt",
    level: "BEGINNERS",
    progress: 68,
  },
  {
    icon: "wix",
    title: "Fun with Wix",
    instructor: "Jeff Thomas",
    level: "BEGINNERS",
    progress: 68,
  },
];

// Categories data
const categoriesData = [
  {
    icon: "python",
    name: "Python Language",
    description:
      "Python is an interpreted high-level general-purpose programming language.",
    color: "bg-blue-500",
  },
  {
    icon: "php",
    name: "Php Language",
    description:
      "PHP is a general-purpose scripting language geared towards web development.",
    color: "bg-indigo-600",
  },
  {
    icon: "shopify",
    name: "Shopify Store",
    description:
      "Shopify Inc. is a Canadian multinational e-commerce company headquartered in Ottawa.",
    color: "bg-green-500",
  },
  {
    icon: "wix",
    name: "Wix Editor",
    description:
      "Wix.com Ltd. is an Israeli software company that provides cloud-based web development services.",
    color: "bg-amber-500",
  },
  {
    icon: "wordpress",
    name: "Wordpress",
    description:
      "WordPress is a free and open-source content management system written in PHP and paired.",
    color: "bg-sky-500",
  },
  {
    icon: "figma",
    name: "Figma Design",
    description:
      "Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional",
    color: "bg-purple-500",
  },
];

// Icon component for tech logos
const TechIcon = ({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) => {
  const icons: Record<string, JSX.Element> = {
    php: (
      <svg viewBox="0 0 640 512" className={className} fill="currentColor">
        <path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8h31.2c24.1 0 40.7 7.6 45.1 23.9 3.3 12.3 0 25.6-5.4 39.1-6.6 16.5-17.9 32.2-37.7 43.9-16.2 9.6-35.4 13.4-53.8 13.4H255l33.1-165.1zm50.2 67.3c-6 0-9.9.1-14.6.4l-8.7 44.5c4.3.3 9.1.4 14.6.4 32.2 0 37-18.1 37-30.3 0-10.6-7.6-15-28.3-15zm128.3-67.3h36.5l-8.7 44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7l-33.1 165.1h36.7l8.7-44.8c16.5-.1 28.4-.5 42.7-.5 2.8 13.7 8.2 26 2.1 39.2-10.9 23.6-36.8 41.1-64.6 41.1-32.1 0-40.1-13.6-40.1-32.6 0-13.1 7.7-26.4 32.5-88.4z" />
      </svg>
    ),
    wordpress: (
      <svg viewBox="0 0 512 512" className={className} fill="currentColor">
        <path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm142.5 39l68.7 188.4c.2.5.4 1.1.5 1.6l-95.3-260.8c8.2-.3 15.6-1 15.6-1-7.3-.9-6.5-11.6.8-11.2 0 0 22.3 1.8 37.8 1.8 14.7 0 39.5-1.8 39.5-1.8 7.3-.4 8.2 10.9.8 11.2 0 0-7.4.7-15.6 1l68.3 187.1 19.1-63.7c8.3-26.5 14.6-45.5 14.6-61.9 0-23.7-8.5-40.1-15.8-52.9-9.7-15.8-18.8-29.1-18.8-44.8 0-17.6 13.3-33.9 32.1-33.9.8 0 1.7.1 2.5.1-34-31.2-79.3-50.3-129.1-50.3-66.8 0-125.6 34.2-159.9 86.1 4.5.1 8.7.2 12.4.2 20.1 0 51.3-2.4 51.3-2.4 10.4-.6 11.6 14.6 1.2 15.8 0 0-10.4 1.2-22 1.8zm212.5 6.4c.5 3.3.8 6.8.8 10.5 0 10.4-1.9 22.1-7.7 36.7l-61.9 179.1c60.3-35.1 100.9-100.6 100.9-175.1 0-35.1-9-68.1-24.9-96.8zM256 469.7c-17.6 0-34.6-2.2-50.8-6.3l53.9-156.7 55.2 151.3c.4.9.8 1.7 1.3 2.5-19 5.9-39.2 9.2-59.6 9.2zM43.3 256c0 115.4 93.6 209 209 209s209-93.6 209-209-93.6-209-209-209-209 93.6-209 209zm-42.6 0C.7 114.5 114.5.7 256 .7S511.3 114.5 511.3 256 397.5 511.3 256 511.3.7 397.5.7 256z" />
      </svg>
    ),
    shopify: (
      <svg viewBox="0 0 448 512" className={className} fill="currentColor">
        <path d="M388.32 104.1a4.66 4.66 0 00-4.4-4c-2 0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76 472S388.72 106.5 388.32 104.1zM288.65 70.47a116.67 116.67 0 00-7.21-17.61C271 32.85 255.42 22 237 22a15 15 0 00-4 .4c-.4-.8-1.2-1.2-1.6-2C223.4 11.63 213 7.63 200.58 8c-24 .8-48 18-67.25 48.83-13.61 21.62-24 48.84-26.82 70.06-27.62 8.4-46.83 14.41-47.23 14.81-14 4.4-14.41 4.8-16 18-1.2 10-38 291.82-38 291.82L307.86 504V65.67a41.66 41.66 0 00-4.4.4s-18.42 5.61-39.22 12zm-78.05 23.61c-17.21 5.61-35.62 11.21-54 16.82 5.2-19.62 14.81-39.23 26.82-52 4.4-4.8 10.81-10 17.61-13.21 7.21 14.81 9.61 34.83 9.61 48.43zM218.6 32.85c5.61 0 10.41 1.2 14.81 4 7.21 4 12.81 10.41 17.61 18.82 10.41 19.22 16.42 46.84 16 70.46-15.61 4.8-32.82 10.41-50.83 16-8.81-32.82-10.81-55.24-7.21-68.85a51.42 51.42 0 019.62-40.43z" />
      </svg>
    ),
    wix: (
      <svg viewBox="0 0 640 512" className={className} fill="currentColor">
        <path d="M393.38 131.69c0 13.03 2.08 32.69-28.68 43.83-9.52 3.45-15.95 9.66-15.95 9.66 0-31 4.72-42.22 17.4-48.86 9.75-5.11 27.23-4.63 27.23-4.63zm-115.8 35.54l-34.24 132.66-28.48-108.57c-7.69-31.99-20.81-48.53-48.43-48.53-27.37 0-40.66 16.18-48.43 48.53L89.52 299.89 55.28 167.23C49.73 140.51 23.86 128.96 0 131.96l65.57 247.93s21.63 1.56 32.46-3.96c14.22-7.25 20.98-12.84 29.59-46.57 7.67-30.07 29.11-118.41 31.12-124.7 4.76-14.94 11.09-13.81 15.4 0 1.97 6.3 23.45 94.63 31.12 124.7 8.6 33.73 15.37 39.32 29.59 46.57 10.82 5.52 32.46 3.96 32.46 3.96l65.57-247.93c-24.42-3.07-49.82 8.93-55.3 35.27zm115.78 5.21s-4.12 6.68-13.72 11.43c-4.71 2.33-9.68 3.34-14.19 3.34-26.91 0-34.06-22.92-34.06-41.97v-.1c0-32.15 19.91-61.9 54.55-61.9 17.16 0 36.17 6.03 36.17 6.03V140.1s-16.48-4.69-34.74-4.69c-68.55 0-106.28 44.67-106.28 104.48v.1c0 72.04 45.84 106.21 108.74 100.19 18.29-1.75 40.64-8.78 40.64-8.78v-84.22h-51.82v33.47h17.97v31.95z" />
      </svg>
    ),
    python: (
      <svg viewBox="0 0 448 512" className={className} fill="currentColor">
        <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
      </svg>
    ),
    figma: (
      <svg viewBox="0 0 384 512" className={className} fill="currentColor">
        <path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H256.019V416.208C256.019 469.113 213.131 512 160.226 512C107.321 512 64.4333 469.113 64.4333 416.208C64.4333 382.708 81.629 353.225 107.676 336.103C81.629 318.981 64.4333 289.498 64.4333 256.002C64.4333 222.502 81.629 193.019 107.676 175.897C81.629 158.776 64.4333 129.292 64.4333 95.7924H14ZM109.793 159.983H160.226V32.0001H109.793C74.2172 32.0001 46.0001 60.2173 46.0001 95.7924C46.0001 131.368 74.2172 159.983 109.793 159.983ZM109.793 191.983C74.2172 191.983 46.0001 220.2 46.0001 255.775C46.0001 291.35 74.2172 319.794 109.793 319.794H160.226V191.983H109.793ZM192.226 256.002C192.226 291.577 220.443 319.794 256.019 319.794H274.161C309.737 319.794 337.954 291.577 337.954 256.002C337.954 220.426 309.737 192.209 274.161 192.209H256.019C220.443 192.209 192.226 220.426 192.226 256.002ZM160.226 191.983H192.226V319.794H160.226V191.983ZM274.161 32.0001H192.226V160.209H274.161C309.737 160.209 337.954 131.992 337.954 96.4165C337.954 60.8414 309.737 32.6243 274.161 32.6243V32.0001ZM160.226 351.795H109.793C74.2172 351.795 46.0001 380.012 46.0001 415.587C46.0001 451.163 74.2172 479.38 109.793 479.38C145.369 479.38 173.586 451.163 173.586 415.587V351.795H160.226Z" />
      </svg>
    ),
  };

  return icons[name] || <div className={className} />;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  AI-Powered Learning Revolution
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                  Master Your Future with{" "}
                  <span className="text-gradient">AI Lumina</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Personalized learning paths, 24/7 AI tutoring, and expert-led
                  courses designed to propel your career into the age of
                  artificial intelligence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/courses">
                    <Button
                      size="lg"
                      className="rounded-full px-10 h-14 text-lg shadow-primary"
                    >
                      Explore Courses
                    </Button>
                  </Link>
                  <Link to="/ai-tutor">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full px-10 h-14 text-lg"
                    >
                      Try AI Tutor
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt="avatar"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold text-foreground">10k+</span>{" "}
                    students already joined
                  </p>
                </div>
              </div>

              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-[100px] rounded-full"></div>
                <div className="relative bg-card border border-border rounded-[2rem] p-4 shadow-2xl overflow-hidden backdrop-blur-sm">
                  <img
                    src={heroImage}
                    alt="AI Learning Dashboard"
                    className="rounded-[1.5rem] w-full"
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                          Weekly Progress
                        </p>
                        <h3 className="text-xl font-bold">Deep Learning</h3>
                      </div>
                      <span className="text-2xl font-bold text-primary">
                        82%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full mt-4 overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-card">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Why AI Lumina?</h2>
              <p className="text-muted-foreground text-lg">
                We combine world-class content with cutting-edge AI to provide
                an unparalleled learning experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Bot className="w-8 h-8" />,
                  title: "24/7 AI Personalized Tutor",
                  desc: "Get instant answers and personalized explanations for any topic in your course.",
                  color: "bg-blue-500/10 text-blue-500",
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Smart Progress Tracking",
                  desc: "AI-driven insights to help you identify gaps and master complex concepts faster.",
                  color: "bg-primary/10 text-primary",
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Interactive AI Quizzes",
                  desc: "Dynamic assessments that adapt to your skill level for maximum retention.",
                  color: "bg-accent/10 text-accent",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="p-10 rounded-[2rem] border border-border bg-background hover:shadow-xl transition-all duration-300 card-hover"
                >
                  <div
                    className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center mb-8`}
                  >
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Highlight Section */}
        <section className="py-24 overflow-hidden">
          <div className="container-custom">
            <div className="bg-foreground text-background rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-primary opacity-10 blur-[120px]"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                    Meet Lumina, Your AI Study Partner
                  </h2>
                  <p className="text-xl text-background/70 leading-relaxed">
                    Lumina learns with you. It understands your strengths and
                    weaknesses, drafting custom study plans and explaining
                    difficult concepts in ways you actually understand.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Instant doubt clearing",
                      "Auto-generated summaries",
                      "Personalized flashcards",
                      "Voice-guided learning",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-lg font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="rounded-full px-10 h-14 text-lg">
                    Experience Lumina Now
                  </Button>
                </div>
                <div className="bg-background/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-center items-center text-center">
                  <Bot className="w-32 h-32 text-primary animate-float mb-8" />
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold italic">
                      "How can I help you excel today?"
                    </h3>
                    <p className="text-background/50">
                      Ask anything from Quantum Physics to Baking Cakes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
