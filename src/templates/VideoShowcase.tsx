import Script from 'next/script';

const VideoShowcase = () => (
  <div className="bg-gradient-to-b from-navy-900 to-navy-800">
    <div className="mx-auto max-w-screen-lg px-4 py-12 sm:px-6 md:py-20">
      <div className="mb-8 text-center md:mb-12">
        <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-accent" />
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Inside Our SEO Growth Engine
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-navy-300 sm:text-lg md:mt-4 md:text-xl">
          See How We Turn Search Traffic Into Qualified Leads for Small
          Businesses Like Yours
        </p>
      </div>

      <div className="overflow-hidden rounded-lg shadow-2xl shadow-accent/20 ring-1 ring-white/10 sm:rounded-xl">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://player.vimeo.com/video/1166403527?badge=0&autopause=0&player_id=0&app_id=58479"
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
  </div>
);

export { VideoShowcase };
