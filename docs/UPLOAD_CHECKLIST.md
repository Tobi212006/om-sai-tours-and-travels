# Upload and Release Checklist

This checklist tracks work needed before the repository can be described as a complete, runnable project.

## Source files

- [ ] Upload the original source archive contents into the repository root (extract the ZIP first; do not commit only the ZIP as the project).
- [ ] Confirm the `mobile/`, `backend/`, `admin/`, `docs/`, and `excel-templates/` directories exist.
- [ ] Keep `.env`, credentials, tokens, private keys, real customer data, and real payment details out of Git.
- [ ] Review all images, fonts, and third-party assets for permission to redistribute.

## Local verification

- [ ] Install backend dependencies and confirm the server starts with local environment variables.
- [ ] Run backend tests and record actual results.
- [ ] Install mobile dependencies and start Expo.
- [ ] Verify the mobile app can reach the configured API.
- [ ] Verify admin actions are authenticated and authorized by the server.
- [ ] Test booking limits, validation, cancellation, payment states, and error handling.
- [ ] Capture genuine screenshots from the running application.

## Documentation

- [ ] Check setup instructions against the current package scripts and environment variable names.
- [ ] Update the project report to reflect the actual implemented functionality.
- [ ] Mark unfinished integrations and known limitations clearly.
- [ ] Add a license only after confirming publication rights.

## Current status

The repository has been initialized with a README. The original project ZIP and report PDFs have not yet been uploaded as repository files.