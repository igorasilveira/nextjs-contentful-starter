import classnames from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Topic({
  topic,
  isLink = false,
}: {
  topic: ITopic,
  isLink?: boolean
}) {
  const content: ReactNode = (
    <a>
      <span className={
        classnames(
          'text-xl md:text-2xl text-rich-black font-normal tracking-wide',
          { 'mr-4': topic.linkedFrom },
        )
      }
      >
        {topic.title}

      </span>
      {
        topic.linkedFrom
        && <span className="text-xl md:text-2xl font-semibold" style={{ color: topic.color }}>{topic.linkedFrom.blogPostCollection.total}</span>
      }
    </a>
  );

  return (
    <button
      type="button"
      aria-label={topic.title}
      disabled={!isLink}
      className={classnames(
        `rounded-full bg-ghost-white shadow-md
          transition-all duration-300
          px-4 py-2
          flex flex-row items-center
        `,
        { 'hover:shadow-xl': isLink },
        { 'cursor-default': !isLink },
      )}
    >
      {isLink
        && (
          <Link href="/topics/[id]" as={`/topics/${topic.slug}`}>
            {content}
          </Link>
        )}

      {!isLink && content}
    </button>
  );
}
