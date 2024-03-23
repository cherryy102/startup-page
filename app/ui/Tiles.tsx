'use client';

import { useState } from 'react';
import Tile from './TIle';
import SearchInput from './SearchInput';
import TileWrapper from './TileWrapper';
import { Category } from '../lib/types';
import { useCategoriesWithItemsFilter } from '../hooks/useFilter';

export default function Tiles({ categories }: { categories: Category[] }) {
  const [searchValue, setSearchValue] = useState('');
  const { filteredCategories } = useCategoriesWithItemsFilter(
    categories,
    searchValue
  );

  return (
    <div>
      <div className='pb-3'>
        <SearchInput value={searchValue} setValue={setSearchValue} />
      </div>
      {filteredCategories.map((category) => {
        return (
          <TileWrapper title={category.name} key={category.id}>
            {category.items.map((item) => (
              <Tile
                key={item.id}
                name={item.name}
                url={item.url}
                description={item.description}
              />
            ))}
          </TileWrapper>
        );
      })}
    </div>
  );
}
