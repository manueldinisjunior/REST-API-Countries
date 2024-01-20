export type Flag = {
  svg: string;
  png: string;
};

export type Currency = {
  code: string;
  name: string;
  symbol: string;
};

export type Language = {
  [key: string]: string | undefined;
  name: string;
  nativeName?: string;
};

export type Translations = {
  [key: string]: string;
};

export type LatLng = [number, number];

export type RegionalBloc = {
  acronym: string;
  name: string;
  otherAcronyms?: string[];
  otherNames?: string[];
};

export type Country = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital?: string;
  altSpellings?: string[];
  subregion: string;
  region: string;
  population: number;
  latlng?: LatLng;
  demonym: string;
  area?: number;
  timezones: string[];
  borders?: string[];
  nativeName: string;
  numericCode: string;
  flags: Flag;
  currencies?: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  cioc?: string;
  independent: boolean;
  gini?: number;
  regionalBlocs?: RegionalBloc[];
};
