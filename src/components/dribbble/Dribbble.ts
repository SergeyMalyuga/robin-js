import styles from './Dribbble.module.scss'

export class Dribbble {
  public render() {
    return `
    <section id="dribble" class="section">
    <div class="${styles.content} container">
    <h2 class="section-title--big">Dribbble</h2>
    <p class="${styles.text}">Each dribbble shot is made with love and care.
    Do check out my work on Dribbble. Likes and comments are appreciated.</p>
    <a class="${styles.link} link" href="#">Follow me on Dribbble</a>
    <picture>
    <source srcset="/images/raster/dribble-mobile.png" media="(max-width: 480px)">
    <source srcset="/images/raster/dribbble-tablet.png" media="(max-width: 768px)">
        <img class="${styles.image}" src="/images/raster/dribbble-desktop.png" width="1076" height="640"
    alt="A browser window with previews of various sites" loading="lazy"/>
</picture>
</div>
</section>
  `
  }
}
