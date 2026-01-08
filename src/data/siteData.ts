import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course4 from "@/assets/course-4.jpg";
import course5 from "@/assets/course-5.jpg";
import course6 from "@/assets/course-6.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const courses = [
  {
    id: 1,
    title: "Complete React Developer Course with Hooks & Redux",
    instructor: "Dr. Sarah Johnson",
    image: course1,
    price: 49,
    originalPrice: 199,
    rating: 4.9,
    students: 15420,
    duration: "32 hours",
    level: "Intermediate" as const,
    category: "Web Development",
    lessons: 185,
    description: "Master React from basics to advanced concepts including hooks, context, and Redux.",
    learningPoints: [
      "Master React Hooks: useState, useEffect, useContext",
      "State Management with Redux and Redux Toolkit",
      "Building responsive UI with Tailwind CSS",
      "Deploying React apps to Vercel and Netlify"
    ],
    curriculum: [
      {
        title: "Introduction",
        lessons: [
          { title: "React Overview", duration: "10:00", isPreview: true },
          { title: "Environment Setup", duration: "15:00", isPreview: true }
        ]
      },
      {
        title: "Core Concepts",
        lessons: [
          { title: "JSX & Components", duration: "25:00", isPreview: false },
          { title: "Props and State", duration: "30:00", isPreview: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Data Science & Machine Learning with Python",
    instructor: "Prof. Michael Chen",
    image: course2,
    price: 59,
    originalPrice: 249,
    rating: 4.8,
    students: 12350,
    duration: "48 hours",
    level: "Advanced" as const,
    category: "Data Science",
    lessons: 220,
    description: "Learn data science fundamentals, machine learning algorithms, and Python programming.",
    learningPoints: [
      "Data analysis with Pandas and NumPy",
      "Visualization with Matplotlib and Seaborn",
      "Building ML models with Scikit-Learn",
      "Introduction to Deep Learning with TensorFlow"
    ],
    curriculum: [
      {
        title: "Python for Data Science",
        lessons: [
          { title: "Python Basics", duration: "20:00", isPreview: true },
          { title: "NumPy Fundamentals", duration: "35:00", isPreview: false }
        ]
      },
      {
        title: "Machine Learning Basics",
        lessons: [
          { title: "Linear Regression", duration: "45:00", isPreview: false },
          { title: "Classification Algorithms", duration: "50:00", isPreview: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals: From Beginner to Pro",
    instructor: "Emily Rodriguez",
    image: course3,
    price: 39,
    originalPrice: 149,
    rating: 4.7,
    students: 8920,
    duration: "24 hours",
    level: "Beginner" as const,
    category: "Design",
    lessons: 145,
    description: "Master UI/UX design principles, Figma, and create stunning user interfaces.",
    learningPoints: [
      "Master Figma from scratch",
      "Understand Color Theory & Typography",
      "Create high-fidelity prototypes",
      "Master Responsive Design principles"
    ],
    curriculum: [
      {
        title: "Design Principles",
        lessons: [
          { title: "Introduction to UI vs UX", duration: "15:00", isPreview: true },
          { title: "Color Theory Basics", duration: "20:00", isPreview: false }
        ]
      },
      {
        title: "Figma Mastery",
        lessons: [
          { title: "Figma Interface Overview", duration: "25:00", isPreview: true },
          { title: "Auto Layout & Components", duration: "40:00", isPreview: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Digital Marketing Masterclass: Complete Strategy",
    instructor: "David Williams",
    image: course4,
    price: 44,
    originalPrice: 179,
    rating: 4.6,
    students: 6780,
    duration: "28 hours",
    level: "Intermediate" as const,
    category: "Marketing",
    lessons: 160,
    description: "Learn SEO, social media marketing, content strategy, and paid advertising.",
    learningPoints: [
      "Advanced SEO Strategies",
      "Social Media Marketing on FB & IG",
      "Effective Email Marketing campaigns",
      "Google Ads and Analytics setup"
    ],
    curriculum: [
      {
        title: "Digital Fundamentals",
        lessons: [
          { title: "Market Research", duration: "30:00", isPreview: true },
          { title: "Setting KPIs", duration: "20:00", isPreview: false }
        ]
      },
      {
        title: "Platform Specifics",
        lessons: [
          { title: "SEO Masterclass", duration: "60:00", isPreview: false },
          { title: "Facebook Ads Setup", duration: "45:00", isPreview: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Flutter Mobile App Development Bootcamp",
    instructor: "Alex Thompson",
    image: course5,
    price: 54,
    originalPrice: 219,
    rating: 4.8,
    students: 5430,
    duration: "36 hours",
    level: "Intermediate" as const,
    category: "Mobile Dev",
    lessons: 175,
    description: "Build beautiful cross-platform mobile apps with Flutter and Dart.",
    learningPoints: [
      "Mastering Dart Programming",
      "Building beautiful UIs with Widgets",
      "State Management with Provider/Riverpod",
      "Integrating Firebase for Backend tasks"
    ],
    curriculum: [
      {
        title: "Dart Programming",
        lessons: [
          { title: "Dart Basics", duration: "25:00", isPreview: true },
          { title: "OOP in Dart", duration: "35:00", isPreview: false }
        ]
      },
      {
        title: "Flutter UI",
        lessons: [
          { title: "Stateless vs Stateful", duration: "30:00", isPreview: false },
          { title: "Custom Animations", duration: "50:00", isPreview: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Artificial Intelligence & Deep Learning",
    instructor: "Dr. Lisa Park",
    image: course6,
    price: 69,
    originalPrice: 299,
    rating: 4.9,
    students: 4280,
    duration: "52 hours",
    level: "Advanced" as const,
    category: "AI/ML",
    lessons: 240,
    description: "Deep dive into neural networks, deep learning, and AI applications.",
    learningPoints: [
      "Deep understanding of Neural Networks",
      "Natural Language Processing (NLP)",
      "Computer Vision with OpenCV",
      "Generative AI and Large Language Models"
    ],
    curriculum: [
      {
        title: "Neural Networks",
        lessons: [
          { title: "Perceptrons & Backprop", duration: "40:00", isPreview: true },
          { title: "Optimizers & Loss", duration: "35:00", isPreview: false }
        ]
      },
      {
        title: "Advanced AI",
        lessons: [
          { title: "Transformers and Attention", duration: "55:00", isPreview: false },
          { title: "LLM Fine-tuning", duration: "65:00", isPreview: false }
        ]
      }
    ]
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Jennifer Liu",
    role: "Software Developer at Google",
    image: testimonial1,
    content:
      "EduLearn transformed my career. The React course was incredibly comprehensive and helped me land my dream job at Google. The instructors are top-notch!",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Thompson",
    role: "Data Scientist at Amazon",
    image: testimonial2,
    content:
      "The Data Science course exceeded my expectations. Real-world projects and expert guidance made all the difference. Highly recommended for anyone serious about data!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "UX Designer at Spotify",
    image: testimonial3,
    content:
      "The UI/UX design program is phenomenal. I went from complete beginner to designing for Spotify. The community support is amazing and the content is always up-to-date.",
    rating: 5,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "The Future of Online Learning: Trends to Watch in 2024",
    excerpt:
      "Discover the latest trends shaping online education and how they'll impact your learning journey.",
    image: blog1,
    author: "Sarah Johnson",
    date: "Dec 28, 2024",
    category: "Education",
  },
  {
    id: 2,
    title: "10 Essential Skills Every Developer Needs to Succeed",
    excerpt:
      "From soft skills to technical expertise, learn what it takes to thrive in the tech industry.",
    image: blog2,
    author: "Michael Chen",
    date: "Dec 25, 2024",
    category: "Career",
  },
  {
    id: 3,
    title: "How to Stay Motivated While Learning to Code",
    excerpt:
      "Practical tips and strategies to maintain momentum on your coding journey.",
    image: blog3,
    author: "Emily Rodriguez",
    date: "Dec 22, 2024",
    category: "Tips",
  },
];

export const categories = [
  { name: "Web Development", courseCount: 42 },
  { name: "Data Science", courseCount: 35 },
  { name: "UI/UX Design", courseCount: 28 },
  { name: "Digital Marketing", courseCount: 24 },
  { name: "Mobile Development", courseCount: 31 },
  { name: "Machine Learning", courseCount: 19 },
  { name: "Business", courseCount: 22 },
  { name: "Photography", courseCount: 15 },
];

export const stats = [
  { value: "50K+", label: "Active Students" },
  { value: "200+", label: "Expert Instructors" },
  { value: "1000+", label: "Quality Courses" },
  { value: "95%", label: "Success Rate" },
];

export const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "CEO & Founder",
    image: testimonial1,
    bio: "With over 10 years of experience in Web Development, Sarah leads our vision for the future of education.",
  },
  {
    name: "Prof. Michael Chen",
    role: "Head of Education",
    image: testimonial2,
    bio: "Michael is a recognized expert in Data Science and has taught thousands of students worldwide.",
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Designer",
    image: testimonial3,
    bio: "Emily specializes in creating intuitive user experiences and has a passion for design education.",
  },
];
