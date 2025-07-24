import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDelayedValue } from '~shared/lib/hooks';

export const useSearch = (queryParamName: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    () => searchParams.get(queryParamName) ?? ''
  );

  const delayedSearchValue = useDelayedValue(searchValue);

  useEffect(() => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams.toString());
      const newValue = searchValue.trim();

      if (newValue) {
        newSearchParams.set(queryParamName, newValue);
      } else {
        newSearchParams.delete(queryParamName);
      }

      return newSearchParams;
    });
  }, [queryParamName, searchValue, setSearchParams]);

  return {
    searchValue,
    delayedSearchValue,
    setSearchValue,
  };
};
