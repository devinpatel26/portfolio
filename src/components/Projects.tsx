
import { useState, useEffect, useRef } from 'react';
import Card from './Card';
import AnimatedText from './AnimatedText';
import { ExternalLink, Github } from 'lucide-react';
import ecomerce from '@/assets/ecommerce.jpg';
import potfolio from '@/assets/potfolio.png';
import imagi_craft from '@/assets/imagi_craft.png';
import secure_store from '@/assets/secure_store.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  demoUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Secure-store',
      description: 'Secure Store is a web application that allows users to store and manage documents securely. It provides features for both regular documents and encrypted documents, ensuring the utmost privacy and protection for your sensitive data',
      image: secure_store,
      category: 'web',
      demoUrl: 'https://secure-store-master.vercel.app/auth/login',
      githubUrl: 'https://github.com/devinpatel26/secure-store-master',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A custom portfolio website showcasing creative work with smooth animations and interactions in 3D space.',
      image: potfolio,
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'This is the micro-ecommerce app use to sell specific products with all the functionality.',
      image: ecomerce,
      category: 'web',
      demoUrl: 'https://github.com/devinpatel26/micro-ecommerce',
      githubUrl: 'https://github.com/devinpatel26/micro-ecommerce',
    },
    {
      id: 6,
      title: 'Imagi-Craft - AI Image Generator',
      description: 'An AI-powered tool that generates unique images based on text descriptions using powerful machine learning models like DALL·E and Stable Diffusion.',
      image: imagi_craft,
      category: 'ai  web',
      demoUrl: 'https://imagicraft-devinpatel26s-projects.vercel.app/',
      githubUrl: 'https://github.com/devinpatel26/AI-image-Generation',
    },
  ];

  const categories = ['all', 'web', 'ai  web'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projects = entry.target.querySelectorAll('.project-card');
            projects.forEach((project, index) => {
              setTimeout(() => {
                project.classList.add('animate-scale-in');
                project.classList.remove('opacity-0');
              }, 100 * index);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, [selectedCategory]);

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedText animation="fade-in-up">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
              My Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient-pink">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of work that showcases my skills and experience in
              different domains of development.
            </p>
          </div>
        </AnimatedText>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'glass hover:bg-white/20'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card opacity-0 transition-all duration-300"
            >
              <Card className="overflow-hidden group h-full flex flex-col" hasShimmer={true}>
                <div className="relative overflow-hidden rounded-md mb-4 h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
