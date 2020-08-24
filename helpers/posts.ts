export function getReadingTime(post: IPost) {
  const AVG_READING_TIME = 200;
  const regex = /\w+/g;

  return Math.ceil((post.contentHtml || '').match(regex).length / AVG_READING_TIME);
}

export function test() {
  return 0;
}
