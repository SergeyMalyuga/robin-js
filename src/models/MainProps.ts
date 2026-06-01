import type { Header } from '../components/header/Header.ts';
import type {Hero} from '../components/hero/Hero.ts';
import type {Experience} from '../components/experience/Experience.ts';
import type {Values} from '../components/values/Values.ts';
import type {SkillSet} from '../components/skillset/SkillSet.ts';
import type {Projects} from '../components/projects/Projects.ts';

export interface MainProps {
  header: Header;
  hero: Hero;
  experience: Experience;
  values: Values;
  skillSet: SkillSet;
  projects: Projects;
}
