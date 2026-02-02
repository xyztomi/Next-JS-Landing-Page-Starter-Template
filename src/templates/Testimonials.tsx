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
          quote="Our organic traffic increased by 200% in just 6 months. The team really understands what small businesses need to succeed online."
          name="Sarah Johnson"
          business="Johnson's Plumbing"
          stars={5}
        />
        <TestimonialCard
          quote="We went from page 5 to the top 3 for our main keywords. The ROI on their SEO services has been incredible for our small business."
          name="Mike Chen"
          business="Chen's Family Restaurant"
          stars={5}
        />
        <TestimonialCard
          quote="Finally, an SEO agency that doesn't charge enterprise prices. They delivered real results for our local bakery within months."
          name="Emily Davis"
          business="Sweet Treats Bakery"
          stars={5}
        />
      </div>
    </Section>
  </Background>
);

export { Testimonials };
