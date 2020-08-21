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
      <div className="w-full rounded-2lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300 bg-ghost-white">
        <div className="p-4 lg:p-6">
          <img className="w-full h-40 md:h-56 object-cover rounded-lg shadow-lg" src={post.heroImage.secure_url} alt={post.heroImage.context?.custom.alt || post.title} />
        </div>
        <div className="px-2 lg:px-4">
          <div className="px-2 pt-2 pb-2">
            <div className="font-semibold text-xl md:text-2xl mb-2 leading-tight truncate-multiline-3">{post.title}</div>
            <div className="font-normal text-sm md:text-base mb-2 text-gray-600 italic"><Date dateString={post.publishDate} /></div>
            <p className="text-sm md:text-base overflow-hidden leading-normal font-medium truncate-multiline-3">
              {post.description}
            </p>
          </div>
          <div className="p-1">
            <TopicGroup topics={post.topicsCollection.items} isPill />
          </div>
        </div>
      </div>
    </Link>
  );
}
