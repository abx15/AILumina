import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Clock,
  Users,
  Star,
  BookOpen,
  Play,
  Award,
  Globe,
  CheckCircle,
  ChevronDown,
  Share2,
  Heart,
  Bot,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/data/siteData";
import testimonial1 from "@/assets/testimonial-1.jpg";

const curriculum = [
  {
    title: "Getting Started",
    lessons: [
      { title: "Course Introduction", duration: "5:00", isPreview: true },
      {
        title: "Setting Up Your Environment",
        duration: "12:30",
        isPreview: true,
      },
      {
        title: "Understanding the Basics",
        duration: "18:45",
        isPreview: false,
      },
    ],
  },
  {
    title: "Core Concepts",
    lessons: [
      { title: "Fundamentals Deep Dive", duration: "25:00", isPreview: false },
      { title: "Working with Components", duration: "32:15", isPreview: false },
      { title: "State Management", duration: "28:30", isPreview: false },
      { title: "Handling Events", duration: "20:00", isPreview: false },
    ],
  },
  {
    title: "Advanced Topics",
    lessons: [
      {
        title: "Performance Optimization",
        duration: "35:00",
        isPreview: false,
      },
      { title: "Testing Best Practices", duration: "30:45", isPreview: false },
      { title: "Deployment Strategies", duration: "22:15", isPreview: false },
    ],
  },
  {
    title: "Real-World Projects",
    lessons: [
      {
        title: "Project 1: Building a Dashboard",
        duration: "45:00",
        isPreview: false,
      },
      {
        title: "Project 2: E-commerce App",
        duration: "55:30",
        isPreview: false,
      },
      {
        title: "Project 3: Social Media Clone",
        duration: "1:02:00",
        isPreview: false,
      },
    ],
  },
];

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id)) || courses[0];
  const [activeTab, setActiveTab] = useState("overview");

  const levelColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-amber-100 text-amber-700",
    Advanced: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Course Banner */}
        <section className="bg-foreground text-background py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-10 blur-[120px]"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl space-y-6 animate-fade-in">
              <div className="flex flex-wrap gap-3">
                <Badge
                  className={`${
                    levelColors[course.level as keyof typeof levelColors]
                  } rounded-full px-4`}
                >
                  {course.level}
                </Badge>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs">
                  <Sparkles className="w-3 h-3 text-primary" />
                  AI-Enhanced Curriculum
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                {course.title}
              </h1>
              <p className="text-xl text-background/70 leading-relaxed max-w-2xl">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-bold text-xl">{course.rating}</span>
                  <span className="text-background/50">
                    ({course.students.toLocaleString()} students)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">{course.duration} TOTAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-medium">CERTIFICATE INCLUDED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content Grid */}
        <section className="py-12 bg-muted/20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-8">
                {/* Navigation Tabs */}
                <div className="flex gap-8 border-b border-border">
                  {[
                    "overview",
                    "curriculum",
                    "ai-assistant",
                    "instructor",
                    "reviews",
                  ].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                        activeTab === tab
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.replace("-", " ")}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="animate-fade-in">
                  {activeTab === "overview" && (
                    <div className="space-y-12">
                      <div className="space-y-6">
                        <h2 className="text-3xl font-bold">
                          What you will master
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                          {(course as any).learningPoints
                            ? (course as any).learningPoints.map(
                                (item: string, i: number) => (
                                  <div
                                    key={i}
                                    className="flex gap-3 items-start p-4 bg-card rounded-xl border border-border"
                                  >
                                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="font-medium">{item}</span>
                                  </div>
                                )
                              )
                            : [
                                "Deep understanding of AI integration patterns",
                                "Building high-performance neural networks",
                                "Mastering modern development workflows",
                                "Hands-on projects with real-world impact",
                              ].map((item, i) => (
                                <div
                                  key={i}
                                  className="flex gap-3 items-start p-4 bg-card rounded-xl border border-border"
                                >
                                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                  <span className="font-medium">{item}</span>
                                </div>
                              ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h2 className="text-3xl font-bold">
                          The Learning Experience
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          This isn't just a video course. You'll have access to
                          our integrated AI pair programmer, live project
                          environments, and a community of thousands of
                          learners.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "curriculum" && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold">Course Modules</h2>
                      <Accordion
                        type="single"
                        collapsible
                        className="space-y-4"
                      >
                        {((course as any).curriculum || curriculum).map(
                          (section: any, idx: number) => (
                            <AccordionItem
                              key={idx}
                              value={`item-${idx}`}
                              className="bg-card border border-border rounded-2xl overflow-hidden px-2"
                            >
                              <AccordionTrigger className="hover:no-underline py-6 px-4">
                                <div className="flex justify-between w-full pr-6">
                                  <span className="text-xl font-bold">
                                    {section.title}
                                  </span>
                                  <span className="text-sm text-muted-foreground">
                                    {section.lessons.length} Lessons
                                  </span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="pb-6">
                                <div className="space-y-2">
                                  {section.lessons.map(
                                    (lesson: any, lIdx: number) => (
                                      <div
                                        key={lIdx}
                                        className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-xl transition-colors cursor-pointer group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                            <Play className="w-3.5 h-3.5" />
                                          </div>
                                          <span className="font-medium">
                                            {lesson.title}
                                          </span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                          {lesson.duration}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          )
                        )}
                      </Accordion>
                    </div>
                  )}

                  {activeTab === "ai-assistant" && (
                    <div className="p-8 bg-foreground text-background rounded-[2rem] space-y-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary opacity-20 blur-[100px]"></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                            <Bot className="w-8 h-8" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold">
                              Course AI Tutor
                            </h2>
                            <p className="text-background/50">
                              Ready to help you with this specific course
                            </p>
                          </div>
                        </div>
                        <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 min-h-[300px] border border-white/10 flex items-center justify-center text-center">
                          <div className="max-w-md space-y-4">
                            <p className="text-xl font-medium">
                              "Enroll in this course to unlock your personal AI
                              tutor for 24/7 support."
                            </p>
                            <Button className="rounded-full px-8">
                              Upgrade for AI Support
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "instructor" && (
                    <div className="bg-card border border-border rounded-[2rem] p-8 space-y-8 animate-fade-in text-card-foreground">
                      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                        <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 shadow-xl border-4 border-background">
                          <img
                            src={course.image}
                            alt={course.instructor}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h2 className="text-3xl font-black">
                              {course.instructor}
                            </h2>
                            <p className="text-primary font-bold uppercase tracking-widest text-xs mt-1">
                              Lead Instructor
                            </p>
                          </div>
                          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                            Our instructors are industry veterans with years of
                            experience in their respective fields. They are
                            dedicated to providing you with the best learning
                            experience and helping you achieve your career
                            goals.
                          </p>
                          <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium">
                              <Users className="w-4 h-4 text-primary" />
                              15,000+ Students
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium">
                              <BookOpen className="w-4 h-4 text-primary" />
                              12 Courses
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium">
                              <Star className="w-4 h-4 text-primary" />
                              4.9 Instructor Rating
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-card border border-border rounded-[2.5rem] shadow-2xl p-4 sticky top-24">
                  <div className="aspect-video bg-muted rounded-[1.8rem] overflow-hidden relative mb-8">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-primary">
                        <Play className="w-8 h-8 ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-8 space-y-8">
                    <div className="flex items-end gap-3">
                      <span className="text-5xl font-black">
                        ${course.price}
                      </span>
                      <span className="text-2xl text-muted-foreground line-through opacity-50 mb-1">
                        ${course.originalPrice}
                      </span>
                      <Badge className="bg-primary/20 text-primary border-none rounded-lg text-sm mb-1 px-3">
                        80% OFF
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      <Button className="w-full h-16 rounded-2xl text-xl font-bold shadow-primary">
                        Enroll Now
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full h-16 rounded-2xl text-xl font-bold"
                      >
                        Add to Wishlist
                      </Button>
                    </div>
                    <div className="space-y-4 pt-4">
                      <h4 className="font-bold text-lg">Includes:</h4>
                      {[
                        {
                          icon: <Play className="w-4 h-4" />,
                          text: "Lifelong access to content",
                        },
                        {
                          icon: <Globe className="w-4 h-4" />,
                          text: "English (US) subtitles",
                        },
                        {
                          icon: <Users className="w-4 h-4" />,
                          text: "Access to private forum",
                        },
                        {
                          icon: <Award className="w-4 h-4" />,
                          text: "Certificate on completion",
                        },
                      ].map((inc, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <div className="text-primary">{inc.icon}</div>
                          <span className="font-medium">{inc.text}</span>
                        </div>
                      ))}
                    </div>
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

export default CourseDetails;
