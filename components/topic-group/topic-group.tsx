import classnames from 'classnames';

import Topic from '../topic/topic';

export default function TopicGroup({
  topics,
  isLink = false,
  isPill = false,
}: {
  topics: ITopic[],
  isLink?: boolean
  isPill?: boolean
}) {
  return (
    <div className="my-2 md:my-4 flex flex-row flex-wrap">
      {topics.map((topic: ITopic) => (
        <div
          key={topic.slug}
          className={
            classnames(
              { 'mb-4 mr-4': !isPill },
              { 'mb-2 mr-2': isPill },
            )
          }
        >
          <Topic isLink={isLink} isPill={isPill} topic={topic} />
        </div>
      ))}
    </div>
  );
}
