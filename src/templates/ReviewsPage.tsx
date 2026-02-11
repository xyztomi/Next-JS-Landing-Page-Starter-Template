import { Star } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

type Review = {
  title: string;
  date: string;
  text: string;
  author: string;
};

const reviews: Review[] = [
  {
    title: "I'm on ChatGPT",
    date: 'February 5, 2026',
    text: "Thank you Kerim! I'm new to SEO and you already placed us on AI, Google and maps. Best $99 dollars I ever spent. I still can't believe it.",
    author: 'Cole',
  },
  {
    title: 'ChatGPT and Perplexity',
    date: 'October 17, 2025',
    text: 'As a new white label agency in the industry I found my customers on a few AI platforms in a short period of time along with Google and Bing. My clients are already noticing. Keep it up please and thank you.',
    author: 'Susan',
  },
  {
    title: 'Above Average and Beyond',
    date: 'September 9, 2025',
    text: "I've heard of a lot of stand-up people in the SEO industry. Clearly, I was a victim of a bad company that did horrible SEO. However, this quickly turned around for my business when I discovered Kerim. Kerim is phenomenal. He is a stand and deliver type of guy. He stands behind his work and has never let me down. I told him I wanted calls for the week and he made this happen. Extraordinarily excellent SEO from this service.",
    author: 'Antonio',
  },
  {
    title: 'Excellent Marketing Advice',
    date: 'September 4, 2025',
    text: 'With online searches changing dramatically for our wellness business that has major retail chain relationships nationwide, Kerim and his team suggested we add frequently asked questions to our website and it worked for us. Thank you Kerim.',
    author: 'Laura',
  },
  {
    title: 'ChatGPT and Siri',
    date: 'August 23, 2025',
    text: 'Thank you Kerim. My business was just found on ChatGPT and Siri.',
    author: 'Herb',
  },
  {
    title: 'Law Practice Growth',
    date: 'July 17, 2025',
    text: 'As a medical malpractice attorney we needed our brand on Google, Google Voice and Siri without the expense for costly ads. Working with Kerim over the past few years has been a very positive and successful experience for our law practice. I highly recommend Kerim and his team of online marketing experts.',
    author: 'Carol Jean',
  },
  {
    title: 'Awesome SEO Team',
    date: 'July 10, 2025',
    text: 'Kerim is the best. Do not hesitate to use his services and SEO. Thank you!!!',
    author: 'Tom K',
  },
  {
    title: 'Small Business Client',
    date: 'June 8, 2025',
    text: 'SEO Rank My Business has been a positive asset to our business. When it comes to online marketing, Kerim confidently, consistently, consecutively, completely crowns the SEO industry.',
    author: 'Anthony G',
  },
  {
    title: 'Marketing',
    date: 'June 8, 2025',
    text: 'Since hiring Kerim our clients are being found on Google and AI generated search engines. Thank you Kerim.',
    author: 'Anne',
  },
  {
    title: 'Customers Are Finding Us!',
    date: 'June 8, 2025',
    text: "We're a small transportation company offering tours and taxi services, and we couldn't be happier with Kerim and his SEO team! They really got our website ranking higher, and now customers can easily find us online.",
    author: 'A. W.',
  },
  {
    title: 'Nice Work',
    date: 'February 16, 2025',
    text: 'Thank you, I was recently found on some voice engines using your SEO.',
    author: 'Ann',
  },
  {
    title: 'Great SEO And Web Design Work',
    date: 'January 31, 2025',
    text: 'The website looks great and I am getting great feedback about the site Kerim and his team designed. The SEO is already starting to work. Thank you.',
    author: 'Laura',
  },
  {
    title: 'Cyber Security',
    date: 'January 21, 2025',
    text: 'Thank you for placing our Cyber Security agency on Google. We are now ranking our brand services on search engines to include voice engines.',
    author: 'Herbert',
  },
  {
    title: 'National Auto Shipper Success Story',
    date: 'November 19, 2024',
    text: "Kerim answers the phone and actually calls back which is amazing in today's business environment. Kerim has been offering us his organic National SEO services. We have experienced good page 1 rankings for Google with both keywords and voice phrases on voice search engines.",
    author: 'Felix',
  },
  {
    title: 'Best SEO ever!',
    date: 'October 9, 2024',
    text: 'As an attorney I rely on online visitors to eventually become clients. This company is great. They do what they say.',
    author: 'Carole',
  },
  {
    title: 'Cyber Security Service Ranking',
    date: 'October 8, 2024',
    text: 'Thank you for what you do. As a cyber security consultant both employers and scouts are finding me on Google. Great work, keep it up.',
    author: 'Rosen',
  },
  {
    title: 'One of Our Best Decisions!',
    date: 'August 14, 2024',
    text: "We launched our new landscaping company in early 2023. We had a website, but it wasn't getting enough traffic. After shopping around for SEO, we decided to try SEO Rank My Business, and it's been one of our best decisions yet.",
    author: 'Chris and Michelle W.',
  },
  {
    title: 'Happy Customer-Happy Agency-Happy Business',
    date: 'July 7, 2024',
    text: "Don't know how they do it and don't care. The results speak for themselves.",
    author: 'White Label Agency',
  },
  {
    title: 'Eye Doctor',
    date: 'June 13, 2024',
    text: 'Our eye clinic in a short period of time has received many calls from our online presence. Great job, keep it up.',
    author: 'Optometrist',
  },
  {
    title: 'Website Posts Show at the Top of Search Engines',
    date: 'May 24, 2024',
    text: 'Kerim and his team have done a terrific SEO job for the On Fire Missions website. The posts have risen to the top of search engines and remained there.',
    author: 'On Fire Missions',
  },
  {
    title: 'My Shopify Store is Ranking',
    date: 'May 22, 2024',
    text: 'Thank you for getting my Shopify store products on Google. People are visiting my website.',
    author: 'Susan',
  },
  {
    title: 'Canadian Business',
    date: 'May 13, 2024',
    text: 'Our HQ is in Canada. Our products are ranking throughout Canada.',
    author: 'Mr. Herbert',
  },
  {
    title: 'Reliable White Label SEO',
    date: 'May 9, 2024',
    text: "I've been using this SEO service for many of my clients and it's been effective and easy for me as a web designer to offer this to my customers as a complementary service.",
    author: 'Local Web Design Agency',
  },
  {
    title: 'Excellent Local SEO Service!',
    date: 'May 8, 2024',
    text: 'I have used SEORankMyBusiness with a multitude of local clients for several months now. The results have been outstanding.',
    author: 'Richard Zimbalist',
  },
  {
    title: 'Page 1 Google',
    date: 'May 8, 2024',
    text: 'My optometrist practice is receiving calls since found on page 1 Google.',
    author: 'Optometrist',
  },
  {
    title: '225 Keywords on Page 1 on Google',
    date: 'April 12, 2024',
    text: 'Wow, when you guys said unlimited keywords you were not kidding. So far we are up to 225 keywords on page 1 on Google.',
    author: 'Marlon',
  },
  {
    title: 'My National SEO Campaign',
    date: 'April 3, 2024',
    text: 'We are a small national online video production team. We just started our national SEO campaign. We were told by many SEO marketing companies that it would take up to six months to start seeing any results. Kerim proved them wrong.',
    author: 'Herbert',
  },
  {
    title: 'The Best SEO Service',
    date: 'February 21, 2024',
    text: 'As a hair salon we always struggle to get traffic to visit our site and salon shop versus so many beauty shops in our town. Kerim changed that for us.',
    author: 'Carol',
  },
  {
    title: 'Best SEO Experience',
    date: 'February 13, 2024',
    text: 'I tried many SEO companies that cost me a lot of money with no results. Kerim delivered from day one.',
    author: 'Ann',
  },
  {
    title: 'Thank You for Page 1',
    date: 'February 12, 2024',
    text: 'The articles you submitted were great and they got us ranking on page 1.',
    author: 'Greg from Tennessee',
  },
  {
    title: 'Amazing SEO for the Price',
    date: 'December 22, 2023',
    text: "I can't believe this SEO company. They answer the phones and they are for real. My website is everywhere.",
    author: 'Herb',
  },
  {
    title: 'Now Rocking the Top Spot on Maps',
    date: 'October 30, 2023',
    text: 'This company are master mathematicians. They have mastered the timing in algorithms. Now rocking the top spot on maps in my local area thanks to Kerim.',
    author: 'Marcus Reading',
  },
  {
    title: '1st Page of Google Maps',
    date: 'October 12, 2023',
    text: 'Special thanks goes personally to Kerim and SEO Rank My Business for getting us on the first page of Google Maps.',
    author: 'Marco M',
  },
  {
    title: 'Digital Marketing Genius',
    date: 'July 11, 2023',
    text: 'Finally found a company that answers the phone and also has the right answers to my questions.',
    author: 'Laura',
  },
  {
    title: 'Kerim Is Just Simply Amazing',
    date: 'May 23, 2023',
    text: 'Truly SEO at its best.',
    author: 'Sean',
  },
  {
    title: 'Wizard Of SEO',
    date: 'February 9, 2023',
    text: 'This SEO company is the most understanding business I know.',
    author: 'ASG',
  },
  {
    title: 'Definitely Worth It to Work with Kerim',
    date: 'January 12, 2023',
    text: 'Our company already had our own site set up, but Kerim definitely helped boost traffic our way.',
    author: 'MB Depot',
  },
  {
    title: 'Trust This Company',
    date: 'December 30, 2022',
    text: 'SEO Rank My Business is definitely the best investment for any small business looking to grow online.',
    author: 'Anthony',
  },
  {
    title: 'The Power Behind This Force of Greatness',
    date: 'December 17, 2022',
    text: 'At first, I never knew the importance of the power of SEO and what impact it could have on my business. Kerim showed me.',
    author: 'A. Gravagne',
  },
  {
    title: 'Our Business Has Doubled in Revenue',
    date: 'July 6, 2022',
    text: 'Our business has doubled in revenue since hiring Kerim to do our SEO.',
    author: 'Lauren Miori',
  },
  {
    title: 'Fantastic to Work With!',
    date: 'May 11, 2022',
    text: 'Kerim has been fantastic to work with. Highly recommended.',
    author: 'Tyler Grizzle',
  },
  {
    title: 'Sold My Business for a Profit Because of Great SEO',
    date: 'December 20, 2020',
    text: "I can't thank you enough. The SEO work you did helped me sell my business for a profit.",
    author: 'LJ',
  },
  {
    title: 'Kerim Is Absolutely Astounding!',
    date: 'November 3, 2020',
    text: 'I came to Kerim looking for SEO services and he exceeded every expectation.',
    author: 'Kimberly Davis',
  },
  {
    title: 'Outstanding!!!',
    date: 'April 20, 2020',
    text: 'Kerim Rogers has been an outstanding service for my small cleaning company.',
    author: 'Wade Bankston',
  },
  {
    title: 'Really Impressed',
    date: 'April 22, 2020',
    text: 'Not only did they get me results but they are easy to work with.',
    author: 'Will Hendrex',
  },
  {
    title: "I'm in Happy Shock",
    date: 'December 29, 2019',
    text: "Kerim, I'm in shock at the moment. The results are incredible. You are special.",
    author: 'Yosef',
  },
  {
    title: 'So Happy You Are My SEO Company',
    date: 'April 4, 2019',
    text: 'Kerim, I sat down today and Googled carpet cleaning in my area and there we were. Thank you.',
    author: 'Pierre',
  },
  {
    title: 'Amazing Results and Prices!!!',
    date: 'February 14, 2019',
    text: 'I have been through several different SEO companies. Kerim is the real deal at an affordable price.',
    author: 'Wade',
  },
  {
    title: 'Happy to Be on Google Page 1',
    date: 'October 15, 2018',
    text: "I couldn't be happier. Kerim is on top of everything for our business.",
    author: 'Judy',
  },
];

