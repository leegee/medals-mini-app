import { ICountryMedals } from "@/types/types";
import { compareMedals } from "./sort-medal-data";

const winner: ICountryMedals = { gold: 3, silver: 2, bronze: 1, code: 'SWE' };
const second: ICountryMedals = { gold: 3, silver: 1, bronze: 1, code: 'NOR' };
const third: ICountryMedals = { gold: 2, silver: 4, bronze: 2, code: 'RUS' };


describe('sortMedals', () => {
    test('sort by gold', () => {
        expect(compareMedals(winner, third, 'total')).toBeGreaterThan(0);
    });
});
