import { useEffect, useState } from 'react';
import { Category } from '../lib/types';

export function useCategoriesWithItemsFilter(
  categories: Category[],
  filter: string
) {
  const [filteredCategories, setFilteredCategories] = useState(categories);

  function filterCategories() {
    const lowerCaseFilter = filter.toLowerCase().trim();
    return categories.filter(
      (x) =>
        x.name.toLowerCase().includes(lowerCaseFilter) ||
        x.items.some(
          (y) =>
            y.name.toLowerCase().includes(lowerCaseFilter) ||
            y.description.toLowerCase().includes(lowerCaseFilter)
        )
    );
  }

  useEffect(() => {
    setFilteredCategories(filterCategories());
  }, [filter]);

  return { filteredCategories };
}
