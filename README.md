# Om Sai Tours and Travels

A BSc Computer Science project exploring a full-stack travel booking experience with a mobile client, REST API, MongoDB data models, and a lightweight admin interface.

> **Project status:** Academic prototype. Features, integrations, and deployment readiness must be verified before real-world use.

## Project modules

- **Mobile app:** Expo / React Native with TypeScript.
- **Backend:** Node.js, Express, MongoDB / Mongoose.
- **Admin panel:** HTML, CSS, and JavaScript.
- **Documentation:** API overview, setup guide, project report, architecture diagram, and test cases.
- **CSV templates:** starter sheets for packages, bookings, users, reviews, offers, and related records.

## Repository structure

```text
mobile/             Expo mobile application
backend/            Express API, models, seed data, tests
admin/              Admin interface
docs/               Setup, API, project report, test cases, architecture
excel-templates/    CSV starter templates for data import/export
```

## Prerequisites

- Node.js LTS and npm
- MongoDB local instance or MongoDB Atlas database
- Expo Go for device testing, or an Android emulator
- Git

## Configuration

Copy the example environment files and fill them with your own local values:

- `backend/.env.example` → `backend/.env`
- `mobile/.env.example` → `mobile/.env`

Never commit `.env` files, access tokens, database passwords, signing keys, or payment credentials.

## Run locally

### Backend

```bash
cd backend
npm install
```

Create `backend/.env` with a MongoDB connection string and any required application settings from `.env.example`, then run:

```bash
npm run seed
npm start
```

### Mobile app

In a separate terminal:

```bash
cd mobile
npm install
npx expo start
```

Use the QR code with Expo Go or launch an Android emulator. Confirm the API base URL in the mobile environment configuration matches your development machine and network.

### Admin interface

Open `admin/index.html` in a browser and configure the API endpoint using the provided admin configuration file. Use only with a trusted local or test backend.

> Exact scripts and environment variable names may vary; follow the checked-in example files and `docs/SETUP.md`.

## Documentation

- [Setup guide](docs/SETUP.md)
- [API overview](docs/API.md)
- [Project report](docs/PROJECT_REPORT.md)
- [Test cases](docs/TEST_CASES.md)
- [Architecture diagram](docs/architecture.mmd)

## Testing

From the backend directory:

```bash
npm install
npm test
```

The included tests are a starting point, not proof that all workflows are covered. Validate authentication, booking limits, input validation, authorization, payment states, cancellation behavior, and error handling before presenting the app as complete.

## Security and privacy checklist

- Keep secrets in environment variables and out of version control.
- Enforce authorization on the server for all admin actions.
- Validate all user-supplied data on the server, not only in the mobile UI.
- Do not store raw card details. Use a payment provider's test mode for demonstrations.
- Use synthetic demo data; never commit real customer records or personal information.
- Review dependency versions and run the project locally before deployment.

## Academic use

This repository is intended for learning, demonstration, and project review. Update the report with your own implementation details, screenshots, test results, and any known limitations. Do not claim integrations or tests that have not actually been completed.

## License

No license has been added yet. Add one only after confirming you have the right to publish all included code and assets.
