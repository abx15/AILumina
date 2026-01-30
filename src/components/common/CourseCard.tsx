import { Link } from "react-router-dom";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  id: number;
  title: string;
  instructor: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  lessons: number;
}

const CourseCard = ({
  id,
  title,
  instructor,
  image,
  price,
  originalPrice,
  rating,
  students,
  duration,
  level,
  category,
  lessons,
}: CourseCardProps) => {
  const levelColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-amber-100 text-amber-700",
    Advanced: "bg-red-100 text-red-700",
  };

  return (
    <Link
      to={`/courses/${id}`}
      className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border/50"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={levelColors[level]}>{level}</Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm text-foreground">
            {category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{instructor}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{lessons} lessons</span>
          </div>
        </div>

        {/* Rating & Students */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-foreground">{rating}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()} students</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-primary group-hover:underline">
            View Course →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
