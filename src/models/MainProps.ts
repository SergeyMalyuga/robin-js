import type { Header } from '../components/header/Header.ts';
import type {Hero} from '../components/hero/Hero.ts';
import type {Experience} from '../components/experience/Experience.ts';
import type {Values} from '../components/values/Values.ts';

export interface MainProps {
  header: Header;
  hero: Hero;
  experience: Experience;
  values: Values;
}
