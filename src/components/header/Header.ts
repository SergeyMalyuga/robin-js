import styles from './Header.module.scss';

export class Header {
  private links: HTMLElement[] = [];
  private burger: HTMLButtonElement | null = null;
  private element: HTMLElement | null = null;

  public render() {
    return `
    <header class="${styles.header}" role="banner">
    <div class="${styles.content} container">
    <a class="${styles.linkLogo}" href="/">
<img src="/images/vector/logo.svg" width="78" height="24" alt="Логотип компании"/>
</a>
<nav class="${styles.nav}" id="main-nav" aria-label="Основная навигация по сайту">
<ul class="${styles.navLinks}">
<li>
<a class="${styles.linkNav}" href="#">
Experience
</a>
</li>
<li>
<a class="${styles.linkNav}" href="#">
Work
</a>
</li>
<li>
<a class="${styles.linkNav}" href="#">
Photography
</a>
</li>
<li>
<a class="${styles.linkNav}" href="#">
Contact
</a>
</li>
</ul>
</nav>
<button class="${styles.burger}"
        type="button"
        aria-expanded="false"
        aria-haspopup="true"
  aria-controls="main-nav"
  aria-label="Открыть меню">
<span></span>
</button>
</div>
</header>
`;
  }

  private toggleActiveLink = (evt: PointerEvent) => {
    evt.preventDefault();
    const clickedLink = evt.currentTarget as HTMLElement;
    this.links.forEach(link => link.classList.remove(`${styles.activeLink}`));
    clickedLink.classList.add(`${styles.activeLink}`);
  }

  private toggleNavMenu = () => {
    const navMenu = this.element?.querySelector(`.${styles.nav}`) as HTMLElement;
    if (navMenu && this.burger) {
      const isOpen = navMenu.classList.toggle(`${styles.navOpen}`);
      this.burger.classList.toggle(`${styles.burgerOpen}`);
      this.burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  }

  public init() {
    this.element = document.querySelector(`.${styles.header}`) as HTMLElement;
    if (this.element) {

      // Navigation
      this.links = Array.from(this.element.querySelectorAll<HTMLElement>(`.${styles.linkNav}`)) ?? [];
      this.links.forEach(link => {
        link.addEventListener('click', this.toggleActiveLink)
      })

      // Burger
      this.burger = this.element.querySelector(`.${styles.burger}`);
      if (this.burger) {
        this.burger.addEventListener('click', this.toggleNavMenu);
      }
    }
  }

  public destroy() {
    this.links.forEach(link => link.removeEventListener('click', this.toggleActiveLink));

    if (this.burger) {
      this.burger.removeEventListener('click', this.toggleNavMenu);
    }
  }
}
