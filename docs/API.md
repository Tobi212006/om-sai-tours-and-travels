# API reference

Base URL: `/api`. Protected endpoints require `Authorization: Bearer <JWT>`.

| Method | Path | Access | Purpose |
|---|---|---|---|
| GET | `/health` | Public | API health |
| POST | `/auth/signup` | Public | Create customer account |
| POST | `/auth/login` | Public | Login |
| GET/PATCH | `/users/me` | Signed-in | Profile |
| GET | `/categories` | Public | Active categories |
| GET | `/tours?destination=Goa` | Public | Search tours |
| GET | `/tours/:id` | Public | Tour details |
| GET/POST/DELETE | `/wishlist` | Signed-in | Wishlist |
| POST | `/bookings` | Signed-in | Create booking; validates 1–20 travelers and calculates total on server |
| GET | `/bookings` | Signed-in/admin | Customer bookings or admin list |
| POST | `/bookings/:bookingId/cancel` | Owner/admin | Cancel eligible booking |
| POST | `/payments/create` | Signed-in | Intentionally unconfigured until gateway integration |
| POST | `/payments/verify` | Signed-in | Intentionally unconfigured until signature verification |
| GET | `/reviews` | Public | Active reviews |
| POST | `/reviews` | Signed-in | Review completed booking |
| GET | `/notifications` | Signed-in | In-app notifications |
| GET | `/offers` | Public | Active offers |
| POST | `/support/inquiries` | Public | Submit support inquiry |
| GET | `/admin/dashboard` | Admin | Dashboard summary |
| POST/PUT/DELETE | `/admin/packages[/:id]` | Admin | Package management |
| GET | `/admin/reports/bookings.csv` | Admin | Excel-compatible booking export |

## Booking contract
Example fields: `tourId`, `travelers`, `travelDate`, `customerName`, `mobile`, `email`, `pickupLocation`, `paymentMethod`. Server calculates `totalAmount = pricePerPerson × travelers`; client-sent price is ignored. Travelers must be an integer from 1 through 20.

This document describes intended API behavior for the academic prototype. Verify actual server routes and tests before relying on it.