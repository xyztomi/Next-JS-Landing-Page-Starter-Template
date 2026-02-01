type IJsonLdProps = {
  data: Record<string, unknown>;
};

const JsonLd = (props: IJsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(props.data) }}
  />
);

export { JsonLd };
