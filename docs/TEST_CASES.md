# Test Cases

| ID | Test | Expected result |
|---|---|---|
| TC01 | Valid signup | Account created and token returned |
| TC02 | Invalid email | Validation error |
| TC03 | Duplicate signup | Conflict response |
| TC04 | Valid login | Token returned |
| TC05 | Wrong password | Generic authentication error |
| TC06 | Search destination | Matching tours returned |
| TC07 | Booking 1 traveler | Accepted; total equals per-person price |
| TC08 | Booking 20 travelers | Accepted; total equals price × 20 |
| TC09 | Booking 0 travelers | Rejected |
| TC10 | Booking 21 travelers | Rejected |
| TC11 | Negative/fractional travelers | Rejected |
| TC12 | Client price tampering | Server uses stored package price |
| TC13 | Cancel booking | Status follows cancellation rules |
| TC14 | Online payment before integration | No fake paid status; unavailable response |
| TC15 | Review incomplete trip | Rejected |
| TC16 | Admin route as customer | Forbidden response |
| TC17 | Admin report | CSV downloads for authorized admin |
| TC18 | Backend unavailable | Clear error; no fake booking success |
| TC19 | Cash booking | Booking remains pending until processed |
| TC20 | Support form validation | Invalid input rejected |

These are test-plan expectations, not evidence that every test has passed. Run the tests and document actual results before submission.