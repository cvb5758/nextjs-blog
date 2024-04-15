import Link from 'next/link';
import classes from './main-navigation.module.css';
import Logo from './logo';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.flex}>
        <Link href="/">
          <Logo />
        </Link>

        <Link href="/posts" className={classes.post}>
          Posts
        </Link>
      </div>
      <nav>
        <ul className={classes.ul}>
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
