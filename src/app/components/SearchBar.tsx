import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="border  border-gray-300 input-search
            py-2 px-4 w-full focus:outline-none
            focus:border-blue-500"
          value={query}
          onChange={handleChange}
          placeholder="Search for a movie, tv show, person......"
        />
        <button className=" btn-search rounded-r" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
