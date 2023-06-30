# TaskBuddy App

## Preview (NOT EXACTOLY)

![App Preview](https://cdn.dribbble.com/users/9769475/screenshots/19575729/media/7dc0cb142b52420d73f62913bb9d1bc7.jpg)


## Overview

The TaskBuddy App is a sleek and intuitive mobile application designed to help users effortlessly manage their daily tasks, set deadlines, and prioritize responsibilities. Inspired by real-world challenges, this app provides a seamless user experience with an elegant interface.

## Features

- Create tasks with titles, descriptions, and deadlines.
- Prioritize tasks based on urgency or importance.
- Mark tasks as completed or delete them when they're no longer needed.
- Duplicate tasks.
- User-friendly interface for easy task management.

## App Architecture

The TaskBuddy App is built using the React Native CLI. It follows a modular code structure to ensure code reusability and maintainability. The core libraries used in the project are:

- Redux: for efficient state management.
- React Navigation: for seamless navigation between screens.

## Folder Structure

- `src/components`: Contains reusable components used across different screens.
    - `/atoms`: Includes individual atomic components used throughout the app.
       - `TBInput`: This is a example of Input atoms. Atoms start with prefix TB(TaskBuddy).
       - `TBCard`: This is a example of View atoms.
    - `/generic`: Contains generic components that can be reused in multiple contexts or screens.
- `src/navigation`: Includes navigation configuration and screens.
- `src/screens`: Contains individual screens of the app.
- `src/redux`: Defines the Redux store and actions for managing app state.
   - `actions`:  Defines the action creators, which are functions that create actions to be dispatched to the Redux store. These actions describe the changes that need to be made to the state.
   - `reducers`: Contains the reducers, which are pure functions responsible for handling the dispatched actions and updating the state of the application accordingly. Each reducer focuses on a specific part of the application state.
- `src/constants`: Holds constant values used throughout the app, such as Strings,LocalStorage constants ,error messages, or configuration settings.
- `src/helpers`: Includes helper functions and utility modules used across the project.
- `src/hooks`: Contains custom hooks that encapsulate common functionality and enable code reuse.
- `src/assets`: Stores static assets such as images, fonts, or other media files used in the app.
- `src/themes`: Holds theme-related files, including style definitions, color palettes, and font configurations.
- `src/utils`: Contains utility functions and modules that provide various utility functionalities.

For detailed code documentation, please refer to the source code.

## Design

You can find the design files at the following link: [Designs](https://cdn.dribbble.com/users/9769475/screenshots/19575729/media/7dc0cb142b52420d73f62913bb9d1bc7.jpg)

## Getting Started

### Prerequisites

To run this application, you need to have the following software installed on your machine:

- Node.js (version v18.15.0)
- React Native CLI (version 0.72.0)
- Xcode (for iOS development)
- Android Studio (for Android development)

### Setup

- download or clone the [repository](https://github.com/ShravanMeena/taskbuddy.git)
- `npm install`
- run `npx react-native run-ios/android`


### Code quality & consistency:

- In this project I use absolute path for import ([What is absolute path?](https://dev.to/abrahamlawson/using-absolute-paths-in-react-native-24ak))
- Helper function for managing common function like for showing error as a toast.
- I try to write clean and efficient code (You can see [here](https://github.com/ShravanMeena/taskbuddy))

### Reusability

- So I have created reusabale helper functions.
- for this I have create a proper `ui` folder so we can use them all over the code

# Note

- For any doubts ,feel free to connect on mail `shravanmeena47@gmail.com`.

