import Topic from '../topic/topic';

export default function TopicGroup({
  topics,
  isLink = false,
}: {
  topics: ITopic[],
  isLink?: boolean
}) {
  return (
    <div className="my-2 md:my-4 flex flex-row flex-wrap">
      {topics.map((topic: ITopic) => (
        <div key={topic.id} className="mb-4 mr-4">
          <Topic isLink={isLink} topic={topic} />
        </div>
      ))}
    </div>
  );
}
