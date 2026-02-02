import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type IFAQItemProps = {
  question: string;
  answer: string;
  value: string;
};

const FAQItem = (props: IFAQItemProps) => (
  <AccordionItem value={props.value}>
    <AccordionTrigger className="text-foreground">
      {props.question}
    </AccordionTrigger>
    <AccordionContent>{props.answer}</AccordionContent>
  </AccordionItem>
);

export { FAQItem };
