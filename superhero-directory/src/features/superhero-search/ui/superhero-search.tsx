import { ChangeEvent, FormEvent } from 'react';

import { SearchInput } from '~shared/ui';

import { SuperheroesList } from './superheroes-list.tsx';

import { useSearch } from '../model/use-search.ts';

const SEARCH_SUPERHERO_QUERY_NAME = 'search-superhero';

export function SuperheroSearch() {
  const { setSearchValue, searchValue, delayedSearchValue } = useSearch(
    SEARCH_SUPERHERO_QUERY_NAME
  );

  const onSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchValue((prevValue) => prevValue.trim());
  };

  const isValueChanged = searchValue.trim() !== delayedSearchValue.trim();

  return (
    <>
      <form onSubmit={onSubmit} className="mb-6 grid w-full justify-center">
        <SearchInput
          name="search-superhero"
          placeholder="Find a superhero…"
          onChange={onSearchValueChange}
          value={searchValue}
        />
      </form>
      <SuperheroesList
        searchValue={delayedSearchValue}
        isValueChanged={isValueChanged}
      />
    </>
  );
}
