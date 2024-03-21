import fetch from 'node-fetch';
import mcache from 'memory-cache';

const durationSeconds = 300; // 5 min

export async function getCountries() {
    const cacheKey = 'req-countries';
    const cachedResponse = mcache.get(cacheKey);
    if (cachedResponse) {
        console.log('----- load from cache');
        return cachedResponse;
    }

    console.log('----- load from fetch');
    const data = await fetch('https://restcountries.com/v3.1/all').then((r) => r.json());
    mcache.put(cacheKey, data, durationSeconds * 1000);
    return data;
}
