import classnames from 'classnames';

export default function Cta({
  text,
  icon,
  iconLeft,
}: {
  text?: string,
  icon?: string,
  iconLeft?: boolean
}) {
  return (
    <button
      type="button"
      aria-label={text}
      className={classnames(
        `rounded-full bg-carolina-blue shadow-lg cursor-pointer hover:shadow-xl
          p-3 md:p-4
          flex flex-row items-center
        `,
        { 'flex-row-reverse': iconLeft },
      )}
    >
      {text && <span className="text-base md:text-lg text-ghost-white font-semibold">{text}</span>}
      <img
        className={classnames(
          { 'mr-2': iconLeft && text },
          { 'ml-2': !iconLeft && text },
        )}
        height={text ? 16 : 28}
        width={text ? 16 : 28}
        src={`/icons/${icon}.png`}
        alt={`${text}`}
      />
    </button>
  );
}
