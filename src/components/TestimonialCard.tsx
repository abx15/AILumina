import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({
  name,
  role,
  image,
  content,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card relative">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6">
        <Quote className="w-10 h-10 text-primary/20" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-amber-400 text-amber-400"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-muted-foreground leading-relaxed mb-6">{content}</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
        />
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
