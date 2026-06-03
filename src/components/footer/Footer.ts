import styles from './Footer.module.scss'

export class Footer {
  public render() {
    return `
    <footer id="footer" class="${styles.footer}">
    <div class="container">
    <div class="${styles.contentWrapper}">
        <div>
    <img class="${styles.logo}" src="/images/vector/footer-logo.svg" width="131" height="40" alt="Логотип компании" loading="lazy"/>
    <ul class="${styles.socialLinks}" aria-label="Социальные сети">
    <li class="${styles.item}">
    <a href="#" target="_blank" rel="noreferrer noopener"><img src="/images/vector/twitter.svg" width="24" height="24" alt="Twitter" loading="lazy"></a></li>
    <li class="${styles.item}">
    <a href="#" target="_blank"  rel="noreferrer noopener"><img src="/images/vector/dribbble.svg" width="24" height="24" alt="Dribbble" loading="lazy"/></a></li>
    <li class="${styles.item}">
    <a href="#" target="_blank"  rel="noreferrer noopener"><img src="/images/vector/linkedin.svg" width="24" height="24" alt="Linkedin" loading="lazy"/></a></li>
</ul>
</div>
<nav aria-label="Навигация по сайту">
<ul class="${styles.navLinks}">
<li><a href="/" class="${styles.link}">Home</a></li>
<li><a href="#" class="${styles.link}">Store</a></li>
<li><a href="#" class="${styles.link}">About</a></li>
<li><a href="#" class="${styles.link}">Blog</a></li>
<li><a href="#" class="${styles.link}">Work</a></li>
<li><a href="#" class="${styles.link}">Reading List</a></li>
<li><a href="#" class="${styles.link}">Process</a></li>
</ul>
</nav>
</div>
<small class="${styles.copyright}">Not Copyright 2020 • Robin Williams. Webflow cloneable</small>
</div>
</footer>
    `
  }
}
