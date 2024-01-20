import { useEffect, useState } from 'react';
import { countries } from '@/constants/data';
import { CountryCard } from '@/components/country-card';
import { HomeSearchbar } from '@/components/home-searchbar';

export const HomePage = () => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [nameQuery, setNameQuery] = useState('');
  const [regionQuery, setRegionQuery] = useState('');

  // filter countries by name and region
  const filter = () => {
    const filtered = countries.filter((country) => {
      const nameMatch = country.name
        .toLowerCase()
        .includes(nameQuery.toLowerCase());

      const regionMatch = country.region
        .toLowerCase()
        .includes(regionQuery.toLowerCase());

      return nameMatch && regionMatch;
    });

    setFilteredCountries(filtered);
  };

  useEffect(() => {
    filter();
  }, [nameQuery, regionQuery]);

  return (
    <>
      {/* TODO: search bar */}
      <HomeSearchbar
        setNameQuery={setNameQuery}
        setRegionQuery={setRegionQuery}
      />

      {/* country list */}
      {filteredCountries.length > 0 ? (
        <div className="xs:px-12 mt-10 grid grid-cols-1 items-start gap-16 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
          {filteredCountries.map((country) => (
            <CountryCard
              key={country.alpha3Code}
              country={country}
            />
          ))}
        </div>
      ) : (
        <p className="mt-10">No countries found.</p>
      )}
    </>
  );
};
