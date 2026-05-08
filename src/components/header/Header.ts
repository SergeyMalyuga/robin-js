import styles from './Header.module.scss';

export class Header {
  public render() {
    return `
    <header class="${styles.header}" role="banner">
    <div class="${styles.content} container">
    <a class="${styles.linkLogo}" href="/">
<img src="/images/vector/logo.svg" width="78" height="24" alt="Логотип компании"/>
</a>
<nav aria-label="Основная навигация по сайту">
<ul class="${styles.navLinks}">
<li>
<a href="#">
Experience
</a>
</li>
<li>
<a href="#">
Work
</a>
</li>
<li>
<a href="#">
Photography
</a>
</li>
<li>
<a href="#">
Contact
</a>
</li>
</ul>
</nav>
</div>
</header>
`;
  }
}
