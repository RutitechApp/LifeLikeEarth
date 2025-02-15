import imageConstants from "../utils/imageConstants";

export const OnBoadingData = [
  {
    id: 1,
    title: "What is Exoplanet?",
    desc: "An exoplanet is a planet that orbits a star outside our solar system.",
    imageUrl: imageConstants.onBoarding1,
  },
  {
    id: 2,
    title: "Types of Exoplanet",
    desc: "Exoplanets can be gas giants or rocky, and may orbit in habitable or extreme zones.",
    imageUrl: imageConstants.onBoarding2,
  },
  {
    id: 3,
    title: "Detection of Exoplanet ",
    desc: "Scientists detect exoplanets by observing transits or star wobbles.",
    imageUrl: imageConstants.onBoarding3,
  },
];

export const BannerTypes = [
  {
    id: 2,
    title: "Gas Giant",
  },
  {
    id: 3,
    title: "Neptune-like",
  },
  {
    id: 4,
    title: "Super Earth",
  },
  {
    id: 5,
    title: "Terrestrial",
  },
];

export const PlannetData = [
  {
    plantName: "The Sun",
    description:
      "The Sun is the star at the heart of our solar system. Its gravity holds the solar system together, keeping everything — from the biggest planets to the smallest bits of debris — in its orbit.",
    plantType: "heliophytes",
    image:
      "https://life-like-earth-server.vercel.app/assets/planetsImages/thesun.gif",
  },
  {
    plantName: "Mercury",
    description:
      "Mercury is the closest planet to the Sun, and the smallest planet in our solar system - only slightly larger than Earth's Moon.",
    plantType: "terrestrial",
    image:
      "https://life-like-earth-server.vercel.app/assets/planetsImages/mercury.gif",
  },
  {
    plantName: "Venus",
    description:
      "Venus is the second planet from the Sun, and the sixth largest planet. It’s the hottest planet in our solar system.",
    plantType: "terrestrial",
    image:
      "https://life-like-earth-server.vercel.app/assets/planetsImages/venus.gif",
  },
  {
    plantName: "Earth",
    description:
      "Earth plants, or terrestrial plants, are plants that grow on land. They have adaptations like roots, stems, leaves, and flowers for survival in terrestrial environments.",
    plantType: "terrestrial",
    image:
      "https://life-like-earth-server.vercel.app/assets/planetsImages/earth.gif",
  },
  {
    plantName: "Jupiter",
    description:
      "Jupiter is the fifth planet from the Sun, and the largest in the solar system – more than twice as massive as the other planets combined.",
    plantType: "gas giant",
    image:
      "https://life-like-earth-server.vercel.app/assets/planetsImages/Jupiter.gif",
  },
  {
    plantName: "Mars",
    description:
      "Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots.",
    plantType: "terrestrial",
    image:
      "https://life-like-earth-server.vercel.app/assets/planetsImages/mars.gif",
  },
  {
    plantName: "Uranus",
    description:
      "Uranus is the seventh planet from the Sun, and the third largest planet in our solar system. It appears to spin sideways.",
    plantType: "ice giants",
    image:
      "https://life-like-earth-server.vercel.app/assets/planetsImages/uranus.gif",
  },
  {
    plantName: "Saturn",
    description:
      "Saturn is the sixth planet from the Sun, and the second largest in the solar system. It’s surrounded by beautiful rings.",
    plantType: "gas-giant",
    image:
      "https://life-like-earth-server.vercel.app/assets/planetsImages/saturn.gif",
  },
  {
    plantName: "Neptune",
    description:
      "Neptune is the eighth, and most distant planet from the Sun. It’s the fourth-largest, and the first planet discovered with math.",
    plantType: "ice giants",
    image:
      "https://life-like-earth-server.vercel.app/assets/planetsImages/neptune.gif",
  },
];

