import React from 'react';
import { TextInput, useFormFields } from 'payload/components/forms';
import moment from 'moment';

type Props = {
  name: string;
  label: string;
};

const AgeCustomTextField: React.FC = ({ name, label }: Props) => {
  
  const bday = useFormFields(([fields, dispatch]) => fields?.dataUrodzenia);
  const wiek = moment().diff(bday.value as Date, 'years');
  
  
  return (
    <TextInput
      path={'wiek'}
      name={name}
      label={label}
      value={(wiek && String(wiek)) || ''}
      readOnly
    />
  );
};

export default AgeCustomTextField;