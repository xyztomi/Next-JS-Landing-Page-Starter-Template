import { Background } from '../background/Background';
import { AuditForm } from '../form/AuditForm';
import { ContactForm } from '../form/ContactForm';
import { Section } from '../layout/Section';

const ContactPage = () => (
  <>
    <Background color="bg-muted">
      <Section yPadding="pt-12 pb-10 sm:pt-16 md:pt-20 md:pb-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Contact Us - Get a Free SEO Audit
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg md:mt-4 md:text-xl">
            Have questions about our SEO services for small businesses? Want a
            free audit of your website? We&apos;d love to hear from you.
          </p>
        </div>
      </Section>
    </Background>

    <Section id="free-audit">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl md:mb-4 md:text-3xl">
            Get Your Free SEO Audit
          </h2>
          <p className="mb-5 text-sm text-muted-foreground sm:mb-6 sm:text-base">
            Enter your website URL below and our team will send you a
            comprehensive SEO audit with actionable recommendations — completely
            free. We&apos;ll respond within 24 hours with your custom SEO
            strategy.
          </p>
          <AuditForm />
        </div>
        <div>
          <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl md:mb-4 md:text-3xl">
            Send Us a Message
          </h2>
          <p className="mb-5 text-sm text-muted-foreground sm:mb-6 sm:text-base">
            Have a question or want to discuss your SEO needs? Fill out the form
            below and we&apos;ll get back to you within one business day.
          </p>
          <ContactForm />
        </div>
      </div>
    </Section>

    <Background color="bg-muted">
      <Section>
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3 md:gap-8">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">
              Email
            </h3>
            <p className="text-sm text-muted-foreground sm:text-base">
              support@bestppcfirm.com
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">
              Phone
            </h3>
            <p className="text-sm text-muted-foreground sm:text-base">
              +1 (714) 398-8563
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">
              Hours
            </h3>
            <p className="text-sm text-muted-foreground sm:text-base">
              Mon - Fri: 9am - 6pm PST
            </p>
          </div>
        </div>
      </Section>
    </Background>
  </>
);

export { ContactPage };
