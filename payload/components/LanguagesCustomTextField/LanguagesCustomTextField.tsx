import { TextInput, useField, useFormFields } from 'payload/components/forms';

type Props = {
  name: string;
  label: string;
};

const LanguagesCustomTextField: React.FC = ({ name, label }: Props) => {
  const languages = useFormFields(([fields, dispatch]) => fields?.['umiejetnosci.jezyki.jezyki']);
  const langs = useField({path: 'umiejetnosci.jezyki.jezyki'});
  
  
  
  return (
    <TextInput
      path={'miastoZamieszkania'}
      name={name}
      label={label}
      value={(languages?.value as string) || ''}
      readOnly
    />
  );
};

export default LanguagesCustomTextField;
