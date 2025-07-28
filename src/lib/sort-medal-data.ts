import { ICountryMedals, ISortKey } from "@/types/types";

/**
 * 
 * Sort Ranking 
 * a. When ranking by total medals, ties are broken by most gold.  
 * b. When ranking by gold, ties are broken by most silver.  
 * c. When ranking by silver, ties are broken by most gold.  
 * d. When ranking by bronze, ties are broken by most gold.
 * 
 * In other words, the tie-breaker is always the gold count, 
 * unless sorting by gold, in which case it is the silver count.
 *
 * @param a 
 * @param b 
 * @param sortBy 
 * @returns 
 */
export function compareMedals(a: ICountryMedals, b: ICountryMedals, sortKey: ISortKey) {
    const aTotal = a.gold + a.silver + a.bronze;
    const bTotal = b.gold + b.silver + b.bronze;

    switch (sortKey) {
        case 'total':
            return (bTotal - aTotal) || (b.gold - a.gold);
        case 'gold':
            return (b.gold - a.gold) || (b.silver - a.silver);
        case 'silver':
            return (b.silver - a.silver) || (b.gold - a.gold);;
        case 'bronze':
            return (b.bronze - a.bronze) || (b.gold - a.gold);
        default:
            return 0;
    }
}
