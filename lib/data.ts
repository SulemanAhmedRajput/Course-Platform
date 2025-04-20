// Dummy data for the course platform

// User roles
export type UserRole = "student" | "instructor" | "admin"

// User interface
export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar: string
  bio?: string
  createdAt: Date
  courses?: Course[]
  enrolledCourses?: Enrollment[]
}

// Course interface
export interface Course {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  price: number
  discountPrice?: number
  thumbnail: string
  instructorId: string
  instructor: User
  category: Category
  level: "beginner" | "intermediate" | "advanced"
  language: string
  duration: number // in minutes
  lectures: number
  rating: number
  ratingCount: number
  students: number
  createdAt: Date
  updatedAt: Date
  sections: CourseSection[]
  tags: string[]
  featured: boolean
  status: "draft" | "published" | "archived"
}

// Course section interface
export interface CourseSection {
  id: string
  title: string
  order: number
  courseId: string
  lectures: CourseLecture[]
}

// Course lecture interface
export interface CourseLecture {
  id: string
  title: string
  description?: string
  order: number
  sectionId: string
  videoUrl: string
  duration: number // in minutes
  isFree: boolean
  resources?: Resource[]
  hasCaptions: boolean
  captionsUrl?: string
}

// Resource interface
export interface Resource {
  id: string
  title: string
  type: "pdf" | "link" | "zip" | "image"
  url: string
  lectureId: string
}

// Category interface
export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  courses?: Course[]
  icon?: string
}

// Enrollment interface
export interface Enrollment {
  id: string
  userId: string
  courseId: string
  enrolledAt: Date
  completedAt?: Date
  progress: number // 0-100
  lastAccessedLectureId?: string
  certificate?: Certificate
  course: Course
}

// Certificate interface
export interface Certificate {
  id: string
  userId: string
  courseId: string
  issuedAt: Date
  url: string
}

// Review interface
export interface Review {
  id: string
  userId: string
  courseId: string
  rating: number
  comment?: string
  createdAt: Date
  user: User
}

// Cart interface
export interface Cart {
  id: string
  userId: string
  items: CartItem[]
  createdAt: Date
  updatedAt: Date
}

// Cart item interface
export interface CartItem {
  id: string
  cartId: string
  courseId: string
  course: Course
}

// Wishlist interface
export interface Wishlist {
  id: string
  userId: string
  items: WishlistItem[]
  createdAt: Date
  updatedAt: Date
}

// Wishlist item interface
export interface WishlistItem {
  id: string
  wishlistId: string
  courseId: string
  course: Course
}

// Order interface
export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  total: number
  status: "pending" | "completed" | "failed" | "refunded"
  paymentMethod: "card" | "paypal" | "bank"
  createdAt: Date
  updatedAt: Date
}

// Order item interface
export interface OrderItem {
  id: string
  orderId: string
  courseId: string
  price: number
  course: Course
}

// Note interface
export interface Note {
  id: string
  userId: string
  lectureId: string
  content: string
  timestamp: number // in seconds
  createdAt: Date
  updatedAt: Date
}

// Bookmark interface
export interface Bookmark {
  id: string
  userId: string
  lectureId: string
  timestamp: number // in seconds
  title: string
  createdAt: Date
}

// Question interface
export interface Question {
  id: string
  userId: string
  courseId: string
  lectureId?: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  answers: Answer[]
  user: User
}

// Answer interface
export interface Answer {
  id: string
  userId: string
  questionId: string
  content: string
  createdAt: Date
  updatedAt: Date
  isAccepted: boolean
  user: User
}

// Announcement interface
export interface Announcement {
  id: string
  instructorId: string
  courseId: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  instructor: User
}

// Theme interface
export interface Theme {
  id: string
  name: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  backgroundColor: string
  textColor: string
  isDark: boolean
}

// Dummy users
export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "student",
    avatar: "/placeholder.svg?height=100&width=100",
    createdAt: new Date("2023-01-01"),
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "instructor",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Experienced web developer with 10+ years of experience",
    createdAt: new Date("2023-01-02"),
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    avatar: "/placeholder.svg?height=100&width=100",
    createdAt: new Date("2023-01-03"),
  },
  {
    id: "4",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "instructor",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Data scientist and machine learning expert",
    createdAt: new Date("2023-01-04"),
  },
  {
    id: "5",
    name: "Michael Brown",
    email: "michael@example.com",
    role: "instructor",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Full-stack developer and DevOps specialist",
    createdAt: new Date("2023-01-05"),
  },
]

