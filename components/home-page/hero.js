import Image from 'next/image';

import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sumin.jpg"
          alt="An image showing Sumin"
          width={1000}
          height={1000}
        />
      </div>
      <h1>Sumin`s sulog</h1>
      <p>I am FrontEnd Developer.</p>
    </section>
  );
}
