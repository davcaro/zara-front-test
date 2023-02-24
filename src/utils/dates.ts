import { Duration } from 'date-fns';

const pad = (number: Number) => (number < 10 ? `0${number}` : number);

export const formatDuration = (duration: Duration) => {
  const { years, months, days, hours, minutes, seconds } = {
    years: duration.years || 0,
    months: duration.months || 0,
    days: duration.days || 0,
    hours: duration.hours || 0,
    minutes: duration.minutes || 0,
    seconds: duration.seconds || 0,
  };

  const totalHours = hours + days * 24 + months * 30 * 24 + years * 365 * 24;

  const parts = [minutes, seconds];
  if (totalHours > 0) {
    parts.unshift(totalHours);
  }

  return parts.map(pad).join(':');
};
