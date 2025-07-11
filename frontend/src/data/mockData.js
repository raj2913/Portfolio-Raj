export const mockData = {
  hero: {
    name: "Raj Vardhan",
    greeting: "Hey, I am",
    description: "I enjoy solving real-world problems using tech. Currently working on API integrations, debugging, and scalable fintech solutions at Razorpay. Skilled in Python, C++, Django, REST APIs, and ML. Passionate about building smart, reliable systems that make an impact.",
    tagline: "Always open to learning, collaborating, and growing in the tech space.",
    location: "Bangalore, India",
    email: "rajvardhan2913@gmail.com",
    github: "https://github.com/raj2913",
    linkedin: "https://www.linkedin.com/in/raj-vardhan-721ba8220/",
    profileImage: "https://github.com/raj2913.png"
  },
  
  about: {
    title: "About Me",
    description: "I enjoy solving real-world problems using tech. Currently working on API integrations, debugging, and scalable fintech solutions at Razorpay. Skilled in Python, C++, Django, REST APIs, and ML. Passionate about building smart, reliable systems that make an impact.",
    tagline: "Always open to learning, collaborating, and growing in the tech space.",
    highlights: [
      "B.Tech in Computer Science with Specialization in Bioinformatics from VIT",
      "Published research in AI-powered health management applications",
      "Experience with Python, JavaScript, Django, FastAPI, and modern web frameworks",
      "Skilled in API debugging, system integration, and technical problem-solving"
    ],
    stats: [
      { label: "Years of Experience", value: "2+" },
      { label: "Projects Completed", value: "10+" },
      { label: "Technologies Mastered", value: "15+" },
      { label: "Research Publications", value: "1" }
    ]
  },

  skills: {
    title: "Skills & Technologies",
    categories: [
      {
        name: "Programming Languages",
        skills: [
          { name: "Python", level: 95, icon: "🐍" },
          { name: "JavaScript", level: 88, icon: "🚀" },
          { name: "C/C++", level: 82, icon: "⚡" },
          { name: "HTML/CSS", level: 92, icon: "🎨" },
          { name: "SQL", level: 85, icon: "🗃️" }
        ]
      },
      {
        name: "Technical Skills",
        skills: [
          { name: "RESTful APIs", level: 95, icon: "🔗" },
          { name: "API Debugging", level: 92, icon: "🔍" },
          { name: "FastAPI", level: 88, icon: "⚡" },
          { name: "Django", level: 85, icon: "🎯" },
          { name: "React", level: 80, icon: "⚛️" }
        ]
      },
      {
        name: "Tools & Platforms",
        skills: [
          { name: "Git", level: 90, icon: "📝" },
          { name: "Docker", level: 75, icon: "🐳" },
          { name: "MySQL", level: 85, icon: "🗄️" },
          { name: "MongoDB", level: 80, icon: "🍃" },
          { name: "GCP", level: 70, icon: "☁️" }
        ]
      },
      {
        name: "Emerging Technologies",
        skills: [
          { name: "AI/Machine Learning", level: 85, icon: "🤖" },
          { name: "Computer Vision", level: 78, icon: "👁️" },
          { name: "Natural Language Processing", level: 75, icon: "💬" },
          { name: "Deep Learning", level: 72, icon: "🧠" }
        ]
      }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Multi-Label Emotion Detection from Text",
      description: "Implemented a multi-label classification model to predict emotions such as happiness, sadness, anger, and more from text data using advanced NLP techniques.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "BERT", "ALBERT", "RoBERTa", "Machine Learning", "NLP"],
      github: "https://github.com/raj2913/Emotion-Detection",
      demo: null,
      features: [
        "Utilized pre-trained models like BERT, ALBERT, and RoBERTa",
        "Fine-tuned models on custom dataset for improved accuracy",
        "Ensemble approach combining multiple model predictions",
        "Real-time emotion prediction from text input"
      ],
      stats: {
        stars: 15,
        forks: 8,
        language: "Python"
      }
    },
    {
      id: 2,
      title: "AI-Powered PCB Component Detection",
      description: "Machine learning application for value assessment of waste PCBs using computer vision and YOLOv11 architecture for recycling optimization.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "YOLOv11", "Computer Vision", "Flutter", "Deep Learning"],
      github: "https://github.com/raj2913/PCB-Detection",
      demo: null,
      features: [
        "98.2% detection precision achieved",
        "Real-time cross-platform interface using Flutter",
        "Advanced data augmentation and hyperparameter tuning",
        "Scalable backend for image processing and visualization"
      ],
      stats: {
        stars: 22,
        forks: 12,
        language: "Python"
      }
    },
    {
      id: 3,
      title: "Banking System Application",
      description: "Full-stack banking system built with Django and MySQL, featuring secure user authentication and comprehensive financial transaction management.",
      image: "/api/placeholder/400/250",
      technologies: ["Django", "Python", "MySQL", "REST API", "Authentication"],
      github: "https://github.com/raj2913/Banking_system",
      demo: null,
      features: [
        "Secure user authentication with login/registration",
        "Django REST framework for API development",
        "MySQL database for reliable data storage",
        "Industry-standard web development practices"
      ],
      stats: {
        stars: 18,
        forks: 10,
        language: "Python"
      }
    },
    {
      id: 4,
      title: "Healthsyncc - AI Health Management",
      description: "Published research project: AI-powered mobile application for comprehensive health management using computer vision and robotic process automation.",
      image: "/api/placeholder/400/250",
      technologies: ["AI", "Computer Vision", "Mobile Development", "Healthcare", "Automation"],
      github: null,
      demo: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003481959-11",
      features: [
        "Secure medical record digitization",
        "Personalized wellness insights using AI",
        "Automated healthcare workflow management",
        "Published in CRC Press (Taylor & Francis Group)"
      ],
      stats: {
        stars: 0,
        forks: 0,
        language: "Research"
      }
    }
  ],

  resume: {
    title: "Resume",
    downloadUrl: "/resume/raj-vardhan-resume.pdf",
    sections: [
      {
        title: "Experience",
        items: [
          {
            position: "Associate Technical Consultant",
            company: "Razorpay",
            duration: "June 2025 - Present",
            location: "Bangalore, India",
            responsibilities: [
              "Resolve L2/L3 technical issues involving REST APIs, webhooks, payment gateway SDKs, and UPI integrations",
              "Debug real-time errors using developer tools, Postman, cURL, and log analysis",
              "Collaborate with product and engineering teams via Jira to escalate and resolve system bugs",
              "Support high-volume data issues including payload structure mismatches and rate-limit errors"
            ]
          },
          {
            position: "Python Intern",
            company: "The NineHertz",
            duration: "2024 - July 2024",
            location: "Jaipur, India",
            responsibilities: [
              "Developed web applications using Django and Flask frameworks",
              "Integrated RESTful APIs to enhance functionality and streamline data exchange",
              "Collaborated with cross-functional teams using Agile and CI/CD practices"
            ]
          }
        ]
      },
      {
        title: "Education",
        items: [
          {
            degree: "B.Tech Computer Science (Bioinformatics)",
            institution: "Vellore Institute of Technology",
            duration: "2021 - 2025",
            location: "Vellore, India",
            gpa: "CGPA: 8.81"
          },
          {
            degree: "12th (Science)",
            institution: "Shri Ram Centennial School",
            duration: "2019 - 2021",
            location: "Indore, India",
            gpa: "Percentage: 87.8%"
          },
          {
            degree: "10th (CBSE)",
            institution: "Advanced Academy India",
            duration: "2019",
            location: "Indore, India",
            gpa: "Percentage: 91.2%"
          }
        ]
      },
      {
        title: "Certifications",
        items: [
          {
            name: "Google Cloud Foundation",
            issuer: "Google Cloud",
            date: "2024"
          },
          {
            name: "Google Cloud Leader",
            issuer: "Google Cloud",
            date: "2024"
          }
        ]
      }
    ]
  },

  contact: {
    title: "Get In Touch",
    subtitle: "Let's build something amazing together",
    email: "rajvardhan2913@gmail.com",
    phone: "+91-XXXXXXXXXX",
    location: "Bangalore, India",
    social: {
      github: "https://github.com/raj2913",
      linkedin: "https://www.linkedin.com/in/raj-vardhan-721ba8220/",
      twitter: "#",
      email: "rajvardhan2913@gmail.com"
    },
    availability: "Available for freelance work and full-time opportunities"
  }
};