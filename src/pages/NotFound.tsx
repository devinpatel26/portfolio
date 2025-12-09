
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative p-4">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-background/50 to-background"></div>
      </div>
      
      <div className="glass max-w-md w-full p-8 rounded-2xl relative z-10 animate-fade-in">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
          <p className="text-xl mb-6">Oops! Page not found</p>
          <p className="text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <a 
            href="/" 
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue to-purple text-white font-medium flex items-center justify-center space-x-2 mx-auto w-max shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