export const questions = [
  {
    id: "66f3944c131290e89057a90f",
    question: "What is the name of the exoplanet?",
    options: [
      "TYC 0434-04538 (host star)",
      "TYC 0434-04538-1 a (not a standard naming convention)",
      "TYC 0434-04538-1 (host star)",
      "TYC 0434-04538-1 b",
    ],
    correctAnswer: "TYC 0434-04538-1 b",
  },
  {
    id: "66f3946a131290e89057a91f",
    question: "How many stars does this exoplanet orbit?",
    options: [
      "Multiple (uncertain from the data)",
      "2",
      "1",
      "None (it's a planet, not a star)",
    ],
    correctAnswer: "1",
  },
  {
    id: "66f39485131290e89057a92f",
    question: "What technique was used to discover TYC 0434-04538-1 b?",
    options: [
      "Transit Method",
      "Direct Imaging",
      "Radial Velocity",
      "Gravitational Microlensing",
    ],
    correctAnswer: "Radial Velocity",
  },
  {
    id: "66f394a6131290e89057a93f",
    question: "In what year was this exoplanet discovered?",
    options: ["2020", "2021", "2022", "The information is not provided."],
    correctAnswer: "2021",
  },
  {
    id: "66f394e4131290e89057a95c",
    question: "At which observatory was TYC 0434-04538-1 b discovered?",
    options: [
      "A specific observatory is not given.",
      "Keck Observatory",
      "Hubble Space Telescope",
      "Roque de los Muchachos Observatory",
    ],
    correctAnswer: "A specific observatory is not given.",
  },
  {
    id: "66f39500131290e89057a96c",
    question: "What is the reference for the discovery of TYC 0434-04538-1 b?",
    options: [
      "A&A 2020, 580, A123 (example, not the actual reference)",
      "Niedzielski et al. 2021",
      "TICv8",
      "There is no published reference.",
    ],
    correctAnswer: "Niedzielski et al. 2021",
  },
  {
    id: "66f39521131290e89057a97c",
    question:
      "What is the orbital period of TYC 0434-04538-1 b in days (approximately)?",
    options: [
      "30",
      "100",
      "193.2",
      "We cannot determine the orbital period from this data.",
    ],
    correctAnswer: "193.2",
  },
  {
    id: "66f39540131290e89057a98c",
    question: "How massive is TYC 0434-04538-1 b compared to Earth?",
    options: [
      "It has less than half the mass of Earth.",
      "It is slightly less massive than Earth.",
      "It is roughly 2 times more massive than Earth.",
      "The data is insufficient to determine the true mass. (We only have mass sin(i), which depends on the orbital inclination)",
    ],
    correctAnswer: "It is roughly 2 times more massive than Earth.",
  },
  {
    id: "66f39562131290e89057a99c",
    question:
      "What is the estimated effective temperature of the star that TYC 0434-04538-1 b orbits?",
    options: ["3000 Kelvin", "4679 Kelvin", "5500 Kelvin", "6000 Kelvin"],
    correctAnswer: "4679 Kelvin",
  },
  {
    id: "66f3957d131290e89057a9ac",
    question:
      "How far away is the TYC 0434-04538 system located from Earth (in parsecs)?",
    options: [
      "100",
      "300",
      "613.4",
      "The distance cannot be determined from stellar magnitude data.",
    ],
    correctAnswer: "613.4",
  },
];

export const typeData = [
  {
    id: 1,
    name: "Neptunian",
    image: imageConstants.neptunian,
    typeName: "Neptune-like",
  },
  {
    id: 2,
    name: "Super Earth",
    image: imageConstants.superEarth,
    typeName: "Super Earth",
  },
  {
    id: 3,
    name: "Gas Giant",
    image: imageConstants.gasGiant,
    typeName: "Gas Giant",
  },

  {
    id: 4,
    name: "Terrestrial",
    image: imageConstants.terrestrial,
    typeName: "Terrestrial",
  },
];
