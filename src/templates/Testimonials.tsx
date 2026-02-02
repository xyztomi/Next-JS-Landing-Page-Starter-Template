import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { TestimonialCard } from '../testimonial/TestimonialCard';

const Testimonials = () => (
  <Background color="bg-muted">
    <Section
      title="What Our Clients Say"
      description="Small business owners love working with us."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <TestimonialCard
          quote="Our cost per lead dropped by 48% in the first month. They finally made our online marketing predictable and affordable."
          name="Amanda Rivera"
          business="Rivera & Cole LLP"
          stars={5}
        />
        <TestimonialCard
          quote="They treat our budget like it's their own. Organic traffic up 240% year over year. Best investment we've made in our small business."
          name="Jason Park"
          business="GrowthBox E-commerce"
          stars={5}
        />
        <TestimonialCard
          quote="The landing page optimizations alone paid for the entire engagement. Our conversion rate increased by 156%."
          name="Sarah Mitchell"
          business="Velocity Commerce"
          stars={5}
        />
      </div>
    </Section>
  </Background>
);

export { Testimonials };
