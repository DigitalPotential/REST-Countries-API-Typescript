export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { official: string; common: string } };
  };
  tld: string[];
  alpha2Code: string;
  alpha3Code: string;
  cca3: string;
  callingCodes: string[];
  capital?: string;
  altSpellings?: string[];
  subregion: string;
  region: Region;
  population: number;
  latlng?: number[];
  demonym: string;
  area?: number;
  timezones: string[];
  borders?: string[];
  numericCode: string;
  flags: Flags;
  currencies: { [key: string]: { name: string, symbol: string } }
  languages: {
    [key: string]: string;
  };
  translations: { [key: string]: { official: string; common: string } };
  flag: string;
  regionalBlocs?: RegionalBloc[];
  cioc?: string;
  independent: boolean;
  gini?: number;
  unMember?: boolean;
  status?: string;
}



export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export interface Flags {
  svg: string;
  png: string;
}


export interface RegionalBloc {
  acronym: string;
  name: string;
  otherNames?: string[];
  otherAcronyms?: string[];
}