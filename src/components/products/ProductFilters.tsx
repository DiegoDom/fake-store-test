import type { ChangeEvent } from "react";

interface Props {
  search: string;
  onSearch: (value: string) => void;
  categories: string[];
  category: string;
  onCategoryChange: (value: string) => void;
}

export const ProductFilters = ({ search, onSearch, categories, category, onCategoryChange }: Props) => {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-4 justify-between">
      <div>
        <h1 className="text-3xl font-bold">All products</h1>
        <h2 className="text-xl">
          For <span className="text-accent">everybody</span>
        </h2>
      </div>

      <input className="input input-bordered w-xl" type="search" value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)} placeholder="Search products..." />

      <select className="select select-bordered" value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};
