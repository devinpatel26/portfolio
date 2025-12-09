
import { useRef, useEffect } from 'react';
import AnimatedText from './AnimatedText';
import Card from './Card';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const Skills = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'JavaScript', level: 80, category: 'Frontend', color: '#F7DF1E' },
    { name: 'React', level: 75, category: 'Frontend', color: '#61DAFB' },
    { name: 'TypeScript', level: 80, category: 'Frontend', color: '#3178C6' },
    { name: 'Python', level: 90, category: 'Backend', color: '#3776AB' },
    { name: 'Node.js', level: 80, category: 'Backend', color: '#339933' },
    { name: 'CSS/SCSS', level: 85, category: 'Frontend', color: '#264DE4' },
    { name: 'GraphQL', level: 55, category: 'Backend', color: '#E535AB' },
    { name: 'UI/UX Design', level: 50, category: 'Design', color: '#FF61F6' },
    { name: 'Figma', level: 50, category: 'Design', color: '#F24E1E' },
    { name: 'Firebase', level: 60, category: 'Backend', color: '#FFCA28' },
    { name: 'AWS', level: 60, category: 'DevOps', color: '#FF9900' },
    { name: 'Docker', level: 75, category: 'DevOps', color: '#2496ED' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-progress');
            bars.forEach((bar, index) => {
              setTimeout(() => {
                if (bar instanceof HTMLElement) {
                  const width = bar.dataset.progress || '0';
                  bar.style.width = `${width}%`;
                  bar.style.opacity = '1';
                }
              }, 100 * index);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  // Group skills by category
  const groupedSkills: { [key: string]: Skill[] } = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as { [key: string]: Skill[] }
  );

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedText animation="fade-in-up">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
              My Skills
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
              across various technologies and domains.
            </p>
          </div>
        </AnimatedText>

        <div className="max-w-4xl mx-auto" ref={progressRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <Card key={category} className="h-full">
                <h3 className="text-xl font-bold mb-6">{category}</h3>
                <div className="space-y-6">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
                        <div
                          className="skill-progress h-full rounded-full opacity-0 transition-all duration-1000 ease-out-expo"
                          style={{ 
                            backgroundColor: skill.color,
                            width: '0%',
                          }}
                          data-progress={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
