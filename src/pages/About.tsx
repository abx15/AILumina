import { Link } from "react-router-dom";
import {
  Target,
  Lightbulb,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
  BookOpen,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { stats, teamMembers } from "@/data/siteData";
import aboutTeam from "@/assets/about-team.jpg";
import heroImage from "@/assets/hero-image.png";

const achievements = [
  { icon: Trophy, value: "10+", label: "Industry Awards" },
  { icon: Globe, value: "150+", label: "Countries Reached" },
  { icon: BookOpen, value: "1000+", label: "Courses Created" },
  { icon: Users, value: "50K+", label: "Happy Learners" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To democratize education by providing world-class online learning experiences that are accessible to everyone, regardless of their background or location.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "To become the global leader in online education, empowering millions of learners to achieve their dreams and transform their careers through knowledge.",
  },
  {
    icon: Award,
    title: "Our Values",
    description:
      "Excellence, innovation, and inclusivity drive everything we do. We believe in continuous improvement and creating a supportive learning community.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            About EduLearn
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto">
            We're on a mission to transform lives through quality education. Since 2014, we've
            helped over 50,000 students worldwide achieve their learning goals.
          </p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold mb-2 block">WHO WE ARE</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering Learners Worldwide
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                EduLearn was founded with a simple yet powerful idea: everyone deserves access
                to quality education. What started as a small team of passionate educators has
                grown into a global platform serving learners in over 150 countries.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our platform combines cutting-edge technology with expert instruction to deliver
                engaging, effective learning experiences. Whether you're looking to advance your
                career, learn a new skill, or explore a new passion, we're here to support your
                journey.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Expert-Led Courses",
                  "Lifetime Access",
                  "Project-Based Learning",
                  "Certificate of Completion",
                  "24/7 Support",
                  "Money-Back Guarantee",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutTeam}
                alt="Our team working"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl shadow-primary">
                <div className="text-4xl font-bold text-primary-foreground">10+</div>
                <div className="text-primary-foreground/80">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold mb-2 block">OUR PURPOSE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card border border-border/50 text-center card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold mb-2 block">OUR TEAM</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the People Behind EduLearn
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of educators, technologists, and creatives work together to
              deliver the best learning experience possible.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 text-center group card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <achievement.icon className="w-10 h-10 text-primary-foreground mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary-foreground mb-2">
                  {achievement.value}
                </div>
                <div className="text-primary-foreground/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already transforming their careers with EduLearn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <Link to="/courses">
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
