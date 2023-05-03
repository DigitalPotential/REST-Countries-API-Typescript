export interface Country {
    name: {
      common: string;
      official: string;
      nativeName: { [key: string]: { official: string; common: string } };
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: { [key: string]: { name: string; symbol: string } };
    idd: { root: string; suffixes: string[] };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: { [key: string]: string };
    translations: { [key: string]: { official: string; common: string } };
  }
  