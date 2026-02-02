import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type IFormTextareaProps = {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
};

const FormTextarea = (props: IFormTextareaProps) => (
  <div>
    <Label
      htmlFor={props.name}
      className="mb-1 block text-sm font-medium text-foreground"
    >
      {props.label}
      {props.required && <span className="text-destructive"> *</span>}
    </Label>
    <Textarea
      id={props.name}
      name={props.name}
      required={props.required}
      placeholder={props.placeholder}
      rows={props.rows || 4}
    />
  </div>
);

export { FormTextarea };
