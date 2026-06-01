import styles from './Instagram.module.scss'

export class Instagram {
  public render() {
    return `
    <section id="instagram" class="${styles.instagram}">
    <div class="${styles.content} container">
    <div class="${styles.info}">
    <h2 class="${styles.title} section-title--big">Instagram</h2>
    <p class="${styles.text}">If you area a person who enjoys photography, then I highly recommend
    that you check out my Instagram. I’m an avid traveller and I capture the
    best moments that I would love to cherish with the world</p>
    <a class="${styles.link} link" href="#">Follow me on IG</a>
</div>
<img class="${styles.image}" src="/images/raster/instagram-decorate.jpg" width="720" height="600" alt="" loading="lazy"/>
</div>
</section>
    `
  }
}
