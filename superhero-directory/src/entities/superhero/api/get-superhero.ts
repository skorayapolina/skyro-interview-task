import { config } from '~shared/config';
import { fetcher } from '~shared/lib/api';
import { ResponseSuccess } from '~shared/response';

import { skipToken, useQuery } from '@tanstack/react-query';

import { superheroKeys } from './keys';

import { Superhero } from '../superhero';

export type Params = {
  id?: string;
};

export function useSuperhero(params: Params) {
  const { id } = params;

  return useQuery({
    queryKey: superheroKeys.superhero(id ?? ''),
    queryFn: id
      ? async () => {
          return fetcher<ResponseSuccess<Superhero>>(
            `${config.apiHost}/api/${config.apiToken}/${id}`
          );
        }
      : skipToken,
  });
}
