# Setup & Configuration

## Backend and database
1. Install Node.js 20+ and MongoDB locally or create a MongoDB Atlas database.
2. Copy `backend/.env.example` to `backend/.env`.
3. Set `MONGODB_URI` to your database URI and `JWT_SECRET` to a unique random string (32+ characters recommended).
4. Set `SEED_ADMIN_EMAIL` and a strong `SEED_ADMIN_PASSWORD` (at least 12 characters). Never use example credentials outside local development.
5. From `backend/`, run `npm install`, `npm run seed`, then `npm run dev`.
6. Production deployment needs HTTPS, restricted CORS, least-privilege database credentials, backups, monitoring and rate limiting.

## Mobile app
1. Copy `mobile/.env.example` to `mobile/.env`.
2. Set `EXPO_PUBLIC_API_URL`. On a real phone, localhost refers to the phone; use your computer's LAN IP for local testing.
3. From `mobile/`, run `npm install`, then `npx expo start`.
4. For an APK, configure EAS Build and run `eas build -p android --profile preview`.

## Admin
Set `admin/config.js` API_BASE to the backend URL. Sign in using the administrator account created by the backend seed command.

## Payments
Online payments are intentionally not enabled. Before integrating a provider, create orders server-side, calculate amounts server-side, verify payment signatures and webhooks, implement idempotency, and test failure and tampering cases. Never trust a client success callback alone.

## Email and maps
SMTP and Maps are optional integrations. Store credentials only in local environment variables or a secrets manager; never commit them. Restrict Maps keys to the required app/API.

## Excel/CSV
The admin report endpoint exports bookings as CSV. Templates in `excel-templates/` provide sheet headings. Validate imports row-by-row and require administrator confirmation before applying changes.