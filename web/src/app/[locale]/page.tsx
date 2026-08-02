import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

// Root route for the locale segment. The old proxy.ts middleware used to
// send '/' to '/dashboard' or '/sign-in' depending on auth state; now that
// redirect is done here, in a plain Server Component (no middleware needed).
export default async function RootPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

redirect(user ? '/dashboard' : '/sign-in');
}
