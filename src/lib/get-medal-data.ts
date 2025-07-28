import medals from '../../public/medals.json';

export function getMedalData() {
    return Promise.resolve(medals);
}

/*

TODO: Set an env var for both dev and prod to point to the medal.json / final API endpoint: I ran out of time.

export async function getMedalData() {
    // API call for medal data would go here
    console.log('Getting data');
    const res = await fetch('/medals.json');
    if (!res.ok) {
        throw new Error(`Failed to fetch medals: ${res.statusText}`);
    }
    return res.json();
}
*/