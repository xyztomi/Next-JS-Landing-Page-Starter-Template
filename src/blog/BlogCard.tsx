import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';

type IBlogCardProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
};

const BlogCard = (props: IBlogCardProps) => (
  <Link href={`/blog/${props.slug}/`} className="block">
    <Card className="transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-2 text-sm text-muted-foreground">
          {new Date(props.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          &middot; {props.author}
        </div>
        <h2 className="mb-2 text-xl font-semibold text-foreground">
          {props.title}
        </h2>
        <p className="text-muted-foreground">{props.description}</p>
        <span className="mt-4 inline-block font-medium text-accent">
          Read more &rarr;
        </span>
      </CardContent>
    </Card>
  </Link>
);

export { BlogCard };
