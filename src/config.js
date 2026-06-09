/**
 * config.js — Portfolio configuration
 * ------------------------------------
 * This is the only file you need to edit to personalise the site.
 * It's a plain JS module: import it wherever you need the data.
 *
 * Usage in a component:
 *   import config from '../config.js'
 */

const config = {
  // --- Identity ---
  name: "Anton Teerioja",
  title: "Data-analytics Master's Student and Machine Learning Enthusiast",
  university: "University of Turku",
  location: "Turku, Finland",

  // --- GitHub ---
  githubUsername: "ATeerioja",
  // Repos to show first (by name). Leave [] to sort by recently updated.
  pinnedRepos: [],
  // Max repos to display
  maxRepos: 6,

  // --- About ---
  bio: [
    "Currently studying for my Master's in data-analytics.",
    "Currently exploring Machine learning applications in real world situations.",
  ],
  skills: ["Python", "JavaScript", "C", "Linux", "Git", "Docker"],

  // --- Contact ---
  email: "anton.teerioja@gmail.com",
  github: "https://github.com/ATeerioja",
  linkedin: "https://www.linkedin.com/in/anton-teerioja-485846229/",   // leave empty to hide
};

export default config;
