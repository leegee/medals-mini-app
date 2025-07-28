import medals from '../../public/medals.json';

export function getMedalData() {
    // API call for medal data would go here
    console.log('Getting data');
    // TODO use a fetch request as per brief
    return Promise.resolve(medals);
}