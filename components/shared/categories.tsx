'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';
interface Props {
  className?: string;
}
const cats = [
  { name: 'Пиццы', id: 1 },
  { name: 'Комбо', id: 2 },
  { name: 'Закуски', id: 3 },
  { name: 'Коктейли', id: 4 },
  { name: 'Кофе', id: 5 },
  { name: 'Напитки', id: 6 },
  { name: 'Десерты', id: 7 },
  { name: 'Десерты', id: 8 },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
console.log(categoryActiveId)
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map(({ name, id }, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && 'bg-white shadow-gray-200 text-primary',
          )}
          href={`/#${name}`}
          key={index}>
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
