import type { ICountryMedals, ISortKey } from '../types/types';

interface IMedalTableProps {
    medals: ICountryMedals[];
    sortKey?: ISortKey;
}

export default function MedalTable({
    medals,
    sortKey,
}: IMedalTableProps) {


    return (
        <table>
            <thead></thead>
            <tbody></tbody>
        </table>
    );
}