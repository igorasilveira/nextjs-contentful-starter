import classnames from 'classnames';

import Card from '../card/card';

export default function CardGroup({
  posts,
}: {
  posts: Post[]
}) {
  return (
    <div className="flex flex-col flex-wrap md:flex-row -mx-1 lg:-mx-4">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={classnames(
            'my-2 px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3',
            { 'md:w-full lg:w-2/3': index === 0 },
          )}
        >
          <Card post={post} />
        </div>
      ))}
    </div>
  );
}
