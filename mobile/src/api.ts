const BASE = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:4000/api';

export async function api(path: string, options: any = {}, token?: string) {
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    }
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
  return data;
}

export const money = (n: number) => `₹${Number(n || 0).toLocaleString('en-IN')}`;
export const CONTACT = {
  phone: '+919823058679',
  email: 'omsaitoursandtravels01@gmail.com',
  address: 'Shop No 14, Near Bajrang Hotel, Kanjurmarg East, Mumbai 400042',
  hours: '7:00 AM - 11:00 PM IST'
};