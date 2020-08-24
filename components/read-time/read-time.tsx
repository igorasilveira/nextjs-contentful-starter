import { getReadingTime } from '../../helpers/posts';

export default function ReadTime({ post }: { post: IPost }) {
  return (<span>{`${getReadingTime(post)} min read`}</span>);
}
