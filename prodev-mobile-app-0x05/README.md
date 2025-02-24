# prodev-mobile-app-0x05: Navigation using Tab Navigation Patterns

This exercise focuses on implementing Tab Navigation in a React Native application using Expo Router.  Building upon the previous exercise (prodev-mobile-app-0x04 - assumed to have implemented Stack Navigation), this milestone enhances the navigation structure by introducing tabs for better content organization and user experience.

## Objectives

* Implement Tab Navigation using Expo Router.
* Create separate screen components for each tab.
* Configure the Tab Navigator to manage tab switching and appearance.
* Integrate the Tab Navigator into the main application structure.



## Getting Started

1. **Ensure you have completed the previous exercise (prodev-mobile-app-0x04 - Stack Navigation).  This exercise builds directly on top of that foundation.**
2. **Navigate to the project directory:** `cd prodev-mobile-app-0x05`
3. **Install dependencies (if not already installed):** `npm install`
4. **Start the development server:** `npm start`


## Key Changes from Previous Exercise (0x04 - Stack Navigation)

* **Tab Navigator Implementation:**  The main change is the introduction of the `TabNavigator` component, which manages the tab-based navigation structure.
* **Screen Components:**  Individual screen components are created for each tab (e.g., `Home.jsx`, `Search.jsx`, `Profile.jsx`).
* **App.jsx Modification:** The `App.jsx` component is modified to integrate the `TabNavigator`, making it the root of the navigation structure.



## Example Tab Navigation Structure (using Expo Router)

```javascript

// In navigation/TabNavigator.jsx (Illustrative Example)
import { Tabs } from 'expo-router';

export default function TabNavigatorLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} /> {/* Maps to screens/Home.jsx */}
      <Tabs.Screen name="search" options={{ title: 'Search' }} /> {/* Maps to screens/Search.jsx */}
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} /> {/* Maps to screens/Profile.jsx */}
    </Tabs>
  );
}

```