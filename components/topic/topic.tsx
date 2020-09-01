import classnames from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Topic({
  topic,
  isLink = false,
  isPill = false,
}: {
  topic: ITopic,
  isLink?: boolean
  isPill?: boolean
}) {
  const content: ReactNode = (
    <a>
      <span
        className={
          classnames(
            'font-normal tracking-wide',
            { 'text-xl md:text-2xl text-rich-black': !isPill },
            { 'mr-4': topic.linkedFrom },
            { 'inline-block text-xs md:text-sm text-ghost-white font-medium': isPill },
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
          flex flex-row items-center
        `,
        { 'hover:shadow-xl': isLink },
        { 'cursor-default': !isLink },
        { 'px-4 py-2': !isPill },
        { 'px-3 py-1': isPill },
      )}
      style={{ backgroundColor: isPill ? topic.color : 'transparent' }}
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
