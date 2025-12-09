
import { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import Card from './Card';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.reveal');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('active');
              }, 200 * index);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedText animation="fade-in-up">
            <div className="text-center mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">About Me</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Passionate about creating <br />
                <span className="text-gradient">innovative digital experiences</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I combine technical expertise with an eye for design to build
                beautiful, functional applications that solve real problems.
              </p>
            </div>
          </AnimatedText>

          <div 
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="reveal">
              <Card className="h-full flex flex-col items-center text-center p-8">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center mb-6 text-blue">
                  <Code size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Development</h3>
                <p className="text-muted-foreground">
                  I craft clean, efficient code to build robust applications
                  that meet modern standards and deliver exceptional user experiences.
                </p>
              </Card>
            </div>

            <div className="reveal">
              <Card className="h-full flex flex-col items-center text-center p-8">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center mb-6 text-purple">
                  <Palette size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Design</h3>
                <p className="text-muted-foreground">
                  I blend aesthetics with functionality to create intuitive interfaces
                  that are both beautiful and easy to use.
                </p>
              </Card>
            </div>

            <div className="reveal">
              <Card className="h-full flex flex-col items-center text-center p-8">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center mb-6 text-pink">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Performance</h3>
                <p className="text-muted-foreground">
                  I optimize for speed and efficiency, ensuring applications
                  perform flawlessly and provide a seamless user experience.
                </p>
              </Card>
            </div>
          </div>

          <AnimatedText 
            className="mt-16 text-center" 
            delay={300}
            animation="scale-in"
          >
            <a 
              href="#projects" 
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue to-purple text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              See My Projects
            </a>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default About;
