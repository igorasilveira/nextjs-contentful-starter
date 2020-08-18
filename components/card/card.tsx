import Link from 'next/link';

import Date from '../date/date';
import TopicGroup from '../topic-group/topic-group';

export default function Card({
  post,
}: {
  post: IPost
}) {
  return (
    <Link href="/posts/[id]" as={`/posts/${post.slug}`}>
      <div className="w-full rounded-2lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300">
        <img className="w-full h-40 md:h-56 object-cover rounded-r-2lg" src={post.heroImage.secure_url} alt={`${post.heroImage.context.custom.alt || post.title}`} />
        <div className="px-4 pt-4 pb-2">
          <div className="font-semibold text-xl md:text-2xl mb-2 leading-tight">{post.title}</div>
          <div className="font-normal text-sm md:text-base mb-2 text-gray-600 italic"><Date dateString={post.publishDate} /></div>
          <p className="text-sm md:text-base overflow-hidden leading-normal font-medium truncate-multiline">
            {post.description}
          </p>
        </div>
        <div className="px-4 p-1">
          <TopicGroup topics={post.topicsCollection.items} isPill />
        </div>
      </div>
    </Link>
  );
}
