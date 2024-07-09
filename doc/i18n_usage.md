# How to use i18n in your React App

>Ref https://medium.com/@devpedrodias/how-to-use-i18n-in-your-react-app-1f26deb2a3d8

## Step 1: Creating your React App using Vite

```sh
npm create vite@latest my-react-app -- --template react-ts
```

## Step 2: Install react-i18next and i18next

```sh
pnpm install react-i18next i18next --save
```

## Step 3: Create the i18n file for all the configurations

Create i18n.ts in src folder 
```sh
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  resources: {}, // Where we're gonna put translations' files
  lng: "en",     // Set the initial language of the App
});
```

## Create JSON File for each language of your App

You need to create a folder called “locale” inside of src folder, and then create the languages files JSON.
```json
// en.json
{
  "translation": {
    "welcome": "Welcome to Larklex"
  }
}
// pt.json
{
  "translation": {
    "welcome": "欢迎来到 Larklex"
  }
}
```

## Step 5: Put JSON Files content on Resources property in our Configuration File

Right now, we need to add our JSON Files Content on Resources Property. So, your i18n.js file should be like that at the point:

```ts
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from './local/en.json'
import cnJSON from './local/cn.json'
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    pt: { ...cnJSON },
  },
  lng: "en",
});
```

##  Step 6: Import our Configurations File in our main JS or TS file of our APP

Import i18n.ts at main.tsx

```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n.ts' // ts => import './i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

## Step 7: We need to use use that in our React Component

So, our App.tsx or App.jsx should be like that for we test if i18n is working correctly:

```tsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
function App() {
 const { t, i18n: {changeLanguage, language} } = useTranslation();
 const [currentLanguage, setCurrentLanguage] = useState(language)
 const handleChangeLanguage = () => {
   const newLanguage = currentLanguage === "en" ? "cn" : "en";
   setCurrentLanguage(newLanguage);
   changeLanguage(newLanguage);
 }
 return (
   <div className="App">
     <h1>
       Our Translated Header: 
       {t('welcome', { appName: "App for Translations" })}
       {/* {t('welcome')} */}
     </h1>
     <h3>
       Current Language: {currentLanguage}
     </h3>
     <button 
        type="button" 
        onClick={handleChangeLanguage}
     >
      Change Language
     </button>
   </div>
 );
}
export default App;
```
![](/imgs/2024-07-09-10-34-36.png)
![](/imgs/2024-07-09-10-34-47.png)