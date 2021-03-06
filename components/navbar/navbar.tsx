import classnames from 'classnames';
import Link from 'next/link';

import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <nav className={
      classnames(
        styles.container,
        `h-16 md:h-screen w-screen md:w-16 md:hover:w-full
         fixed bottom-0 md:left-0 shadow-2xl 
         flex flex-row md:flex-col items-center
         z-20
         transition-all duration-500 ease
         md:hover:shadow-3xl
         group`,
      )
    }
    >
      <div className="hidden md:block my-4 mt-12">
        {/* <Link href="/"> */}
        <img className="h-20 w-16" src="/images/logo.svg" alt="DailyDev.io logo" />
        {/* </Link> */}
      </div>
      <ul className={`group flex flex-row md:flex-col flex-grow
        w-full justify-around md:justify-start md:items-center
        md:my-2`}
      >
        <NavBarLink text="Home" href="/" icon="home" />
        <NavBarLink classes="md:flex-grow" text="Topics" href="/topics" icon="bookmark" />
        <NavBarLink text="About" href="/about" icon="info" />
      </ul>
    </nav>
  );
}

const NavBarLink = ({
  text,
  href,
  icon,
  classes = '',
  mobileOnly = false,
}: {
  text: string
  href: string,
  icon: string,
  classes?: string,
  mobileOnly?: boolean,
}) => (
  <li className={classnames(
    `group cursor-pointer w-full ${classes}`,
    { 'block md:hidden': mobileOnly },
  )}
  >
    <Link href={href}>
      <div className={
        classnames(styles.navItem,
          `group flex flex-row items-center justify-center md:justify-start
          text-white opacity-75
          text-opacity-50
          hover:opacity-100
          hover:text-opacity-100
          md:opacity-100
          p-4
          transition-all duration-150 ease-in`)
      }
      >
        <img width={36} height={36} src={`/icons/${icon}.png`} alt={`Menu icon for ${text}`} />
        <span className="text-md hidden md:group-hover:flex ml-4 font-bold">{text}</span>
      </div>
    </Link>
  </li>
);
