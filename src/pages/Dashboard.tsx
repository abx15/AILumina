import { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Mock user for UI purposes
      const mockUser = { name: "John Doe", email: "john@example.com" };
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-full flex flex-col items-center justify-center p-8 bg-muted/30">
        <div className="w-full max-w-6xl space-y-8 animate-fade-in">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card p-8 rounded-2xl shadow-sm border border-border">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-muted-foreground mt-1">
                Ready to continue your AI-powered learning journey?
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Courses
                </div>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-xl border border-accent/10">
                <div className="text-2xl font-bold text-accent">85%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Average
                </div>
              </div>
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-xl font-semibold">In Progress</h2>
              <div className="grid grid-cols-1 gap-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-card p-6 rounded-xl border border-border flex flex-col md:flex-row gap-6 items-center"
                  >
                    <div className="w-full md:w-32 h-20 bg-muted rounded-lg shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium">
                        Mastering AI Tools for Development
                      </h3>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        45% Completed • 2 hours left
                      </p>
                    </div>
                    <button className="whitespace-nowrap px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                      Continue Lesson
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">AI Tutor Insights</h2>
              <div className="bg-gradient-accent p-6 rounded-2xl text-white space-y-4">
                <p className="text-sm opacity-90">
                  "You're doing great in AI Ethics! I suggest focusing more on
                  Neural Networks this week to complete your goal."
                </p>
                <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors backdrop-blur-sm font-medium">
                  Chat with AI Tutor
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
