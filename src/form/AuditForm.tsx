import { Button } from '../button/Button';
import { FormInput } from './FormInput';

const AuditForm = () => (
  <form
    name="free-audit"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    className="space-y-4"
  >
    <input type="hidden" name="form-name" value="free-audit" />
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
      label="Website URL"
      name="website"
      type="url"
      required
      placeholder="https://yourwebsite.com"
    />
    <button type="submit">
      <Button xl>Get My Free SEO Audit</Button>
    </button>
  </form>
);

export { AuditForm };
