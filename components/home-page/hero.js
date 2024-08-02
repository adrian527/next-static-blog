import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hero.jpg"
          alt="An image showing me"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi I am developer</h1>
      <p>I blog about web development - especially frontend frameworks.</p>
    </section>
  );
}

export default Hero;
