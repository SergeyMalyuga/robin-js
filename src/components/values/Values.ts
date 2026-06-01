import styles from './Values.module.scss';

export class Values {
  public render() {
    return `
    <section class="${styles.values}">
    <div class="${styles.content} ${styles.container}">
    <div class="${styles.info}">
<h2 class="section-title section-title--big ${styles.title}">Philosophy & values</h2>
<p class="${styles.text}">I think everyone wants the same thing - relationship with humanity,
peace with the metaphysical, and experience with the universe.
I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
<a class="link" href="#">More about me</a>
</div>
<picture class="${styles.imageWrapper}">
<source srcset="/images/raster/values-bg-mobile.jpg" media="(max-width: 480px)"/>
<img src="/images/raster/values-bg-desktop.jpg" width="1440" height="1200" alt="" loading="lazy">
</picture>
</div>
</section>
    `
  }
}
