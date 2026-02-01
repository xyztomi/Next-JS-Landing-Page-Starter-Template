type IFAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = (props: IFAQItemProps) => (
  <details className="group border-b border-gray-200 py-4">
    <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-navy-700">
      {props.question}
      <svg
        className="size-5 shrink-0 transition-transform group-open:rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>
    <p className="mt-3 text-gray-600">{props.answer}</p>
  </details>
);

export { FAQItem };
