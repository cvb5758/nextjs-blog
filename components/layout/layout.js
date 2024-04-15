import MainNavigation from './main-navigation';
import classes from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
}
