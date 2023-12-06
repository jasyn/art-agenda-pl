import { TextInput, useFormFields } from 'payload/components/forms';

type Props = {
  name: string;
  label: string;
};

const CityCustomTextField: React.FC = ({ name, label }: Props) => {
  const city = useFormFields(([fields, dispatch]) => fields?.['adres.miasto']);

  
  return (
    <TextInput
      path={'miastoZamieszkania'}
      name={name}
      label={label}
      value={(city?.value as string) || ''}
      readOnly
    />
  );
};

export default CityCustomTextField;