const Stars = () => (
  <div className="flex gap-0.5 text-yellow-400">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="size-4 fill-current" />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: Review }) => (
  <Card className="flex flex-col overflow-hidden border-0 shadow-md transition-shadow hover:shadow-lg">
    <CardContent className="flex grow flex-col p-0">
      <div className="border-b border-border/50 bg-muted/30 px-6 py-4">
        <Stars />
        <h3 className="mt-2 font-semibold leading-tight text-foreground">
          {review.title}
        </h3>
      </div>
      <div className="flex grow flex-col justify-between px-6 py-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="mt-4 flex items-center gap-3 border-t border-border/50 pt-4">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
            {review.author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {review.author}
            </p>
            <p className="text-xs text-muted-foreground">{review.date}</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ReviewsPage = () => (
  <>
    <Background color="bg-muted">
      <Section yPadding="pt-12 pb-10 sm:pt-16 md:pt-20 md:pb-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Client Reviews
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg md:mt-4 md:text-xl">
            Real reviews from real small business owners. See why our clients
            rate us 5 out of 5 stars.
          </p>
          <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground sm:text-4xl">
                {reviews.length}+
              </p>
              <p className="text-sm text-muted-foreground">Verified Reviews</p>
            </div>
            <div className="hidden h-10 w-px bg-border sm:block" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span className="text-3xl font-bold text-foreground sm:text-4xl">
                  5.0
                </span>
                <Star className="size-6 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="hidden h-10 w-px bg-border sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground sm:text-4xl">
                7+
              </p>
              <p className="text-sm text-muted-foreground">Years of Reviews</p>
            </div>
          </div>
        </div>
      </Section>
    </Background>

    <Section>
      <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
        {reviews.map((review) => (
          <div
            key={`${review.author}-${review.date}`}
            className="break-inside-avoid"
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </Section>

    <Background color="bg-muted">
      <Section yPadding="py-12 md:py-16">
        <div className="text-center">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Get a free SEO audit and see how we can help your small business
            rank higher on Google.
          </p>
          <div className="mt-6">
            <Link href="/contact/#free-audit">
              <Button xl>Get Your Free SEO Audit</Button>
            </Link>
          </div>
        </div>
      </Section>
    </Background>
  </>
);

export { ReviewsPage };
