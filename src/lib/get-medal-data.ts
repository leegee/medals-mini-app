import medals from '../../public/medals.json';

export function getMedalData() {
    // API call for medal data would go here
    return Promise.resolve(medals);
}