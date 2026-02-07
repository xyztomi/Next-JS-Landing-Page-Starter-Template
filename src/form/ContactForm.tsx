import { type FormEvent, useState } from 'react';

import { Button } from '../button/Button';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';

const ContactForm = () => {
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xqedzkbn', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-md bg-green-50 p-4 text-green-800">
        <p className="font-semibold">Thank you for your message!</p>
        <p className="mt-1 text-sm">
          We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="_subject" value="Contact Form Message" />
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
      {status === 'error' && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
      <button type="submit" disabled={status === 'submitting'}>
        <Button>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>
      </button>
    </form>
  );
};

export { ContactForm };
