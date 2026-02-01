type IFormInputProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

const FormInput = (props: IFormInputProps) => (
  <div>
    <label
      htmlFor={props.name}
      className="mb-1 block font-medium text-navy-700"
    >
      {props.label}
      {props.required && <span className="text-red-500"> *</span>}
    </label>
    <input
      type={props.type || 'text'}
      id={props.name}
      name={props.name}
      required={props.required}
      placeholder={props.placeholder}
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
    />
  </div>
);

export { FormInput };
