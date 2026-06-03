import styles from './Gallery.module.scss'
import {City, CITY_LOCATION} from '../../constants/consts.ts';

export class Gallery {
  private city = City.ITALY;
  private section: HTMLElement | null = null;
  private citySwitcher: HTMLElement | null = null;

  public render() {
    const section = document.createElement('section');
    section.setAttribute('id', 'gallery');
    section.className = 'section';
    section.innerHTML = `
<div class="container">
    <h2 class="section-title section-title--big">Photography</h2>
    <p class="${styles.text}">Here is a collection of my best travel pictures that
    I took while travelling places all around the world.</p>
    <div class="${styles.citySwitcher}"  role="group" aria-label="Переключение городов">
    <button class="${styles.button} ${styles.active}" data-city="${City.ITALY}" type="button">Italy</button>
    <button class="${styles.button}" data-city="${City.AUSTRALIA}" type="button">Australia</button>
    <button class="${styles.button}" data-city="${City.INDIA}" type="button">India</button>
    <button class="${styles.button}" data-city="${City.BRAZIL}" type="button">Brazil</button>
</div>
    <ul class="${styles.list}"></ul>
</div>
    `
    this.section = section;
    this.citySwitcher = this.section.querySelector(`.${styles.citySwitcher}`);
    this.renderGallery(this.city);
    return section;
  }

  private renderGallery(city: City) {
    if (this.section) {
      const container = this.section.querySelector(`.${styles.list}`) as HTMLElement;
      const fragment = document.createDocumentFragment();
      const cities = CITY_LOCATION[city];
      container.innerHTML = '';
      if (!cities || cities.length === 0) {
        const empty = document.createElement('p');
        const item = document.createElement('li');
        empty.textContent = "А в кабине пусто, выросла капуста";
        item.appendChild(empty);
        container.appendChild(item);
      } else {
        cities.forEach(location => {
          const item = document.createElement('li');
          const img = document.createElement('img');
          img.className = styles.image;
          img.src = location.url;
          img.alt = location.alt;
          img.width = location.width;
          img.height = location.height;
          item.appendChild(img);
          fragment.appendChild(item);
        })
        container.appendChild(fragment);
      }
    }
  }

  public init() {
    if (this.citySwitcher) {
      this.citySwitcher.addEventListener('click', this.changeCity);
    }
  }

  private changeCity = (evt: MouseEvent) => {
    const target = evt.target as HTMLElement;
    const button = target.closest('button[data-city]') as HTMLButtonElement;
    if (!button) return
    const city = button.dataset.city;
    const currentActive = this.citySwitcher?.querySelector(`.${styles.active}`);
    currentActive?.classList.remove(styles.active);
    button.classList.add(styles.active);
    if (city && this.isValidCity(city) && this.section) {
      this.city = city;
      this.renderGallery(this.city);
    }
  }

  private isValidCity(value: string): value is City {
    return Object.values(City).includes(value as City);
  }

  public destroy(): void {
    if (this.citySwitcher) {
      this.citySwitcher.removeEventListener('click', this.changeCity);
    }
  }
}
