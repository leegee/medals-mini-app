import { ICountryMedals, ISortKey } from '@/types/types';
import { getMedalData } from '@/lib/get-medal-data';
import MedalTable from '@/components/MedalTable';

// Brief says load the data only once: this forces caching of all fetches
export const dynamic = 'force-static';

type IMedalPageProps = {
  searchParams: Promise<{ sort?: ISortKey }>;
};

export default async function MedalPage({ searchParams }: IMedalPageProps) {
  const params = await searchParams;
  const sortKey = params?.sort ?? 'gold';

  const medals: ICountryMedals[] = await getMedalData();

  return (
    <>
      <h1>Medal Count</h1>
      <MedalTable medals={medals} sortKey={sortKey} />
    </>
  );
}
