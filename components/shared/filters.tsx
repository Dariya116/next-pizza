

import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { CheckboxFiltersGroup, RangeSlider } from '../shared';
interface Props {
  className?: string;
}
export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      <div className="mt-5 border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          // value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
          // onValueChange={updatePrices}
        />
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: 'Сырный соус', value: '1' },
          { text: 'Сырный соус', value: '2' },
          { text: 'Сырный соус', value: '3' },
          { text: 'Сырный соус', value: '4' },
          { text: 'Сырный соус', value: '5' },
          { text: 'Сырный соус', value: '6' },
        ]}
        items={[
          { text: 'Сырный соус', value: '1' },
          { text: 'Классический соус', value: '2' },
          { text: 'Томаты', value: '3' },
          { text: 'Сыр', value: '4' },
          { text: 'Чеснок', value: '5' },
          { text: 'Перец', value: '6' },
          { text: 'Колбаски', value: '7' },
          { text: 'Грибы', value: '8' },
          { text: 'Томатный соус', value: '9' },
          { text: 'Цыпленок', value: '10' },
          { text: 'Лук', value: '11' },
        ]}
      />
    </div>
  );
};
