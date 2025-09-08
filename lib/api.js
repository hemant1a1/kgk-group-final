const BASE_URL = 'https://demo.kgkgroup.com/wp-json/custom/v1';

export async function fetchFromAPI(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    cache: 'no-store',
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${endpoint}`);
  }

  return res.json();
}
