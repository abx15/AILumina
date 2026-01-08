import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  courseCount: number;
  color: string;
}

const CategoryCard = ({ name, icon: Icon, courseCount, color }: CategoryCardProps) => {
  return (
    <Link
      to="/courses"
      className="group bg-card rounded-2xl p-6 border border-border/50 shadow-card card-hover text-center"
    >
      <div
        className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${color}`}
      >
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-sm text-muted-foreground">{courseCount} Courses</p>
    </Link>
  );
};

export default CategoryCard;
