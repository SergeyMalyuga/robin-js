import styles from './Hero.module.scss';

export class Hero {

  public render() {
    return `
  <section class="${styles.hero}">
  <div class="${styles.content}">
  <div class="${styles.wrapperImage}">
<img class="${styles.image}" src="/images/raster/hero-robin.jpg" width="750" height="650" alt="Robin W." loading="eager"/>
</div>
<div class="${styles.info}">
<h1 class="${styles.title}">I’m Robin Williams. A Product Designer <span>based in Italy.</span></h1>
<p >I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
</div>
</div>
</section
  `
  }
}
