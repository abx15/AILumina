import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, Check, Sparkles, Wand2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toast } from "@/hooks/use-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // Get existing users
      const usersStr = localStorage.getItem("users");
      const users = usersStr ? JSON.parse(usersStr) : [];

      // Check if user already exists
      if (users.find((u: any) => u.email === email)) {
        toast({
          title: "Registration Failed",
          description: "An account with this email already exists.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Add new user
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Set active user
      localStorage.setItem("user", JSON.stringify({ name, email }));

      toast({
        title: "Account Created!",
        description: `Welcome to AI Lumina, ${name}!`,
      });

      navigate("/dashboard");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Abstract Background Decorations */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

        <div className="w-full max-w-[1000px] grid lg:grid-cols-2 gap-0 overflow-hidden bg-card rounded-[2.5rem] shadow-2xl border border-border/50 animate-scale-in">
          {/* Left Side: Visual/Marketing */}
          <div className="hidden lg:flex flex-col justify-between p-12 bg-foreground text-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-8">
                <Sparkles className="w-3 h-3 text-primary" />
                Next-Gen Education
              </div>
              <h2 className="text-4xl font-black leading-tight mb-6">
                Start Your{" "}
                <span className="text-primary italic">AI Journey</span> Today.
              </h2>
              <div className="space-y-6">
                {[
                  "Personalized AI Study Path",
                  "24/7 Intelligent Tutoring",
                  "World-Class Curriculum",
                  "Global Student Community",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="font-medium text-background/80">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-12">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p className="italic text-sm text-background/60 mb-4">
                  "AI Lumina completely transformed how I learn complex topics.
                  The AI Tutor is like having a private professor available
                  anytime."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary"></div>
                  <div>
                    <p className="font-bold text-sm">Sarah Jenkins</p>
                    <p className="text-xs text-background/40">
                      Data Science Student
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-10">
              <h1 className="text-3xl font-black tracking-tight mb-2">
                Create Account
              </h1>
              <p className="text-muted-foreground">
                Fill in your details to get started.
              </p>
            </div>

            <form onSubmit={handleSignup} className="space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-xs font-bold uppercase tracking-widest ml-1"
                >
                  Full Name
                </Label>
                <div className="relative group">
                  <Input
                    id="name"
                    placeholder="E.g. Elon Musk"
                    required
                    className="rounded-2xl h-14 bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all px-6"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-widest ml-1"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@nexus.com"
                  required
                  className="rounded-2xl h-14 bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all px-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-xs font-bold uppercase tracking-widest ml-1"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="rounded-2xl h-14 bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all px-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden group"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Wand2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Join AI Lumina
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground">
                Already part of the future?{" "}
                <Link
                  to="/login"
                  className="text-primary font-bold hover:underline underline-offset-4"
                >
                  Log in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
