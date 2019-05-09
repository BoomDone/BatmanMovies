module.exports = {
    name: 'movies-app',
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/src/app'],
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    transformIgnorePatterns: [
        "<rootDir>/node_modules/(?!@ionic-native|@ionic|ionicons)",
],
coverageReporters: ['text', 'html'],
coverageDirectory: '<rootDir>/coverage'
}