import { SignIn } from '@clerk/nextjs';
import { LogIn } from 'lucide-react';

export default function SignInPage() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      {/* <LogIn className='h-4 w-4' /> Konekte */}
      <SignIn />
    </div>
  );
}
