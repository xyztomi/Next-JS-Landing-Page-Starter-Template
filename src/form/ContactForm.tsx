import { Button } from '../button/Button';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';

const ContactForm = () => (
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    className="space-y-4"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p className="hidden">
      <label>
        Don&apos;t fill this out: <input name="bot-field" />
      </label>
    </p>
    <FormInput label="Name" name="name" required placeholder="Your name" />
    <FormInput
      label="Email"
      name="email"
      type="email"
      required
      placeholder="you@example.com"
    />
    <FormInput
      label="Phone"
      name="phone"
      type="tel"
      placeholder="(555) 123-4567"
    />
    <FormInput
      label="Website URL"
      name="website"
      type="url"
      placeholder="https://yourwebsite.com"
    />
    <FormTextarea
      label="Message"
      name="message"
      required
      placeholder="Tell us about your business and SEO goals..."
      rows={5}
    />
    <button type="submit">
      <Button>Send Message</Button>
    </button>
  </form>
);

export { ContactForm };
