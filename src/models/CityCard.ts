import type {City} from '../constants/consts.ts';
import type {Image} from '../types/Image.ts';

export type CityCard = Record<City, Image[]>;
