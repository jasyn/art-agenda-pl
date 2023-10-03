import { CollectionConfig } from 'payload/types';

const Actors: CollectionConfig = {
  slug: 'aktorzy',
  labels: {
    singular: 'Aktor',
    plural: 'Aktorzy',
  },
  admin:{
    useAsTitle: 'Aktor'
  },
  fields: [
    {
      name: 'kategoria',
      label: 'Kategoria',
      type: 'select',
      options: [
        {
          label: 'Aktorzy',
          value: 'aktorzy'
        },
        {
          label: 'Aktorki',
          value: 'aktorki'
        },
        {
          label: 'Młodzi',
          value: 'mlodzi'
        },
      ]
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
    },        
    {
      name: 'nrDowodu',
      label: 'Numer Dowodu',
      type: 'text',
      required: true,
    },
    {
      name: 'daneBankowe',
      label: 'Dane Bankowe',
      type: 'group',
      fields:[
        {
          name: 'bank',
          label: 'Bank',
          type: 'text',
          required: true,
        },
        {
          name: 'numerKonta',
          label: 'Numer konta',
          type: 'number',
          required: true,
        }
      ]
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
          required: true,
        },
        {
          name: 'miejsceUrodzenia',
          label: 'Miejsce Urodzenia',
          type: 'text',
          required: true,
        },
      ]
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
                width: '60%'
              }
            },
            {
              name: 'numer',
              label: 'Numer',
              type: 'text',
              required: true,
              admin: {
                width: '20%'
              }
            },
            {
              name: 'nrMieszkania',
              label: 'Numer Mieszkania',
              type: 'text',
              admin: {
                width: '20%'
              }
            },
          ]
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
                width: '50%'
              }
            },
            {
              name: 'miasto',
              label: 'Miasto',
              type: 'text',
              required: true,
              admin: {
                width: '50%'
              }
            },
          ]
        }
      ]
    },
    {
      name: 'urzadSkrabowy',
      label: 'Właściwy Urząd Skrabowy',
      type: 'number',
      required: true,
    },
    {
      name: 'szkola',
      label: 'Szkoła',
      type: 'group',
      fields: [
        {
          name: 'szkola',
          label: 'Szkoła',
          type: 'checkbox',
        },
        {
          name: 'nazwaSzkoly',
          label: 'Nazwa Szkoły',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData.szkola
          }
        },
        {
          name: 'rok',
          label: 'Rok',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'monthOnly',
              // displayFormat: 'yyyy'
            },
            condition: (_, siblingData) => siblingData.szkola
          }
        },
        {
          name: 'rokUkonczenia',
          label: 'Rok Ukonczenia ',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'monthOnly',
              // displayFormat: 'yyyy'
            },
            condition: (_, siblingData) => siblingData.szkola
          }
        }
      ]
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
          }
        },
      ]
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
      label: 'Rozmiar dżinsów',
      type: 'number',
    },
    {
      name: 'prawoJazdy',
      label: 'Prawo Jazdy',
      type: 'checkbox',
    },
    {
      name: 'jezyki',
      label: 'Języki',
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
                  }
                },    
                {
                  name: 'poziom',
                  label: 'Poziom',
                  type: 'select',
                  options: [
                    {
                      label: 'A1',
                      value: 'A1'
                    },
                    {
                      label: 'A2',
                      value: 'A2'
                    },
                    {
                      label: 'B1',
                      value: 'B1'
                    },
                    {
                      label: 'B2',
                      value: 'B2'
                    },
                    {
                      label: 'C1',
                      value: 'C1'
                    },
                    {
                      label: 'C2',
                      value: 'C2'
                    },
                  ],
                  admin: {
                    width: '20%',
                  }
                }
              ]
            },
          ]
        }

      ]
    },
    {
      name: 'spiewy',
      label: 'Śpiewy',
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
              ]
            },
          ]
        }
      ]
    },
    {
      name: 'tancy',
      label: 'Tańcy',
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
              ]
            },
          ]
        }
      ]
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
              ]
            },
          ]
        }
      ]
    },
    {
      name: 'umiejetnosci',
      label: 'Umiejętności',
      type: 'text',
    },
    {
      name: 'nagrody',
      label: 'Nagrody',
      type: 'text',
    },
    {
      name: 'filmografia',
      type: 'array',
      fields: [
        {
          name: 'film',
          type: 'group',
          fields: [
            {
              name: 'rok',
              label: 'Rok',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'monthOnly',
                  // displayFormat: 'yyyy'
                }
              }
            },
            {
              name: 'tytul',
              label: 'Tytuł',
              type: 'text',
            },
            {
              name: 'najwazniejszeRoly',
              label: 'Najważniejsze Roly',
              type: 'text',
            }
          ]
        }
      ]
    },
    {
      name: 'nagrody',
      label: 'Nagrody',
      type: 'text',
    },
    {
      name: 'filmpolski',
      label: 'Filmpolski',
      type: 'text',
    },
    {
      name: 'youtube',
      label: 'Youtube',
      type: 'text',
    },
    {
      name: 'instagram',
      label: 'Instagram',
      type: 'text',
    },
    {
      name: 'www',
      label: 'WWWW',
      type: 'text',
    },
  ]
};

export default Actors;