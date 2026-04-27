import type {DataHook} from '../types/DataHook.type.ts';
import type {MainProps} from '../models/MainProps.ts';
import type {Header} from '../components/header/Header.ts';

export class MainPage {
  private container!: HTMLElement;
  private header!: Header;

  public constructor(container: HTMLElement, props: MainProps) {
    this.container = container;
    this.header = props.header;
  }

  public render(): void {
    this.container.innerHTML = `
${this.header.render()}
    <main></main>
    `;
  }

  public mount(element: HTMLElement, data: DataHook): void {
    const container = this.container.querySelector(data) as HTMLElement;
    container?.appendChild(element);
  }
}
