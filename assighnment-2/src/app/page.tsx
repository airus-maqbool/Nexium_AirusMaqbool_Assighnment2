import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to the assignment-2 page
  redirect('/assighnment-2');
  
  // This won't render since we're redirecting
  return null;
}