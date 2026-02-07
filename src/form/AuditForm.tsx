import { type FormEvent, useState } from 'react';

import { Button } from '../button/Button';
import { FormInput } from './FormInput';

const AuditForm = () => {
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xqedzkbn', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
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
        <p className="font-semibold">Thank you!</p>
        <p className="mt-1 text-sm">
          We&apos;ll send your free SEO audit shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="_subject" value="Free SEO Audit Request" />
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
      {status === 'error' && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
      <button type="submit" disabled={status === 'submitting'}>
        <Button xl>
          {status === 'submitting' ? 'Submitting...' : 'Get My Free SEO Audit'}
        </Button>
      </button>
    </form>
  );
};

export { AuditForm };
