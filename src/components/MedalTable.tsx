'use client';

import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import type { ICountryMedals, ISortKey } from '../types/types';
import { sortMedals } from '@/lib/sort-medal-data';

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

    function handleSort(key: ISortKey) {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', key);
        router.push('/?' + params.toString());
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Country</th>
                    <th onClick={() => handleSort('gold')}>Gold</th>
                    <th onClick={() => handleSort('silver')}>Silver</th>
                    <th onClick={() => handleSort('bronze')}>Bronze</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {sorted.map((entry) => (
                    <tr key={entry.code}>
                        <td>{entry.code}</td>
                        <td>{entry.gold}</td>
                        <td>{entry.silver}</td>
                        <td>{entry.bronze}</td>
                        <td>{entry.gold + entry.silver + entry.bronze}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}