import Script from 'next/script';

const VideoShowcase = () => (
  <section className="relative overflow-hidden bg-white">
    {/* Subtle top accent line */}
    <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

    <div className="mx-auto max-w-screen-lg px-4 py-10 sm:px-6 md:py-16">
      <div className="mb-8 text-center md:mb-12">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-accent" />
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          Inside Our SEO Growth Engine
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg md:mt-4 md:text-xl">
          See How We Turn Search Traffic Into Qualified Leads for Small
          Businesses Like Yours
        </p>
      </div>

      {/* Video container with soft shadow and border */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-lg">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://player.vimeo.com/video/1166403527?badge=0&autopause=0&player_id=0&app_id=58479&portrait=0&byline=0&title=0"
            className="absolute inset-0 size-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="How Our SEO System Actually Works"
          />
        </div>
      </div>
    </div>

    <Script
      src="https://player.vimeo.com/api/player.js"
      strategy="lazyOnload"
    />
  </section>
);

export { VideoShowcase };
