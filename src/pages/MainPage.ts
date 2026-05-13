import type {DataHook} from '../types/DataHook.type.ts';
import type {MainProps} from '../models/MainProps.ts';
import type {Header} from '../components/header/Header.ts';
import type {Hero} from '../components/hero/Hero.ts';

export class MainPage {
  private container: HTMLElement;
  private header: Header;
  private hero: Hero;

  public constructor(container: HTMLElement, props: MainProps) {
    this.container = container;
    this.header = props.header;
    this.hero = props.hero;
  }

  public render(): void {
    this.container.innerHTML = `
${this.header.render()}
    <main>
    ${this.hero.render()}
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
