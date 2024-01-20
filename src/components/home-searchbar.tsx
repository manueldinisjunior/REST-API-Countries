import { ChevronDown, Search } from 'lucide-react';

export const HomeSearchbar = ({
  setNameQuery,
  setRegionQuery,
}: {
  setNameQuery: (name: string) => void;
  setRegionQuery: (region: string) => void;
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-12">
      {/* name search input */}
      <label className="bg-primary flex w-full max-w-full items-center gap-x-3 rounded-md px-4 py-4 drop-shadow sm:gap-x-6 sm:px-8 md:max-w-md">
        <Search
          size={16}
          className="shrink-0"
        />
        <input
          type="text"
          placeholder="Search for a country..."
          className="bg-transparent placeholder-gray-500 outline-none"
          onChange={(e) => setNameQuery(e.target.value)}
        />
      </label>

      {/* region filter */}
      <label className="bg-primary xs:max-w-52 relative block w-full max-w-full overflow-hidden rounded-md drop-shadow">
        <select
          className="bg-primary w-full appearance-none bg-right px-5 py-4 focus-visible:outline-none"
          onChange={(e) => setRegionQuery(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
        <div className="center-flex pointer-events-none absolute right-0 top-0 h-full w-[54px] bg-transparent">
          <ChevronDown size={14} />
        </div>
      </label>
    </div>
  );
};
