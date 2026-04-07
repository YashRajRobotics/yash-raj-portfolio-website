import { Link, useLocation } from 'react-router-dom';
import { User, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar({ user }: { user: User | null }) {
  const location = useLocation();
  const scriptFontStyle = { fontFamily: "'Playwrite Ireland', cursive" };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FFFFFF]/80 backdrop-blur-md border-b border-[#D8CDEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 text-[#0C080A] hover:font-bold text-[#6255F1] transition-colors">
            <span className="font-black uppercase tracking-tighter text-lg sm:text-xl" style={scriptFontStyle}>YASH RAJ</span>
          </Link>
          
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a
                href="https://github.com/YashRajRobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-[#0C080A] hover:border-[#6255F1] hover:font-bold text-[#6255F1] transition-colors rounded-none"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-raj-rwth/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-[#0C080A] hover:border-[#6255F1] hover:font-bold text-[#6255F1] transition-colors rounded-none"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:mailyashofficially@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-[#0C080A] hover:border-[#6255F1] hover:font-bold text-[#6255F1] transition-colors rounded-none"
              >
                <Mail />
              </a>
            </div>
            {user && (
              <>
                <NavLink to="/admin" current={location.pathname}>ADMIN</NavLink>
                <button 
                  onClick={handleLogout}
                  className="text-xs tracking-widest text-[#0C080A] hover:text-red-400 transition-colors"
                >
                  LOGOUT
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, current }: { to: string, children: React.ReactNode, current: string }) {
  const isActive = current === to || (to !== '/' && current.startsWith(to));
  
  return (
    <Link 
      to={to} 
      className={`relative text-xs tracking-widest transition-colors ${
        isActive ? 'font-bold text-[#6255F1]' : 'text-[#0C080A] hover:text-[#0C080A]'
      }`}
    >
      {children}
      {isActive && (
        <motion.div 
          layoutId="nav-indicator"
          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#6255F1]"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
}
