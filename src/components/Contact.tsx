
import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import AnimatedText from './AnimatedText';
import Card from './Card';
import { useToast } from '@/hooks/use-toast';
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
  to_name: "Devin",
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
};

  try {
    await emailjs.send(
      "service_er29h67",      // 🔹 Your EmailJS Service ID
      "template_tmq4ke1",     // 🔹 Your Template ID
      templateParams,
      "nsH9Ql5hlWt3g9lMv"      // 🔹 Your Public Key
    );

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out — I'll reply soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.error("EmailJS Error:", error);
    toast({
      title: "Error",
      description: "Failed to send the message. Try again later.",
    });
  }

  setIsSubmitting(false);
};


  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'devinpatel9492@gmail.com',
      href: 'mailto:contact@example.com',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+91 9408497233',
      href: 'tel:+91 9408497233',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Gandhinagar , GUJ',
      href: 'https://maps.app.goo.gl/tA1LR6PK9y5NxvL49',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedText animation="fade-in-up">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work <span className="text-gradient-pink">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out.
              I'm always open to discussing new opportunities.
            </p>
          </div>
        </AnimatedText>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <Card className="lg:col-span-2 animate-fade-in-up" isGlass={true}>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 transition-colors hover:text-primary"
                >
                  <div className="mt-0.5 h-9 w-9 rounded-full glass flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t">
  <h4 className="font-medium mb-4">Connect with me</h4>

  <div className="flex space-x-4">
    {[
      { name: "github", url: "https://github.com/devinpatel26" }
    ].map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <span className="sr-only">{social.name}</span>

        <img
          src={`https://simpleicons.org/icons/${social.name}.svg`}
          alt={social.name}
          className="h-5 w-5 opacity-75"
        />
      </a>
    ))}
  </div>
</div>

          </Card>
          
          <Card className="lg:col-span-3 animate-fade-in-up delay-100" isGlass={true}>
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg glass border border-border focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg glass border border-border focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg glass border border-border focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 rounded-lg glass border border-border focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue to-purple text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Send Message</span>
                {isSubmitting ? (
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
