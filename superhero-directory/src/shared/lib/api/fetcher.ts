import { ResponseError } from '~shared/response.ts';

type FetchOptions = RequestInit;

export async function fetcher<T>(url: string, options?: FetchOptions): Promise<T> {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    ...options,
  }).then(async (res) => {
    if (!res.ok) {
      const error: ResponseError = await res.json();

      throw new Error(
        `Error ${res.status}: ${res.statusText} - ${error.error}`
      );
    }

    return res.json();
  });
}
