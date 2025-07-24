import { Link } from 'react-router-dom';

import { superheroApi } from '~entities/superhero';

export function SuperheroesList({
  searchValue,
  isValueChanged,
}: {
  searchValue: string;
  isValueChanged: boolean;
}) {
  const { data, isFetching, error } = superheroApi.useSearchSuperheroes({
    query: searchValue.trim(),
  });

  if (data?.response === 'success' && data?.results.length) {
    return (
      <ul
        className={`${isValueChanged ? 'opacity-60' : ''} transition-opacity`}
      >
        {data.results.map((superhero) => (
          <li key={superhero.id}>
            <Link to={superhero.id} className="underline">
              {superhero.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  if (data?.response === 'error') {
    return <p>No data</p>;
  }

  if (error) {
    return <p>Some error occurred.</p>;
  }

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return null;
}
