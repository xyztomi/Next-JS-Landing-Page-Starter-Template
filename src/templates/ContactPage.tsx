import { Background } from '../background/Background';
import { AuditForm } from '../form/AuditForm';
import { ContactForm } from '../form/ContactForm';
import { Section } from '../layout/Section';

const ContactPage = () => (
  <>
    <Background color="bg-muted">
      <Section yPadding="pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-foreground">
            Contact Us - Get a Free SEO Audit
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
            Have questions about our SEO services for small businesses? Want a
            free audit of your website? We&apos;d love to hear from you.
          </p>
        </div>
      </Section>
    </Background>

    <Section id="free-audit">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Get Your Free SEO Audit
          </h2>
          <p className="mb-6 text-muted-foreground">
            Enter your website URL below and our team will send you a
            comprehensive SEO audit with actionable recommendations — completely
            free. We&apos;ll respond within 24 hours with your custom SEO
            strategy.
          </p>
          <AuditForm />
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Send Us a Message
          </h2>
          <p className="mb-6 text-muted-foreground">
            Have a question or want to discuss your SEO needs? Fill out the form
            below and we&apos;ll get back to you within one business day.
          </p>
          <ContactForm />
        </div>
      </div>
    </Section>

    <Background color="bg-muted">
      <Section>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Email
            </h3>
            <p className="text-muted-foreground">support@bestppcfirm.com</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Phone
            </h3>
            <p className="text-muted-foreground">+1 (714) 398-8563</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Hours
            </h3>
            <p className="text-muted-foreground">Mon - Fri: 9am - 6pm PST</p>
          </div>
        </div>
      </Section>
    </Background>
  </>
);

export { ContactPage };
