import { addMonths, parseISO } from 'date-fns';
import { DateTime } from 'luxon';

const startDate = '2023-03-01T00:00:00.000Z';
const date = new Date(startDate);

console.log(
  'Luxon   :',
  DateTime.fromISO(startDate).plus({ months: 1 }).toUTC().toISO()
);
console.log('DateFNS :', addMonths(date, 1));
