import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

const ADMIN_EMAIL = 'krish.chetan.shah@gmail.com';

export default function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    const provider = new GoogleAuthProvider();
    
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user.email !== ADMIN_EMAIL) {
        await signOut(auth);
        throw new Error('Unauthorized email address. Access denied.');
      }
      navigate('/admin');
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-[80vh] flex items-center justify-center"
    >
      <div className="w-full max-w-md p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="flex justify-center mb-8">
          <Terminal size={48} className="text-[#00FF00]" />
        </div>
        
        <h1 className="text-3xl font-black uppercase tracking-tighter text-center mb-2">
          System Access
        </h1>
        <p className="text-center font-mono text-sm text-white/50 mb-8">
          Authorized personnel only.
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 mb-6 font-mono text-xs">
            &gt; ERROR: {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-4 bg-[#00FF00] text-black font-mono font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 flex justify-center items-center space-x-2"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
          ) : (
            <span>Authenticate with Google</span>
          )}
        </button>
      </div>
    </motion.div>
  );
}
