import { CollectionConfig, Validate } from 'payload/types';
import CityCustomTextField from '../components/CityCustomTextField/CityCustomTextField';
import {
  validateNrDowodu,
  validateNrKonta,
  validatePesel,
  validateUrl,
} from '../components/forms/validation';
import moment from 'moment';
import AgeCustomTextField from '../components/AgeCustomTextField/AgeCustomTextField';
import LanguagesCustomTextField from '../components/LanguagesCustomTextField/LanguagesCustomTextField';

// TODO: add i18n
// TODO: PDF actor and many acotrs if possible
const Actors: CollectionConfig = {
  slug: 'aktorzy',
  labels: {
    singular: 'Aktor',
    plural: 'Aktorzy',
  },
  admin: {
    useAsTitle: 'nazwisko',
    // TODO: zapytać o szukać vs filtrować (kategoria, miasto mieszkania, język) 
    listSearchableFields: ['imie', 'nazwisko', 'kategoria', 'miastoZamieszkania' ],
  },
  fields: [
    {
      name: 'kategoria',
      label: 'Kategoria',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Aktorzy',
          value: 'aktorzy',
        },
        {
          label: 'Aktorki',
          value: 'aktorki',
        },
        {
          label: 'Młodzi',
          value: 'mlodzi',
        },
      ],
    },
    {
      name: 'imie',
      label: 'Imię',
      type: 'text',
      required: true,
    },
    {
      name: 'nazwisko',
      label: 'Nazwisko',
      type: 'text',
      required: true,
    },
    {
      name: 'pesel',
      label: 'Pesel',
      type: 'number',
      required: true,
      validate: validatePesel,
    },
    {
      name: 'nrDowodu',
      label: 'Numer Dowodu',
      type: 'text',
      required: true,
      validate: validateNrDowodu,
    },
    {
      name: 'daneBankowe',
      label: 'Dane Bankowe',
      type: 'group',
      fields: [
        {
          name: 'bank',
          label: 'Bank',
          type: 'text',
          required: true,
        },
        {
          name: 'numerKonta',
          label: 'Numer konta',
          type: 'text',
          required: true,
          validate: validateNrKonta,
        },
      ],
    },
    {
      name: 'imionaRodzicow',
      label: 'Imiona Rodziców',
      type: 'text',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'dataUrodzenia',
          label: 'Data Urodzenia',
          type: 'date',
          localized: true,
          required: true,
          admin: {
            date: {
              displayFormat: 'dd.MM.yyyy',
            },
          },
        },
        {
          name: 'wiek',
          type: 'text',
          admin: {
            readOnly: true,
            components: {
              Field: AgeCustomTextField
            }
          },
        },
        {
          name: 'miejsceUrodzenia',
          label: 'Miejsce Urodzenia',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'adres',
      label: 'Adres Zamieszkania',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'ulica',
              label: 'Ulica',
              type: 'text',
              required: true,
              admin: {
                width: '60%',
              },
            },
            {
              name: 'numer',
              label: 'Numer',
              type: 'text',
              required: true,
              admin: {
                width: '20%',
              },
            },
            {
              name: 'nrMieszkania',
              label: 'Numer Mieszkania',
              type: 'text',
              admin: {
                width: '20%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'kodPocztowy',
              label: 'Kod Pocztowy',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'miasto',
              label: 'Miasto',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'pokazMiasto',
          label: 'Pokaż Miasto',
          type: 'checkbox',
          required: true,
        },
      ],
    },
    {
      name: 'miastoZamieszkania',
      type: 'ui',
      label: 'Miasto Zamieszkania',
      admin: {
        components: {
          Field: CityCustomTextField
        }
      }
    },
    {
      name: 'urzadSkrabowy',
      label: 'Właściwy Urząd Skrabowy',
      type: 'number',
      required: true,
    },
    {
      name: 'wyksztalcenie',
      label: 'Wykształcenie',
      type: 'group',
      fields: [
        {
          name: 'wyksztalcenie',
          label: 'Wykształcenie',
          type: 'checkbox',
        },
        {
          name: 'nazwaSzkoly',
          label: 'Nazwa Szkoły',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData.szkola
          },
        },
        {
          name: 'rok',
          label: 'Rok',
          type: 'text',
        },
        {
          name: 'rokUkonczenia',
          label: 'Rok Ukonczenia ',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'monthOnly',
              displayFormat: 'yyyy',
            },
            condition: (_, siblingData) => siblingData.szkola
          },
        },
      ],
    },
    {
      name: 'etat',
      label: 'Etat',
      type: 'group',
      fields: [
        {
          name: 'etat',
          label: 'Etat',
          type: 'checkbox',
        },
        {
          name: 'teatr',
          label: 'Teatr',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData.etat
          },
        },
      ],
    },
    {
      name: 'kolorWlosow',
      label: 'Kolor Włosów',
      type: 'text',
    },
    {
      name: 'dlugoscWlosow',
      label: 'Długośc Włosów',
      type: 'text',
    },
    {
      name: 'kolorOczu',
      label: 'Kolor Oczu',
      type: 'text',
    },
    {
      name: 'wzrost',
      label: 'Wzrost',
      type: 'number',
    },
    {
      name: 'potencjalneMiastaZamieszkana',
      type: 'array',
      fields: [
        {
          name: 'miasto',
          type: 'text',
        }
      ]
    },
    {
      name: 'pokazPotencjalneMiasta',
      label: 'Pokaż Potencjalne Miasto',
      type: 'checkbox',
    },
    {
      name: 'kolnierzyk',
      label: 'Kołnierzyk',
      type: 'number',
    },
    {
      name: 'klatkaPiersiowa',
      label: 'Klatka Piersiowa',
      type: 'number',
    },
    {
      name: 'pas',
      label: 'Pas',
      type: 'number',
    },
    {
      name: 'biodra',
      label: 'Biodra',
      type: 'number',
    },
    {
      name: 'numerButa',
      label: 'Numer Buta',
      type: 'number',
    },
    {
      name: 'rozmiarUbran',
      label: 'Rozmiar Ubrań',
      type: 'number',
    },
    {
      name: 'rozmiarGarnituru',
      label: 'Rozmiar Garnituru',
      type: 'number',
    },
    {
      name: 'rozmiarDzinsow',
      label: 'Rozmiar Dsżinsów',
      type: 'number',
    },
    {
      name: 'umiejetnosci',
      label: 'Umiejętności',
      type: 'group',
      fields: [
        {
          name: 'prawoJazdy',
          type: 'group',
          fields: [
            {
              name: 'pokazPrawoJazdy',
              label: 'Pokaż Prawo Jazdy',
              type: 'checkbox',
            },
            {
              name: 'typ',
              label: 'Typ',
              type: 'select',
              options: [
                {
                  value: 'AM',
                  label: 'AM',
                },
                {
                  value: 'A1',
                  label: 'A1',
                },
                {
                  value: 'A2',
                  label: 'A2',
                },
                {
                  value: 'A',
                  label: 'A',
                },
                {
                  value: 'B1',
                  label: 'B1',
                },
                {
                  value: 'B',
                  label: 'B',
                },
                {
                  value: 'B+E',
                  label: 'B+E',
                },
                {
                  value: 'C',
                  label: 'C',
                },
                {
                  value: 'C1',
                  label: 'C1',
                },
                {
                  value: 'C1+E',
                  label: 'C1+E',
                },
                {
                  value: 'C+E',
                  label: 'C+E',
                },
                {
                  value: 'D',
                  label: 'D',
                },
                {
                  value: 'D1',
                  label: 'D1',
                },
                {
                  value: 'D1+E',
                  label: 'D1+E',
                },
                {
                  value: 'D+E',
                  label: 'D+E',
                },
                {
                  value: 'T',
                  label: 'T',
                },
              ],
              admin: {
                condition: (_, siblingData) => siblingData.pokazPrawoJazdy
              },
            },
          ],
        },
        {
          name: 'jezyki',
          type: 'group',
          fields: [
            {
              name: 'jezykiObcy',
              label: 'Języki Obcy',
              type: 'checkbox',
            },
            {
              name: 'jezyki',
              label: 'Języki',
              type: 'array',
              admin: {
                condition: (_, siblingData) => siblingData.jezykiObcy
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'language',
                      label: 'Język',
                      type: 'relationship',
                      relationTo: 'jezyki',
                      admin: {
                        width: '80%',
                      },
                    },
                    {
                      name: 'poziom',
                      label: 'Poziom',
                      type: 'select',
                      options: [
                        {
                          label: 'A1',
                          value: 'A1',
                        },
                        {
                          label: 'A2',
                          value: 'A2',
                        },
                        {
                          label: 'B1',
                          value: 'B1',
                        },
                        {
                          label: 'B2',
                          value: 'B2',
                        },
                        {
                          label: 'C1',
                          value: 'C1',
                        },
                        {
                          label: 'C2',
                          value: 'C2',
                        },
                      ],
                      admin: {
                        width: '20%',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'spiewy',
          type: 'group',
          fields: [
            {
              name: 'spiew',
              label: 'Śpiew',
              type: 'checkbox',
            },
            {
              name: 'spiewy',
              label: 'Śpiewy',
              type: 'array',
              admin: {
                condition: (_, siblingData) => siblingData.spiew
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'spiew',
                      label: 'Śpiew',
                      type: 'relationship',
                      relationTo: 'spiewy',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'tancy',
          type: 'group',
          fields: [
            {
              name: 'taniec',
              label: 'Taniec',
              type: 'checkbox',
            },
            {
              name: 'tancy',
              label: 'Tańcy',
              type: 'array',
              admin: {
                condition: (_, siblingData) => siblingData.taniec
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'taniec',
                      label: 'Taniec',
                      type: 'relationship',
                      relationTo: 'tancy',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'instrumenty',
          label: 'Instrumenty',
          type: 'group',
          fields: [
            {
              name: 'instrument',
              label: 'Instrument',
              type: 'checkbox',
            },
            {
              name: 'instrumenty',
              label: 'Instrumenty',
              type: 'array',
              admin: {
                condition: (_, siblingData) => siblingData.instrument
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'instrument',
                      label: 'Instrument',
                      type: 'relationship',
                      relationTo: 'instrumenty',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'pozostaleUmiejetnosci',
          label: 'Pozostałe Umiejętności',
          type: 'group',
          fields: [
            {
              name: 'pokazInneUmiejetnosci',
              label: 'Pozostałe Umiejętności',
              type: 'checkbox',
            },
            {
              name: 'umiejetnosci',
              label: 'Pozostałe Umiejętności',
              type: 'array',
              admin: {
                condition: (_, siblingData) => siblingData.pokazInneUmiejetnosci
              },
              fields: [
                {
                  name: 'umiejetnosc',
                  label: 'Umiejętność',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
    // {
    //   name: 'jezyki',
    //   type: 'ui',
    //   admin: {
    //     components: {
    //       Field: LanguagesCustomTextField
    //     },
    //   }
    // },
    {
      name: 'filmografia',
      label: 'Filmografia',
      type: 'group',
      fields: [
        {
          name: 'pokazFilmografia',
          label: 'Pokaż Filmografia',
          type: 'checkbox',
        },
        {
          name: 'filmografia',
          label: 'Filmografia',
          type: 'array',
          admin: {
            condition: (_, siblingData) => siblingData.pokazFilmografia
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'tytul',
                  label: 'Tytuł',
                  type: 'text',
                  admin: {
                    width: '80%',
                  },
                },
                {
                  name: 'rok',
                  label: 'Rok',
                  type: 'date',
                  admin: {
                    width: '20%',
                    date: {
                      pickerAppearance: 'monthOnly',
                      displayFormat: 'yyyy',
                    },
                  },
                },
              ],
            },
            {
              name: 'najwazniejszeRoly',
              label: 'Najważniejsze Roly',
              type: 'array',
              fields: [
                {
                  name: 'rola',
                  label: 'Rola',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'nagrody',
      label: 'Nagrody',
      type: 'group',
      fields: [
        {
          name: 'pokazNagrody',
          label: 'Pokaż Nagrody',
          type: 'checkbox',
        },
        {
          name: 'nagrody',
          label: 'Nagrody',
          type: 'array',
          admin: {
            condition: (_, siblingData) => siblingData.pokazNagrody
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'nagroda',
                  label: 'Nagroda',
                  type: 'text',
                  admin: {
                    width: '80%',
                  },
                },
                {
                  name: 'rokNagrody',
                  label: 'Rok',
                  type: 'date',
                  admin: {
                    width: '20%',
                    date: {
                      pickerAppearance: 'monthOnly',
                      displayFormat: 'yyyy',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'filmpolski',
      label: 'Filmpolski',
      type: 'text',
      validate: validateUrl,
    },
    {
      name: 'youtube',
      label: 'Youtube',
      type: 'text',
      required: false,
      validate: validateUrl,
    },
    {
      name: 'facebook',
      label: 'Facebook',
      type: 'text',
      required: false,
      validate: validateUrl,
    },
    {
      name: 'instagram',
      label: 'Instagram',
      type: 'text',
      required: false,
      validate: validateUrl,
    },
    {
      name: 'www',
      label: 'WWWW',
      type: 'text',
      required: false,
      validate: validateUrl,
    },
    {
      name: 'wizytowki',
      type: 'array',
      fields: [
        {
          name: 'nazwa',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
          validate: validateUrl,
        },
      ],
    },
  ],
};

export default Actors;
