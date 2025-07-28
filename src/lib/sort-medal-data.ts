import { ICountryMedals, ISortKey } from "@/types/types";

export function sortMedals(a: ICountryMedals, b: ICountryMedals, sortKey: ISortKey) {
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
