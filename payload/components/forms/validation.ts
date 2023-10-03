import { Validate } from 'payload/types';

export const validateUrl: Validate = (value) => {
  const stringValue = value as string;
  try {
    new URL(stringValue);
    return true;
  } catch (err) {
    return 'Niepoprawny link';
  }
};

export const validateNrDowodu: Validate = (value) => {
  const stringValue = value as string;

  if ((!/^[A-Z]{3}\d{6}$/.test(stringValue))) {
    return 'Niepoprawny numer dowodu osobistego.';
  }

  return true;
};

export const validatePesel: Validate = (value) => {
  const stringValue = value as string;

  if ((!/\d{11}/.test(stringValue))) {
    return 'Niepoprawny PESEL.';
  }

  return true;
};

export const validateNrKonta: Validate = (value) => {
  const stringValue = value as string;

  if ((!/\d{26}/.test(stringValue))) {
    return 'Niepoprawny numer konta bankowego.';
  }

  return true;
};
