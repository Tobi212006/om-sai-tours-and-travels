import test from 'node:test';
import assert from 'node:assert/strict';

function validTravelerCount(value) {
  return Number.isInteger(value) && value >= 1 && value <= 20;
}

test('traveler count accepts the inclusive range 1–20', () => {
  assert.equal(validTravelerCount(1), true);
  assert.equal(validTravelerCount(20), true);
});

test('traveler count rejects values outside the range and non-integers', () => {
  for (const value of [0, 21, -1, 1.5, '2', null]) {
    assert.equal(validTravelerCount(value), false);
  }
});