import MedalTable from '../components/MedalTable';

export default async function MedalPage() {
  return (
    <MedalTable medals={[]} sortKey='gold' />
  );
}
