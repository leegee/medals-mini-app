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
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Gold</th>
                    <th>Silver</th>
                    <th>Bronze</th>
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
    );
}