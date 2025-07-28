import { ICountryMedals } from "@/types/types";
import { compareMedals } from "./sort-medal-data";

const winner: ICountryMedals = { gold: 3, silver: 2, bronze: 1, code: 'SWE' };
const second: ICountryMedals = { gold: 3, silver: 1, bronze: 1, code: 'NOR' };
const third: ICountryMedals = { gold: 2, silver: 4, bronze: 2, code: 'RUS' };

describe('sortMedals', () => {
    test('sort by total', () => {
        expect(compareMedals(winner, winner, 'total')).toBe(0);
        expect(compareMedals(winner, second, 'total')).toBeLessThan(0);
        expect(compareMedals(winner, third, 'total')).toBeGreaterThan(0);
    });

    test('sort by gold', () => {
        expect(compareMedals(winner, winner, 'gold')).toBe(0);
        expect(compareMedals(winner, second, 'gold')).toBeLessThan(0);
        expect(compareMedals(winner, third, 'gold')).toBeLessThan(0);
    });

    test('sort by silver', () => {
        expect(compareMedals(winner, winner, 'silver')).toBe(0);
        expect(compareMedals(winner, second, 'silver')).toBeLessThan(0);
        expect(compareMedals(winner, third, 'silver')).toBeGreaterThan(0);
    });

    test('sort by bronze', () => {
        expect(compareMedals(winner, winner, 'bronze')).toBe(0);
        expect(compareMedals(winner, second, 'bronze')).toBe(0);
        expect(compareMedals(winner, third, 'bronze')).toBeGreaterThan(0);
    });
});
