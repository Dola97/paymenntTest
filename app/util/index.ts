import {TransactionRecord} from '../types/transaction';
import {format, isToday} from 'date-fns';

export const isValidEmail = (email: string) => {
  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

type Section = {title: string; data: TransactionRecord[]};
export const getTimeFromTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);
  return format(date, 'hh:mm a');
};

export const preprocessData = (data: TransactionRecord[]): Section[] => {
  const grouped: {[key: string]: TransactionRecord[]} = {};

  data.forEach(transaction => {
    const date = new Date(transaction.timestamp);

    let label: string;
    if (isToday(date)) {
      label = 'Today';
    } else {
      label = format(date, 'MMM dd').toUpperCase(); // Format to "MMM dd" and then convert to uppercase
    }

    if (!grouped[label]) {
      grouped[label] = [];
    }
    grouped[label].push(transaction);
  });

  return Object.entries(grouped).map(([title, records]) => ({
    title,
    data: records,
  }));
};
