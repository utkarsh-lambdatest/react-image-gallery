module.exports={
    "setupFilesAfterEnv": [
      "<rootDir>/tests/setupTestFramework.js"
    ],
    "moduleNameMapper" : {
      "lodash-es/throttle": "lodash/throttle",
      "lodash-es/debounce": "lodash/debounce"
    },
    "modulePaths": [
      "<rootDir>",
      "."
    ]
  }