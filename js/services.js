window.NBKServices = [
  {
    id: "manicure",
    name: "Manicure",
    description: "Verzorgde handen met een frisse, stijlvolle afwerking.",
    image: "assets/services/manicure-water.jpg",
    imageAlt: "Manicurebehandeling met handbad en verzorging van de nagelriemen",
    startingPrice: "€ 20",
    items: [
      ["Manicure", "€ 20"],
      ["Manicure + nagellak", "€ 25"],
      ["Manicure + gellak", "€ 35"],
      ["Manicure + French", "€ 40"],
      ["Manicure + gellak + French", "€ 50"]
    ]
  },
  {
    id: "pedicure",
    name: "Pedicure",
    description: "Verzorging voor voeten, met een kleur of French finish naar keuze.",
    image: "assets/services/pedicure-water.jpg",
    imageAlt: "Pedicurebehandeling met de voeten in een warm voetbad",
    startingPrice: "€ 40",
    items: [
      ["Pedicure", "€ 40"],
      ["Pedicure + nagellak", "€ 45"],
      ["Pedicure + gellak", "€ 50"],
      ["Pedicure + French", "€ 55"],
      ["Pedicure + gellak + French", "€ 65"],
      ["Pedicure + BIAB kleur", "€ 75"],
      ["Pedicure + BIAB met gellak", "€ 85"]
    ]
  },
  {
    id: "spa",
    name: "Spa pedicure",
    description: "Een extra verzorgend moment met een mooie finish.",
    image: "assets/services/spa-pedicure.jpg",
    imageAlt: "Spa pedicure met scrub en een verzorgende voetmassage",
    startingPrice: "€ 50",
    items: [
      ["Spa pedicure", "€ 50"],
      ["Spa pedicure + nagellak", "€ 55"],
      ["Spa pedicure + gellak", "€ 60"],
      ["Spa pedicure + French", "€ 65"],
      ["Spa pedicure + gellak + French", "€ 75"],
      ["Spa pedicure + BIAB kleur", "€ 85"],
      ["Spa pedicure + BIAB met gellak", "€ 95"]
    ]
  },
  {
    id: "gellak",
    name: "Gellak & nagellak",
    description: "Kies je favoriete kleur, naturel glans of een French look.",
    image: "assets/services/gellak-application.jpg",
    imageAlt: "Professionele applicatie van gellak op korte natuurlijke nagels",
    startingPrice: "€ 15",
    items: [
      ["Nagellak (handen/voeten)", "€ 15"],
      ["French nagellak", "€ 20"],
      ["Gellak (handen/voeten)", "€ 25"],
      ["Gellak naturel + French", "€ 30"],
      ["Gellak kleur + French", "€ 40"],
      ["Rubber base coat + gellak", "€ 30"]
    ]
  },
  {
    id: "biab",
    name: "BIAB nagels",
    description: "Een elegante BIAB-set, naturel, met gellak of French.",
    image: "assets/services/biab-builder-gel.jpg",
    imageAlt: "BIAB builder gel wordt aangebracht voor versteviging van de natuurlijke nagel",
    startingPrice: "€ 40",
    items: [
      ["Nieuwe set BIAB", "€ 45"],
      ["BIAB met verlengen", "€ 55"],
      ["Nieuwe set BIAB met gellak", "€ 55"],
      ["Nieuwe set BIAB met French", "€ 60"],
      ["BIAB opvullen met gellak", "€ 50"],
      ["BIAB opvullen met French", "€ 55"]
    ],
    note: "Bij het verwijderen van bestaande BIAB- of solarnagels tijdens een BIAB-behandeling geldt een toeslag van € 5."
  },
  {
    id: "solar-nieuw",
    name: "Solar nagels - nieuwe set",
    description: "Een nieuwe set met naturel, roze poeder of een ombre-effect.",
    image: "assets/services/solar-new-set-long-nails.jpg",
    imageAlt: "Nieuwe set lange amandelvormige solarnagels met zachte ombre finish",
    startingPrice: "€ 45",
    items: [
      ["Naturel poeder", "€ 45"],
      ["Naturel poeder + gellak", "€ 55"],
      ["Roze poeder", "€ 50"],
      ["Roze poeder + French", "€ 65"],
      ["Babyboom / Ombre", "€ 65"]
    ],
    note: "Bij het verwijderen van bestaande BIAB- of solarnagels tijdens een solarbehandeling geldt een toeslag van € 5."
  },
  {
    id: "solar-opvullen",
    name: "Solar nagels - opvullen",
    description: "Werk je solar nagels bij met een kleur of verfijnde French.",
    image: "assets/services/solar-refill.jpg",
    imageAlt: "Opvullen van de uitgroei bij bestaande lange solarnagels",
    startingPrice: "€ 35",
    items: [
      ["Naturel poeder", "€ 35"],
      ["Naturel poeder + gellak", "€ 45"],
      ["Roze poeder", "€ 40"],
      ["Roze poeder + French", "€ 55"],
      ["Babyboom / Ombre", "€ 50"]
    ],
    note: "Bij het verwijderen van bestaande BIAB- of solarnagels tijdens een solarbehandeling geldt een toeslag van € 5."
  },
  {
    id: "nail-art",
    name: "Nail art & verwijderen",
    description: "Geef je nagels karakter of kies voor een professionele verwijdering.",
    image: "assets/services/nail-art-detail.jpg",
    imageAlt: "Fijne gouden nail art wordt met de hand op de nagel geschilderd",
    startingPrice: "Vanaf € 3",
    items: [
      ["Nail art per nagel", "Vanaf € 3"],
      ["Nail art - 10 nagels", "Vanaf € 20"],
      ["Nagels knippen", "€ 10"],
      ["Gellak verwijderen", "€ 10"],
      ["BIAB verwijderen", "€ 15"],
      ["Solar nagels verwijderen", "€ 20"]
    ]
  }
];

window.NBKServiceCards = [
  { serviceId: "manicure", priceIndex: 0 },
  { serviceId: "pedicure", priceIndex: 1 },
  { serviceId: "spa", priceIndex: 2 },
  { serviceId: "gellak", priceIndex: 3 },
  { serviceId: "biab", priceIndex: 4 },
  { serviceId: "solar-nieuw", priceIndex: 5 },
  { serviceId: "nail-art", priceIndex: 7 }
];
