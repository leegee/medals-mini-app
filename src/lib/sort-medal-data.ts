import { ICountryMedals, ISortKey } from "@/types/types";

export function sortMedals(a: ICountryMedals, b: ICountryMedals, sortKey: ISortKey) {
    const aTotal = a.gold + a.silver + a.bronze;
    const bTotal = b.gold + b.silver + b.bronze;

    switch (sortKey) {
        case 'total':
            return bTotal - aTotal;
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
