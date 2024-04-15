import Link from 'next/link';
import classes from './main-navigation.module.css';
import Logo from './logo';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link href="/posts">Posts</Link>
          </li>
          <li className={classes.li}>
            <Link href="https://github.com/cvb5758" target="blank">
              github
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
