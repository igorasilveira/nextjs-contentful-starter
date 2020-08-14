import Date from '../date/date';

export default function Card({
  post,
}: {
  post: Post
}) {
  return (
    <div className="w-full rounded-2lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl scale-125 duration-300">
      <img className="w-full h-48 md:h-56 object-cover" src={post.image} alt={`${post.title}`} />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl md:text-3xl mb-2 leading-tight">{post.title}</div>
        <div className="font-normal text-sm md:text-base mb-2 text-gray-600"><Date dateString={post.date} /></div>
        <p className="text-sm md:text-base overflow-hidden truncate-multiline">
          {post.excerpt}
        </p>
      </div>
      <div className="px-6 pt-1 pb-4">
        <span className="inline-block shadow-md bg-carolina-blue rounded-full px-3 py-1 my-1 text-xs md:text-sm font-semibold text-ghost-white mr-2">photography</span>
        <span className="inline-block shadow-md bg-burnt-sienna rounded-full px-3 py-1 my-1 text-xs md:text-sm font-semibold text-ghost-white mr-2">travel</span>
        <span className="inline-block shadow-md bg-minion-yellow rounded-full px-3 py-1 my-1 text-xs md:text-sm font-semibold text-ghost-white">winterwinter</span>
      </div>
    </div>
  );
}
