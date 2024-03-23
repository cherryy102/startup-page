import { createClient } from '@/utils/supabase/server';
import { Category } from './types';

const supabase = createClient();

export async function fetchItems() {
  const categoriesWithItemsQuery = supabase
    .from('categories')
    .select('id, name, items(id, url, name, description)');
  const { data, error } = await categoriesWithItemsQuery;
  const categoriesWithItems: Category[] = data ?? [];
  return categoriesWithItems;
}
