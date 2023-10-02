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
      type: 'number',
      required: true,
    },
    {
      name: 'pesel',
      label: 'Pesel',
      type: 'number',
      required: true,
    },        
    {
      name: 'nr-dowodu',
      label: 'Numer Dowodu',
      type: 'text',
      required: true,
    },
    {
      name: 'dane-bankowe',
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
          name: 'numer-konta',
          label: 'Numer konta',
          type: 'number',
          required: true,
        }
      ]
    },
    {
      name: 'imiona-rodzicow',
      label: 'Imiona Rodziców',
      type: 'text',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'data-urodzenia',
          label: 'Data Urodzenia',
          type: 'date',
          required: true,
        },
        {
          name: 'miejsce-urodzenia',
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
              name: 'nr-mieszkania',
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
              name: 'kod-pocztowy',
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
      name: 'urzad-skrabowy',
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
          name: 'nazwa-szkoly',
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
          // TODO: check formatting
          admin: {
            condition: (_, siblingData) => siblingData.szkola
          }
        },
        {
          name: 'rok-ukonczenia',
          label: 'Rok Ukonczenia ',
          type: 'date',
          admin: {
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
      name: 'kolor-wlosow',
      label: 'Kolor Włosów',
      type: 'text',
    },
    {
      name: 'dlugosc-wlosow',
      label: 'Długośc Włosów',
      type: 'text',
    },
    {
      name: 'kolor-oczu',
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
      name: 'klatka-piersiowa',
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
      name: 'numer-buta',
      label: 'Numer Buta',
      type: 'number',
    },
    {
      name: 'rozmiar-ubran',
      label: 'Rozmiar Ubrań',
      type: 'number',
    },
    {
      name: 'rozmiar-garnituru',
      label: 'Rozmiar Garnituru',
      type: 'number',
    },
    {
      name: 'rozmiar-dzinsow',
      label: 'Rozmiar dżinsów',
      type: 'number',
    },
    {
      name: 'prawoJazdy',
      label: 'Prawo Jazdy',
      type: 'checkbox',
    },
    // {
    //   name: 'jezyki',
    //   type: 'relationship',
    //   relationTo: 'languages'
    //   // TODO: create languages collection
    // },
    // {
    //   name: 'spiew',
    //   type: 'relationship',
    //   relationTo: 'singing'
    //   // TODO: create languages collection
    // },
    // {
    //   name: 'taniec',
    //   type: 'relationship',
    //   relationTo: 'dancing'
    //   // TODO: create languages collection
    // },
    // {
    //   name: 'instrumenty',
    //   type: 'relationship',
    //   relationTo: 'instrument'
    //   // TODO: create languages collection
    // },
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
              // TODO: check formatting
            },
            {
              name: 'tytul',
              label: 'Tytuł',
              type: 'text',
            },
            {
              name: 'najwazniejsze roly',
              label: 'Najważniejsze Roly',
              type: 'text',
            }
          ]
        }
      ]

      // TODO: collection maybe?
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