import { SuperheroSearch } from 'features/superhero-search';

export function DashboardPage() {
  return (
    <>
      <h1 className="font-display mb-4 text-center text-4xl">
        Superhero Directory
      </h1>
      <p className="mb-6 text-center text-xl">
        Welcome to the Superhero Directory! Here you can find information about
        your favorite superheroes.
      </p>
      <SuperheroSearch />
    </>
  );
}
