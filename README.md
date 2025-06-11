# MyWatchlist

### Prerequisites

What things do we need to run the project.

```
. Node.js (Recommended version LTS)
. Android or iOS emulator or phisical device
. Package manager (bun, yarn or npm), we recommend bun

```

## Install dependencies

```
 bun install

```

## Before start the project to create a local app prebuild

```
 bun prebuild
```

### To start the project

Android

```
bun android
```

IOs

```
bun ios
```

## Troubleshooting

If you have any issues with the project, please check the following steps:

. Make sure you have the latest version of Node.js installed.
. Clear the cache and reinstall the dependencies by running the following commands:

```
rm -rf node_modules
bun install
```

. Check that your development environment is properly configured for React Native.

## Design Decisions & Known Limitations

### Design Decisions:

. Built with Expo for rapid development and cross-platform compatibility
. Uses prebuild approach for access to native modules while maintaining Expo workflow
. Uses bun for fast and reliable package management
. Uses React Native Elements for UI components

### Known Limitations:

. Requires prebuild step before first run (adds setup complexity)
. Native module additions require prebuild regeneration

### Future Improvements

Given more time, I would enhance this project by implementing automated testing
with @testing-library/react-native and Maestro for E2E testing and implementing
proper error boundaries with crash reporting with Sentry.
Additionally, I would add a comprehensive documentation with component storybooks
for better developer experience.
