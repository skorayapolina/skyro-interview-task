import { config } from '~shared/config';
import { fetcher } from '~shared/lib/api';
import { ResponseError, ResponseSuccess } from '~shared/response';

import { skipToken, useQuery } from '@tanstack/react-query';

import { superheroKeys } from './keys';

import { Superhero } from '../superhero';

type ResponsePayload =
  | {
      response: 'success';
      'results-for': string;
      results: Superhero[];
    }
  | {
      response: 'error';
      error: string;
    };

export type Params = {
  query: string;
};

export function useSearchSuperheroes(params: Params) {
  const { query } = params;

  return useQuery({
    queryKey: superheroKeys.search(query),
    queryFn: query
      ? async ({ signal }) => {
          return fetcher<ResponseSuccess<ResponsePayload> | ResponseError>(
            `${config.apiHost}/api/${config.apiToken}/search/${query}`,
            {
              signal,
            }
          );
        }
      : skipToken,
  });
}
