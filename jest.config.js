module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts", "!src/**/*.js", "!src/index.ts"],
    preset: "ts-jest",
    testEnvironment: "node",
};
