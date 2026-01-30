import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, Sparkles, Fingerprint, Chrome, Github } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // Get users from localStorage
      const usersStr = localStorage.getItem("users");
      const users = usersStr ? JSON.parse(usersStr) : [];

      // Find user
      const user = users.find(
        (u: any) => u.email === email && u.password === password,
      );

      if (user) {
        // Set active user
        localStorage.setItem(
          "user",
          JSON.stringify({ name: user.name, email: user.email }),
        );

        toast({
          title: "Successfully Logged In",
          description: `Welcome back, ${user.name}!`,
        });

        navigate("/dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

        <div className="w-full max-w-[480px] space-y-8 animate-fade-in relative">
          <div className="bg-card p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-border/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

            <div className="text-center mb-10">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <Fingerprint className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight">
                Access Lumina
              </h1>
              <p className="text-muted-foreground mt-2 font-medium">
                The future of learning awaits you.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-widest ml-1"
                >
                  Account Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@future.com"
                  required
                  className="rounded-2xl h-14 bg-muted/40 border-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all px-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <Label
                    htmlFor="password"
                    className="text-xs font-bold uppercase tracking-widest"
                  >
                    Security Pin
                  </Label>
                  <Link
                    to="#"
                    className="text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest"
                  >
                    Forgot?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="rounded-2xl h-14 bg-muted/40 border-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all px-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    Authenticating...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <LogIn className="w-5 h-5" />
                    Initialize Login
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-10 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                <span className="bg-card px-4">Neural Sync</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Button
                variant="outline"
                className="h-14 rounded-2xl border-border/50 hover:bg-muted/50 transition-all flex gap-3 text-xs font-bold uppercase tracking-widest"
              >
                <Chrome className="w-4 h-4 text-red-500" />
                Google
              </Button>
              <Button
                variant="outline"
                className="h-14 rounded-2xl border-border/50 hover:bg-muted/50 transition-all flex gap-3 text-xs font-bold uppercase tracking-widest"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground font-medium">
              New to the ecosystem?{" "}
              <Link
                to="/signup"
                className="text-primary font-black hover:underline underline-offset-4"
              >
                Create Digital ID
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
