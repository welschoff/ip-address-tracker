import Header from '~/components/Header/Header';
import Map from '~/components/Map/Map';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Map />
    </>
  );
}
