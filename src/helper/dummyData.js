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
    id: 1,
    question:
      "At what distance is the TOI-733 system located from Earth compared to the other systems we discussed?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Uranus"],
    correctAnswer: "Jupiter",
    plantName: "Neptune",
    description:
      "Neptune is the eighth, and most distant planet from the Sun. It’s the fourth-largest, and the first planet discovered with math.",
    plantType: "ice giants",
    image:
      "https://life-like-earth-server.vercel.app/assets/planetsImages/neptune.png",
  },
];

export const typeData = [
  {
    id: 1,
    name: "Neptunian",
    image: imageConstants.neptunian,
  },
  {
    id: 2,
    name: "Super Earth",
    image: imageConstants.superEarth,
  },
  {
    id: 3,
    name: "Gas Giant",
    image: imageConstants.gasGiant,
  },

  {
    id: 4,
    name: "Terrestrial",
    image: imageConstants.terrestrial,
  },
];
