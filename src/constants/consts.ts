import type {CityCard} from '../models/CityCard.ts';

export const Hooks = {
  CONTACT: '[data-hook="contact"]',
  GALLERY: '[data-hook="gallery"]',
} as const;

export enum City {
  ITALY = 'italy',
  AUSTRALIA = 'australia',
  INDIA = 'india',
  BRAZIL = 'brazil'
}

export const CITY_LOCATION: CityCard = {
  [City.ITALY]: [
    {
    url: '/images/raster/italy-street.jpg',
    alt: 'Street',
    width: 306,
    height: 420,
  },
    {
      url: '/images/raster/italy-cafe.jpg',
      alt: 'Cafe',
      width: 306,
      height: 420,
    },
    {
      url: '/images/raster/italy-chanal.jpg',
      alt: 'Chanal',
      width: 306,
      height: 420,
    },
    {
      url: '/images/raster/italy-sea.jpg',
      alt: 'Sea',
      width: 306,
      height: 420,
    }
  ],
  [City.AUSTRALIA]: [
    {
      url: '/images/raster/australia-lake.jpg',
      alt: 'Lake',
      width: 306,
      height: 420,
    },
    {
      url: '/images/raster/australia-kangaroo.jpg',
      alt: 'Kangaroo',
      width: 306,
      height: 420,
    },
    {
      url: '/images/raster/australia-bridge.jpg',
      alt: 'Bridge',
      width: 306,
      height: 420,
    },
    {
      url: '/images/raster/australia-mountains.jpg',
      alt: 'Mountains',
      width: 306,
      height: 420,
    },
    {
      url: '/images/raster/australia-sea.jpg',
      alt: 'Sea',
      width: 306,
      height: 420,
    },
  ],
  [City.INDIA]: [],
  [City.BRAZIL]: [
    {
      url: '/images/raster/brazil-carnival.avif',
      alt: 'Carnival',
      width: 306,
      height: 420,
    },
    {
      url: '/images/raster/brazil-river.avif',
      alt: 'River',
      width: 306,
      height: 420,
    },
    {
      url: '/images/raster/brazil-monument.jpg',
      alt: 'Monument',
      width: 306,
      height: 420,
    }
  ],
}
