import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  image,
  author,
  date,
  category,
}: BlogCardProps) => {
  return (
    <article className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card card-hover">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {excerpt}
        </p>

        {/* Read More */}
        <Link
          to="#"
          className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