// Dummy categories
export const categories: Category[] = [
  {
    id: "1",
    name: "Web Development",
    slug: "web-development",
    description: "Learn web development with HTML, CSS, JavaScript, and more",
    icon: "Code",
  },
  {
    id: "2",
    name: "Data Science",
    slug: "data-science",
    description: "Master data science, machine learning, and AI",
    icon: "BarChart",
  },
  {
    id: "3",
    name: "Business",
    slug: "business",
    description: "Develop business skills for entrepreneurs and managers",
    icon: "Briefcase",
  },
  {
    id: "4",
    name: "Design",
    slug: "design",
    description: "Learn graphic design, UI/UX, and digital art",
    icon: "Palette",
  },
  {
    id: "5",
    name: "Marketing",
    slug: "marketing",
    description: "Master digital marketing, SEO, and social media",
    icon: "TrendingUp",
  },
  {
    id: "6",
    name: "Photography",
    slug: "photography",
    description: "Learn photography, editing, and visual storytelling",
    icon: "Camera",
  },
  {
    id: "7",
    name: "Music",
    slug: "music",
    description: "Learn music theory, instruments, and production",
    icon: "Music",
  },
  {
    id: "8",
    name: "Health & Fitness",
    slug: "health-fitness",
    description: "Improve your health, fitness, and wellbeing",
    icon: "Heart",
  },
]

