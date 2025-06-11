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

### To log in use the mock email and password

Email: user@test.com
Password: Password

## Troubleshooting

If you have any issues with the project, please check the following steps:

1. Make sure you have the latest version of Node.js installed.
2. Clear the cache and reinstall the dependencies by running the following commands:

```
rm -rf node_modules
bun install
```

3. Check that your development environment is properly configured for React Native.

## Design Decisions & Known Limitations

### Design Decisions:

1. Built with Expo for rapid development and cross-platform compatibility
2. Uses prebuild approach for access to native modules while maintaining Expo workflow
3. Uses bun for fast and reliable package management
4. Uses React Native Elements for UI components
5. Uses react-native-mmkv for local storage for better performance and security.
6. Uses react-hook-form for form validation in login.

### Known Limitations:

1. Requires prebuild step before first run (adds setup complexity)

2. Native module additions require prebuild regeneration

### Future Improvements

Given more time, I would enhance this project by:

1. Implementing automated testing with @testing-library/react-native
   and Maestro for E2E testing and implementing.

2. Proper error boundaries with crash reporting with Sentry.

3. Implementing routing with expo-router, recomended by Expo.
