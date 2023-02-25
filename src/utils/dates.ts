import { intervalToDuration } from 'date-fns';

const pad = (number: Number) => (number < 10 ? `0${number}` : number);

const formatDurationFromMilliseconds = (milliseconds: number) => {
  const duration = intervalToDuration({ start: 0, end: milliseconds });

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

export const formatDuration = (duration: string | number) => {
  const durationContainsColon = typeof duration === 'string' && duration.includes(':');
  const durationCantBeConvertedToNumber = Number.isNaN(Number(duration));

  if (durationContainsColon || durationCantBeConvertedToNumber) {
    return duration;
  }

  return formatDurationFromMilliseconds(Number(duration) * 1000);
};
