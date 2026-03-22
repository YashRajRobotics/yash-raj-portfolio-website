import { Navigate } from 'react-router-dom';
import { User, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const ADMIN_EMAIL = 'yash.raj.robotics@gmail.com';

export default function ProtectedRoute({ user, children }: { user: User | null, children: React.ReactNode }) {
  if (!user || user.email !== ADMIN_EMAIL) {
    if (user) {
      // Sign out unauthorized users if somehow they land here
      signOut(auth).catch(console.error);
    }
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}
