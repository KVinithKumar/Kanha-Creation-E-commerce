import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    subcategories: [
      { id: 'sofas', name: 'Sofas' },
      { id: 'recliners', name: 'Recliners' },
      { id: 'chairs', name: 'Chairs' },
      { id: 'tables', name: 'Tables' },
      { id: 'bookcases', name: 'Book cases & shelves' }
    ]
  },
  {
    id: 'bed-room',
    name: 'Bed Room',
    subcategories: [
      { id: 'beds', name: 'Beds' },
      { id: 'wardrobes', name: 'Wardrobes' },
      { id: 'dressing-tables', name: 'Dressing Tables' },
      { id: 'nightstands', name: 'Nightstands' }
    ]
  },
  {
    id: 'dining-room',
    name: 'Dining Room',
    subcategories: [
      { id: 'dining-sets', name: 'Dining Sets' },
      { id: 'dining-tables', name: 'Dining Tables' },
      { id: 'dining-chairs', name: 'Dining Chairs' },
      { id: 'bar-stools', name: 'Bar Stools' }
    ]
  },
  {
    id: 'home-office',
    name: 'Home Office',
    subcategories: [
      { id: 'office-chairs', name: 'Office Chairs' },
      { id: 'office-tables', name: 'Office Tables' },
      { id: 'office-storage', name: 'Office Storage' },
      { id: 'gaming-chairs', name: 'Gaming Chairs' }
    ]
  },
  {
    id: 'kids-furniture',
    name: 'Kids Furniture',
    subcategories: [
      { id: 'kids-beds', name: 'Kids Beds' },
      { id: 'study-tables', name: 'Study Tables' },
      { id: 'kids-chairs', name: 'Kids Chairs' },
      { id: 'toy-storage', name: 'Toy Storage' }
    ]
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
    subcategories: [
      { id: 'garden-furniture', name: 'Garden Furniture' },
      { id: 'patio-sets', name: 'Patio Sets' },
      { id: 'outdoor-chairs', name: 'Outdoor Chairs' },
      { id: 'outdoor-tables', name: 'Outdoor Tables' }
    ]
  }
];