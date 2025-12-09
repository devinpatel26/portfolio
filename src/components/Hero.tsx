
import { ArrowDown } from 'lucide-react';
import AnimatedText from './AnimatedText';
import profilePhoto from '@/assets/profile_photo.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-background/90 to-background"></div>
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center text-center">
        {/* Profile Photo with Glowing Border */}
        <AnimatedText animation="scale-in" className="mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue via-purple to-cyan rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative p-1 rounded-full bg-gradient-to-r from-blue via-purple to-cyan">
              <img 
                src={profilePhoto} 
                alt="Profile" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background"
              />
            </div>
          </div>
        </AnimatedText>

        <div className="p-1 rounded-full bg-gradient-to-r from-blue to-purple mb-6">
          <div className="rounded-full p-2 glass-dark">
            <span className="text-xs font-medium uppercase tracking-wider">
              Welcome to my portfolio
            </span>
          </div>
        </div>

        <AnimatedText 
          className="mb-4" 
          animation="fade-in-down"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-4">
            Creative Developer
          </h1>
        </AnimatedText>

        <AnimatedText 
          className="mb-8" 
          delay={300} 
          animation="fade-in-up"
        >
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Crafting beautiful, intuitive experiences through code and design.
          </p>
        </AnimatedText>

        <AnimatedText 
          delay={600} 
          animation="scale-in"
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue to-blue-dark text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full glass hover:bg-white/20 font-medium transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </AnimatedText>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 animate-bounce rounded-full w-12 h-12 flex items-center justify-center glass"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
