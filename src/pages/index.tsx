import type { GetStaticProps } from 'next';

import type { BlogPostMeta } from '@/utils/blog';
import { getRecentPosts } from '@/utils/blog';

import { Base } from '../templates/Base';

type IIndexProps = {
  recentPosts: BlogPostMeta[];
};

const Index = (props: IIndexProps) => <Base recentPosts={props.recentPosts} />;

export const getStaticProps: GetStaticProps<IIndexProps> = () => {
  const recentPosts = getRecentPosts(5);
  return { props: { recentPosts } };
};

export default Index;
