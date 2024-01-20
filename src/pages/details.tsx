import { useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';
import { countries } from '@/constants/data';
import { getCountryName } from '@/lib/utils';

export const DetailsPage = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  const country = useMemo(() => {
    if (!code) {
      return null;
    }

    const country = countries.find(
      (country) => country.alpha3Code.toLowerCase() === code.toLowerCase(),
    );

    if (!country) {
      return null;
    }

    return country;
  }, [code]);

  const langageNames = useMemo(() => {
    if (!country) return null;
    const langages = country.languages.map((language) => language.name);
    return langages;
  }, [country]);

  const currencies = useMemo(() => {
    if (!country?.currencies) return null;
    const currencies = country.currencies.map((currency) => currency.name);
    return currencies;
  }, [country]);

  return (
    <>
      <button
        className="bg-primary flex items-center rounded-md px-8 py-1.5 drop-shadow"
        onClick={() => navigate('/rest-countries')}
      >
        <MoveLeft
          size={16}
          strokeWidth={3}
          className="mr-2"
        />
        <span>Back</span>
      </button>

      <div className="mt-20 !text-base">
        {country ? (
          <div className="flex flex-col items-center gap-x-32 gap-y-14 lg:flex-row">
            {/* Image */}
            <div className="w-full">
              <img
                src={country.flags.svg}
                alt={country.alpha3Code}
                className="max-h-[35rem] min-h-56 w-full object-cover drop-shadow"
              />
            </div>

            {/* Informations */}
            <div className="w-full">
              <h2 className="text-3xl font-extrabold">{country.name}</h2>

              <div className="mt-8 flex flex-col justify-between gap-y-14 md:flex-row">
                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">Native Name: </span>
                    <span>{country.nativeName}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span>{country.population.toLocaleString('en-EN')}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span>{country.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region: </span>
                    <span>{country.subregion}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    <span>{country.capital}</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">Top Level Domain: </span>
                    <span>{country.topLevelDomain}</span>
                  </p>
                  {!!currencies && (
                    <p>
                      <span className="font-semibold">Currencies: </span>
                      <span>{currencies.join(', ')}</span>
                    </p>
                  )}
                  {!!langageNames && (
                    <p>
                      <span className="font-semibold">Languages: </span>
                      <span>{langageNames.join(', ')}</span>
                    </p>
                  )}
                </div>
              </div>

              {!!country.borders && (
                <div className="mt-16">
                  <div className="flex flex-col gap-x-4 gap-y-6 lg:flex-row">
                    <span className="shrink-0 font-semibold">
                      Border Countries:{' '}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {country.borders.map((border) => {
                        // remove last character beacuse the function getCountryName()
                        // only accepts 2-characters country code. (e.g. TWN -> TW)
                        let twoCharList = border.split('');
                        twoCharList.pop(); // or twoCharList.splice(-1, 1);
                        const twCharBorder = twoCharList.join('');

                        return (
                          <Link
                            to={`/rest-countries/${border.toLowerCase()}`}
                            key={border}
                            className="bg-primary flex items-center rounded px-5 py-1 text-sm drop-shadow"
                          >
                            {getCountryName(twCharBorder)}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          'Country not found.'
        )}
      </div>
    </>
  );
};
