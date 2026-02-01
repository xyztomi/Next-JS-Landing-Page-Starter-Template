type IFormTextareaProps = {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
};

const FormTextarea = (props: IFormTextareaProps) => (
  <div>
    <label
      htmlFor={props.name}
      className="mb-1 block font-medium text-navy-700"
    >
      {props.label}
      {props.required && <span className="text-red-500"> *</span>}
    </label>
    <textarea
      id={props.name}
      name={props.name}
      required={props.required}
      placeholder={props.placeholder}
      rows={props.rows || 4}
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
    />
  </div>
);

export { FormTextarea };
