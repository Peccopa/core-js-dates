/**
 * Returns the total number of days between two dates, including both the start and end dates.
 *
 * @param {string} dateStart - The start date of the period in ISO 8601 format.
 * @param {string} dateEnd - The end date of the period in ISO 8601 format.
 * @return {number} - The total count of days in the period.
 *
 * @example:
 * '2024-02-01T00:00:00.000Z', '2024-02-02T00:00:00.000Z'  => 2
 * '2024-02-01T00:00:00.000Z', '2024-02-12T00:00:00.000Z'  => 12
 */
function getCountDaysOnPeriod(dateStart, dateEnd) {
  const start = new Date(dateStart).getTime();
  const end = new Date(dateEnd).getTime();

  return (end - start) / 86_400_000 + 1;
}

console.log(
  getCountDaysOnPeriod('2024-02-01T00:00:00.000Z', '2024-02-12T00:00:00.000Z')
);
