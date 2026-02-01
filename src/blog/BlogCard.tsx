import Link from 'next/link';

type IBlogCardProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
};

const BlogCard = (props: IBlogCardProps) => (
  <Link href={`/blog/${props.slug}/`} className="block">
    <article className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg">
      <div className="mb-2 text-sm text-gray-500">
        {new Date(props.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        &middot; {props.author}
      </div>
      <h2 className="mb-2 text-xl font-semibold text-navy-700">
        {props.title}
      </h2>
      <p className="text-gray-600">{props.description}</p>
      <span className="mt-4 inline-block font-medium text-accent-500">
        Read more &rarr;
      </span>
    </article>
  </Link>
);

export { BlogCard };
