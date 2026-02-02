import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type IFormInputProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

const FormInput = (props: IFormInputProps) => (
  <div>
    <Label
      htmlFor={props.name}
      className="mb-1 block text-sm font-medium text-foreground"
    >
      {props.label}
      {props.required && <span className="text-destructive"> *</span>}
    </Label>
    <Input
      type={props.type || 'text'}
      id={props.name}
      name={props.name}
      required={props.required}
      placeholder={props.placeholder}
    />
  </div>
);

export { FormInput };
