import Header from '~/components/Header/Header';
import Map from '~/components/Map/Map';
import type { Route } from './+types/home';
import InfoCard from '~/components/InfoCard/InfoCard';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Header />

      <div className="absolute left-1/2 top-60 -translate-x-1/2 z-20">
        <InfoCard />
      </div>

      <Map />
    </main>
  );
}
