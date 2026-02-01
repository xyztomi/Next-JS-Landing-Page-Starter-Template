import { Section } from '../layout/Section';

const TrustBar = () => (
  <Section yPadding="py-8">
    <div className="flex flex-wrap items-center justify-center gap-8 text-center text-gray-500 md:gap-16">
      <div>
        <div className="text-3xl font-bold text-navy-700">200+</div>
        <div className="text-sm">Small Businesses Served</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-navy-700">4.9/5</div>
        <div className="text-sm">Average Client Rating</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-navy-700">150%</div>
        <div className="text-sm">Avg. Traffic Increase</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-navy-700">50+</div>
        <div className="text-sm">Industries Covered</div>
      </div>
    </div>
  </Section>
);

export { TrustBar };
