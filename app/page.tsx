import Tiles from '@/app/ui/Tiles';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { fetchItems } from './lib/data';

export default async function Home() {
  const supabase = createClient();
  const categoriesWithItems = await fetchItems();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  if (!user) {
    console.log('test');
    // return redirect('/login');
  }

  return (
    <div className='lg:w-8/12 mx-auto p-5 md:w-full'>
      <Tiles categories={categoriesWithItems} />
    </div>
  );
}
