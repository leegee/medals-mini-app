'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import type { ICountryMedals, ISortKey } from '../types/types';

interface IMedalTableProps {
    medals: ICountryMedals[];
    sortKey?: ISortKey;
}

export default function MedalTable({
    medals,
    sortKey: initialSortKey,
}: IMedalTableProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const sortKey = (searchParams.get('sort') as ISortKey) || initialSortKey;

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
                        <th onClick={() => handleSort('gold')} >Country</th>
                        <th onClick={() => handleSort('gold')} >Gold</th>
                        <th onClick={() => handleSort('gold')} >Silver</th>
                        <th onClick={() => handleSort('gold')} >Bronze</th>
                    </tr>
                </thead>
                <tbody>
                    {medals.map((entry) => (
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