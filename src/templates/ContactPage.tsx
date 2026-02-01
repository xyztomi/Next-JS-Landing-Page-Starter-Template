import { Background } from '../background/Background';
import { AuditForm } from '../form/AuditForm';
import { ContactForm } from '../form/ContactForm';
import { Section } from '../layout/Section';

const ContactPage = () => (
  <>
    <Background color="bg-gray-100">
      <Section yPadding="pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-navy-700">
            Contact Us - Get a Free SEO Audit
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Have questions about our SEO services? Want a free audit of your
            website? We&apos;d love to hear from you.
          </p>
        </div>
      </Section>
    </Background>

    <Section id="free-audit">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-navy-700">
            Get Your Free SEO Audit
          </h2>
          <p className="mb-6 text-gray-600">
            Enter your website URL below and our team will send you a
            comprehensive SEO audit with actionable recommendations — completely
            free.
          </p>
          <AuditForm />
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-bold text-navy-700">
            Send Us a Message
          </h2>
          <p className="mb-6 text-gray-600">
            Have a question or want to discuss your SEO needs? Fill out the form
            below and we&apos;ll get back to you within one business day.
          </p>
          <ContactForm />
        </div>
      </div>
    </Section>

    <Background color="bg-gray-100">
      <Section>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-navy-700">Email</h3>
            <p className="text-gray-600">hello@seoservicesforsmallbiz.com</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-navy-700">Phone</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-navy-700">Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9am - 5pm EST</p>
          </div>
        </div>
      </Section>
    </Background>
  </>
);

export { ContactPage };
