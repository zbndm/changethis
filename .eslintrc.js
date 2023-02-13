module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-vsamaru`
  extends: ["vsamaru"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
