'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import type { ICountryMedals, ISortKey } from '../types/types';
import { useMemo } from 'react';

interface IMedalTableProps {
    medals: ICountryMedals[];
    sortKey?: ISortKey;
}

export default function MedalTable({
    medals: initialMedals,
    sortKey: initialSortKey,
}: IMedalTableProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const sortKey = (searchParams.get('sort') as ISortKey) || initialSortKey;

    const sorted = useMemo(() => {
        return [...initialMedals].sort((a, b) => sortMedals(a, b, sortKey));
    }, [initialMedals, sortKey]);

    function sortMedals(a: ICountryMedals, b: ICountryMedals, sortKey: ISortKey) {
        switch (sortKey) {
            case 'gold':
                return b.gold - a.gold;
            case 'silver':
                return b.silver - a.silver;
            case 'bronze':
                return b.bronze - a.bronze;
            default:
                return 0;
        }
    }

    function handleSort(key: ISortKey) {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', key);
        router.push('/?' + params.toString());
    }

    return (
        <>
            <p>Sort by {sortKey}</p>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th onClick={() => handleSort('gold')}>Gold</th>
                        <th onClick={() => handleSort('silver')}>Silver</th>
                        <th onClick={() => handleSort('bronze')}>Bronze</th>
                    </tr>
                </thead>
                <tbody>
                    {sorted.map((entry) => (
                        <tr key={entry.code}>
                            <td>{entry.code}</td>
                            <td>{entry.gold}</td>
                            <td>{entry.silver}</td>
                            <td>{entry.bronze}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}