// Dummy courses
export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    slug: 'complete-web-development-bootcamp',
    description: `
      <p>This comprehensive web development bootcamp covers everything you need to know to become a full-stack web developer. From HTML and CSS to JavaScript, React, Node.js, and more, you'll learn all the essential skills to build modern web applications.</p>
      
      <h3>What you'll learn</h3>
      <ul>
        <li>HTML5, CSS3, and modern JavaScript (ES6+)</li>
        <li>React.js for building interactive user interfaces</li>
        <li>Node.js and Express for backend development</li>
        <li>MongoDB for database management</li>
        <li>RESTful API design and implementation</li>
        <li>Authentication and authorization</li>
        <li>Deployment and hosting</li>
      </ul>
      
      <h3>Course requirements</h3>
      <ul>
        <li>No prior programming experience needed</li>
        <li>Basic computer skills</li>
        <li>A computer with internet access</li>
      </ul>
      
      <h3>Who this course is for</h3>
      <ul>
        <li>Beginners with no coding experience</li>
        <li>Designers who want to learn to code</li>
        <li>Entrepreneurs who want to build their own websites</li>
        <li>Anyone interested in becoming a web developer</li>
      </ul>
    `,
    shortDescription: 'Learn web development from scratch and build modern web applications',
    price: 99.99,
    discountPrice: 84.99,
    thumbnail: '/placeholder.svg?height=400&width=600',
    instructorId: '2',
    instructor: users[1],
    category: categories[0],
    level: 'beginner',
    language: 'English',
    duration: 4200, // 70 hours
    lectures: 150,
    rating: 4.8,
    ratingCount: 1250,
    students: 15000,
    createdAt: new Date('2023-02-01'),
    updatedAt: new Date('2023-06-15'),
    sections: [
      {
        id: '1-1',
        title: 'Introduction to Web Development',
        order: 1,
        courseId: '1',
        lectures: [
          {
            id: '1-1-1',
            title: 'Welcome to the Course',
            description: 'An introduction to the course and what you will learn',
            order: 1,
            sectionId: '1-1',
            videoUrl: 'https://example.com/videos/welcome',
            duration: 10,
            isFree: true,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/welcome',
          },
          {
            id: '1-1-2',
            title: 'Setting Up Your Development Environment',
            description: 'Installing the necessary tools and software',
            order: 2,
            sectionId: '1-1',
            videoUrl: 'https://example.com/videos/setup',
            duration: 15,
            isFree: true,
            resources: [
              {
                id: '1-1-2-1',
                title: 'Setup Guide PDF',
                type: 'pdf',
                url: 'https://example.com/resources/setup-guide.pdf',
                lectureId: '1-1-2',
              },
            ],
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/setup',
          },
        ],
      },
      {
        id: '1-2',
        title: 'HTML Fundamentals',
        order: 2,
        courseId: '1',
        lectures: [
          {
            id: '1-2-1',
            title: 'HTML Document Structure',
            description: 'Understanding the basic structure of HTML documents',
            order: 1,
            sectionId: '1-2',
            videoUrl: 'https://example.com/videos/html-structure',
            duration: 20,
            isFree: false,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/html-structure',
          },
          {
            id: '1-2-2',
            title: 'HTML Elements and Attributes',
            description: 'Learning about HTML elements and their attributes',
            order: 2,
            sectionId: '1-2',
            videoUrl: 'https://example.com/videos/html-elements',
            duration: 25,
            isFree: false,
            resources: [
              {
                id: '1-2-2-1',
                title: 'HTML Cheat Sheet',
                type: 'pdf',
                url: 'https://example.com/resources/html-cheatsheet.pdf',
                lectureId: '1-2-2',
              },
            ],
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/html-elements',
          },
        ],
      },
      {
        id: '1-3',
        title: 'CSS Styling',
        order: 3,
        courseId: '1',
        lectures: [
          {
            id: '1-3-1',
            title: 'CSS Selectors',
            description: 'Understanding CSS selectors and how to use them',
            order: 1,
            sectionId: '1-3',
            videoUrl: 'https://example.com/videos/css-selectors',
            duration: 30,
            isFree: false,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/css-selectors',
          },
          {
            id: '1-3-2',
            title: 'CSS Box Model',
            description: 'Learning about the CSS box model',
            order: 2,
            sectionId: '1-3',
            videoUrl: 'https://example.com/videos/css-box-model',
            duration: 25,
            isFree: false,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/css-box-model',
          },
        ],
      },
    ],
    tags: ['web development', 'html', 'css', 'javascript', 'react', 'node.js'],
    featured: true,
    status: 'published',
  },
  {
    id: '2',
    title: 'Machine Learning A-Z: Hands-On Python & R',
    slug: 'machine-learning-a-z',
    description: `
      <p>Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.</p>
      
      <h3>What you'll learn</h3>
      <ul>
        <li>Master Machine Learning on Python & R</li>
        <li>Make accurate predictions with regression algorithms</li>
        <li>Create powerful analysis using clustering</li>
        <li>Implement Machine Learning on Business Cases</li>
        <li>Learn to use Deep Learning with TensorFlow</li>
      </ul>
      
      <h3>Course requirements</h3>
      <ul>
        <li>Basic mathematical knowledge</li>
        <li>A computer with internet access</li>
        <li>No prior programming experience needed</li>
      </ul>
      
      <h3>Who this course is for</h3>
      <ul>
        <li>Anyone interested in Machine Learning</li>
        <li>Students who want to level up their career</li>
        <li>Data analysts who want to become data scientists</li>
      </ul>
    `,
    shortDescription: 'Learn to create Machine Learning Algorithms in Python and R',
    price: 129.99,
    discountPrice: 94.99,
    thumbnail: '/placeholder.svg?height=400&width=600',
    instructorId: '4',
    instructor: users[3],
    category: categories[1],
    level: 'intermediate',
    language: 'English',
    duration: 2520, // 42 hours
    lectures: 100,
    rating: 4.7,
    ratingCount: 980,
    students: 12000,
    createdAt: new Date('2023-03-01'),
    updatedAt: new Date('2023-07-10'),
    sections: [
      {
        id: '2-1',
        title: 'Introduction to Machine Learning',
        order: 1,
        courseId: '2',
        lectures: [
          {
            id: '2-1-1',
            title: 'Welcome to the Course',
            description: 'An introduction to the course and what you will learn',
            order: 1,
            sectionId: '2-1',
            videoUrl: 'https://example.com/videos/ml-welcome',
            duration: 10,
            isFree: true,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/ml-welcome',
          },
          {
            id: '2-1-2',
            title: 'What is Machine Learning?',
            description: 'Understanding the basics of machine learning',
            order: 2,
            sectionId: '2-1',
            videoUrl: 'https://example.com/videos/what-is-ml',
            duration: 15,
            isFree: true,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/what-is-ml',
          },
        ],
      },
      {
        id: '2-2',
        title: 'Data Preprocessing',
        order: 2,
        courseId: '2',
        lectures: [
          {
            id: '2-2-1',
            title: 'Importing Libraries',
            description: 'Learning about the essential libraries for machine learning',
            order: 1,
            sectionId: '2-2',
            videoUrl: 'https://example.com/videos/importing-libraries',
            duration: 20,
            isFree: false,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/importing-libraries',
          },
          {
            id: '2-2-2',
            title: 'Handling Missing Data',
            description: 'Techniques for handling missing data in datasets',
            order: 2,
            sectionId: '2-2',
            videoUrl: 'https://example.com/videos/missing-data',
            duration: 25,
            isFree: false,
            resources: [
              {
                id: '2-2-2-1',
                title: 'Data Preprocessing Cheat Sheet',
                type: 'pdf',
                url: 'https://example.com/resources/preprocessing-cheatsheet.pdf',
                lectureId: '2-2-2',
              },
            ],
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/missing-data',
          },
        ],
      },
    ],
    tags: ['machine learning', 'python', 'r', 'data science', 'artificial intelligence'],
    featured: true,
    status: 'published',
  },
  {
    id: '3',
    title: 'The Complete Digital Marketing Course',
    slug: 'complete-digital-marketing-course',
    description: `
      <p>Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!</p>
      
      <h3>What you'll learn</h3>
      <ul>
        <li>Grow a business online from scratch</li>
        <li>Make money as an affiliate marketer</li>
        <li>Land a high-paying job in digital marketing</li>
        <li>Master SEO, social media, and content marketing</li>
        <li>Create effective Facebook and Google ads</li>
      </ul>
      
      <h3>Course requirements</h3>
      <ul>
        <li>No prior knowledge required</li>
        <li>A computer with internet access</li>
        <li>A desire to learn digital marketing</li>
      </ul>
      
      <h3>Who this course is for</h3>
      <ul>
        <li>Entrepreneurs and business owners</li>
        <li>Anyone wanting to make money with affiliate marketing</li>
        <li>Students looking for a career in digital marketing</li>
      </ul>
    `,
    shortDescription: 'Master Digital Marketing Strategy, Social Media Marketing, SEO, and more',
    price: 149.99,
    discountPrice: 89.99,
    thumbnail: '/placeholder.svg?height=400&width=600',
    instructorId: '5',
    instructor: users[4],
    category: categories[4],
    level: 'beginner',
    language: 'English',
    duration: 1800, // 30 hours
    lectures: 80,
    rating: 4.6,
    ratingCount: 850,
    students: 9000,
    createdAt: new Date('2023-04-01'),
    updatedAt: new Date('2023-08-05'),
    sections: [
      {
        id: '3-1',
        title: 'Introduction to Digital Marketing',
        order: 1,
        courseId: '3',
        lectures: [
          {
            id: '3-1-1',
            title: 'Welcome to the Course',
            description: 'An introduction to the course and what you will learn',
            order: 1,
            sectionId: '3-1',
            videoUrl: 'https://example.com/videos/dm-welcome',
            duration: 10,
            isFree: true,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/dm-welcome',
          },
          {
            id: '3-1-2',
            title: 'The Digital Marketing Landscape',
            description: 'Understanding the current digital marketing landscape',
            order: 2,
            sectionId: '3-1',
            videoUrl: 'https://example.com/videos/dm-landscape',
            duration: 15,
            isFree: true,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/dm-landscape',
          },
        ],
      },
      {
        id: '3-2',
        title: 'Search Engine Optimization (SEO)',
        order: 2,
        courseId: '3',
        lectures: [
          {
            id: '3-2-1',
            title: 'SEO Fundamentals',
            description: 'Understanding the basics of SEO',
            order: 1,
            sectionId: '3-2',
            videoUrl: 'https://example.com/videos/seo-fundamentals',
            duration: 20,
            isFree: false,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/seo-fundamentals',
          },
          {
            id: '3-2-2',
            title: 'Keyword Research',
            description: 'Learning how to do effective keyword research',
            order: 2,
            sectionId: '3-2',
            videoUrl: 'https://example.com/videos/keyword-research',
            duration: 25,
            isFree: false,
            resources: [
              {
                id: '3-2-2-1',
                title: 'SEO Cheat Sheet',
                type: 'pdf',
                url: 'https://example.com/resources/seo-cheatsheet.pdf',
                lectureId: '3-2-2',
              },
            ],
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/keyword-research',
          },
        ],
      },
    ],
    tags: ['digital marketing', 'seo', 'social media', 'content marketing', 'email marketing'],
    featured: true,
    status: 'published',
  },
  {
    id: '4',
    title: 'UI/UX Design Masterclass',
    slug: 'ui-ux-design-masterclass',
    description: `
      <p>Learn UI/UX design from scratch. Create beautiful user interfaces and experiences for web and mobile applications.</p>
      
      <h3>What you'll learn</h3>
      <ul>
        <li>Design beautiful user interfaces for web and mobile</li>
        <li>Create wireframes and prototypes</li>
        <li>Conduct user research and usability testing</li>
        <li>Master Figma, Sketch, and Adobe XD</li>
        <li>Build a professional UI/UX portfolio</li>
      </ul>
      
      <h3>Course requirements</h3>
      <ul>
        <li>No prior design experience needed</li>
        <li>A computer with internet access</li>
        <li>A desire to learn design</li>
      </ul>
      
      <h3>Who this course is for</h3>
      <ul>
        <li>Beginners with no design experience</li>
        <li>Developers who want to learn design</li>
        <li>Graphic designers transitioning to UI/UX</li>
      </ul>
    `,
    shortDescription: 'Learn UI/UX design from scratch and create beautiful user interfaces',
    price: 119.99,
    discountPrice: 79.99,
    thumbnail: '/placeholder.svg?height=400&width=600',
    instructorId: '2',
    instructor: users[1],
    category: categories[3],
    level: 'beginner',
    language: 'English',
    duration: 1500, // 25 hours
    lectures: 70,
    rating: 4.9,
    ratingCount: 750,
    students: 8000,
    createdAt: new Date('2023-05-01'),
    updatedAt: new Date('2023-09-10'),
    sections: [
      {
        id: '4-1',
        title: 'Introduction to UI/UX Design',
        order: 1,
        courseId: '4',
        lectures: [
          {
            id: '4-1-1',
            title: 'Welcome to the Course',
            description: 'An introduction to the course and what you will learn',
            order: 1,
            sectionId: '4-1',
            videoUrl: 'https://example.com/videos/design-welcome',
            duration: 10,
            isFree: true,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/design-welcome',
          },
          {
            id: '4-1-2',
            title: 'What is UI/UX Design?',
            description: 'Understanding the difference between UI and UX design',
            order: 2,
            sectionId: '4-1',
            videoUrl: 'https://example.com/videos/what-is-ui-ux',
            duration: 15,
            isFree: true,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/what-is-ui-ux',
          },
        ],
      },
      {
        id: '4-2',
        title: 'Design Fundamentals',
        order: 2,
        courseId: '4',
        lectures: [
          {
            id: '4-2-1',
            title: 'Color Theory',
            description: 'Understanding color theory and how to use colors effectively',
            order: 1,
            sectionId: '4-2',
            videoUrl: 'https://example.com/videos/color-theory',
            duration: 20,
            isFree: false,
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/color-theory',
          },
          {
            id: '4-2-2',
            title: 'Typography',
            description: 'Learning about typography and how to choose fonts',
            order: 2,
            sectionId: '4-2',
            videoUrl: 'https://example.com/videos/typography',
            duration: 25,
            isFree: false,
            resources: [
              {
                id: '4-2-2-1',
                title: 'Typography Cheat Sheet',
                type: 'pdf',
                url: 'https://example.com/resources/typography-cheatsheet.pdf',
                lectureId: '4-2-2',
              },
            ],
            hasCaptions: true,
            captionsUrl: 'https://example.com/captions/typography',
          },
        ],
      },
    ],
    tags: ['ui design', 'ux design', 'figma', 'sketch', 'adobe xd', 'prototyping'],
    featured: true,
    status: 'published',
  },
  {
    id: '5',
    title: 'Photography Masterclass: A Complete Guide',
    slug: 'photography-masterclass',
    description: `
      <p>The Best Online Professional Photography Class: How to Take Amazing Photos for Beginners & Advanced Photographers</p>
      
      <h3>What you'll learn</h3>
      <ul>
        <li>Master your camera settings in manual mode</li>
        <li>Understand exposure, aperture, shutter speed, and ISO</li>
        <li>Compose stunning photographs</li>
        <li>Edit photos like a professional</li>
        <li>Start a photography business</li>
      </ul>
      
      <h3>
