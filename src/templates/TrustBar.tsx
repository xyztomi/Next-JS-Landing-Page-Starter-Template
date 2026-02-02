import { Section } from '../layout/Section';

const TrustBar = () => (
  <Section yPadding="py-6 md:py-8">
    <div className="grid grid-cols-2 gap-4 text-center text-muted-foreground sm:gap-6 md:flex md:flex-wrap md:items-center md:justify-center md:gap-16">
      <div>
        <div className="text-2xl font-bold text-foreground md:text-3xl">
          150+
        </div>
        <div className="text-xs sm:text-sm">Small Businesses Served</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-foreground md:text-3xl">
          4.9/5
        </div>
        <div className="text-xs sm:text-sm">Average Client Rating</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-foreground md:text-3xl">
          3.5X
        </div>
        <div className="text-xs sm:text-sm">Average ROAS</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-foreground md:text-3xl">
          96%
        </div>
        <div className="text-xs sm:text-sm">Client Retention Rate</div>
      </div>
    </div>
  </Section>
);

export { TrustBar };
