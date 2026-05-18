import type {DataHook} from '../types/DataHook.type.ts';
import type {MainProps} from '../models/MainProps.ts';
import type {Header} from '../components/header/Header.ts';
import type {Hero} from '../components/hero/Hero.ts';
import type {Experience} from '../components/experience/Experience.ts';

export class MainPage {
  private container: HTMLElement;
  private header: Header;
  private hero: Hero;
  private experience: Experience;

  public constructor(container: HTMLElement, props: MainProps) {
    this.container = container;
    this.header = props.header;
    this.hero = props.hero;
    this.experience = props.experience;
  }

  public render(): void {
    this.container.innerHTML = `
    ${this.header.render()}
    <main>
      ${this.hero.render()}
      ${this.experience.render()}
    </main>
  `;
    this.header.init();
  }

  public mount(element: HTMLElement, data: DataHook): void {
    const container = this.container.querySelector(data) as HTMLElement;
    container?.appendChild(element);
  }

  public destroy(): void {
    this.header.destroy();
  }
}
