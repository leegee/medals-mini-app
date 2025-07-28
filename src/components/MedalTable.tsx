'use client';

import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import type { ICountryMedals, ISortKey } from '../types/types';
import { sortMedals } from '@/lib/sort-medal-data';
import Flag from '../components/Flag';
import styles from './MedalTable.module.scss';

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
        <table className={styles['medal-table']}>
            <thead>
                <tr>
                    <th colSpan={2} />
                    <th className={sortKey === 'gold' ? styles.selected : ''}>
                        <button className={styles.gold + ' ' + styles.disc} onClick={() => handleSort('gold')} />
                    </th>
                    <th className={sortKey === 'silver' ? styles.selected : ''}>
                        <button className={styles.silver + ' ' + styles.disc} onClick={() => handleSort('silver')} />
                    </th>
                    <th className={sortKey === 'bronze' ? styles.selected : ''}>
                        <button className={styles.bronze + ' ' + styles.disc} onClick={() => handleSort('bronze')} />
                    </th>
                    <th className={sortKey === 'total' ? styles.selected : ''}>
                        <button className={styles.total} onClick={() => handleSort('total')}>TOTAL</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {sorted.map((entry, index) => (
                    <tr key={entry.code}>
                        <td>
                            {index + 1}
                        </td>
                        <td className={styles.code}>
                            <Flag code={entry.code} />
                            {entry.code}
                        </td>
                        <td>
                            {entry.gold}
                        </td>
                        <td>
                            {entry.silver}
                        </td>
                        <td>
                            {entry.bronze}
                        </td>
                        <td className={styles.total}>
                            {entry.gold + entry.silver + entry.bronze}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table >
    );
}