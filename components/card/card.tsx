import Link from 'next/link';

import classnames from 'classnames';

import Date from '../date/date';
import Topic from '../topic/topic';
import TopicGroup from '../topic-group/topic-group';

export default function Card({
  post,
}: {
  post: IPost
}) {
  return (
    <Link href="/posts/[id]" as={`/posts/${post.slug}`}>
      <div className="w-full rounded-2lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl">
        <img className="w-full h-48 md:h-56 object-cover" src={post.heroImage.url} alt={`${post.title}`} />
        <div className="px-6 py-4">
          <div className="font-semibold text-xl md:text-2xl lg:text-3xl mb-2 leading-tight">{post.title}</div>
          <div className="font-normal text-sm md:text-base mb-2 text-gray-600"><Date dateString={post.publishDate} /></div>
          <p className="text-sm md:text-base overflow-hidden truncate-multiline">
            {post.description}
          </p>
        </div>
        <div className="px-6 p-1">
          <TopicGroup topics={post.topicsCollection.items} isPill />
        </div>
      </div>
    </Link>
  );
}
