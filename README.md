## Overview

This is a country information application that fetches data from an API and presents it in a user-friendly interface. The application is fully responsive, functioning flawlessly across a variety of devices and screen sizes. Users can filter countries by region, view specific details about a selected country, and switch between light and dark modes for optimal viewing comfort.

Key Features
- Retrieve and display country information from the REST Countries API
- Filter countries by region
- Detailed view for each country with relevant data
- Toggle between light and dark modes
- Responsive design ensuring an optimal user experience across devices
- Interactive elements with hover and focus states

### Links

- [Live site URL:](https://rest-countries-api-xi-topaz.vercel.app/)

### Screenshot

[Project Screenshot](public/restCountriesApi.png)

### Technologies

- Vite
- React
- TypeScript
- TailwindCSS
- Mobile-first workflow
- REST Countries API

### What I learned

Throughout this project, I deepened my knowledge of TypeScript in conjunction with the React library, solidifying my understanding of types and interfaces. This project allowed me to gain more experience working with external APIs, specifically the REST Countries API, which I used to fetch and display country data. Additionally, implementing the filter functionality further enhanced my problem-solving skills, particularly in the areas of data manipulation and state management. The project also reinforced the importance of UI/UX considerations in web development, as I worked to make the application responsive and user-friendly. Overall, this project has equipped me with a broader and more robust set of skills that I can apply to future development tasks.

## Read about the challenge below.
## The challange requirements are in swedish as the course that provided the challange is based in sweden.

# Välkomna till Flag-Utmaningen! 🐺

Kolla in design för hur projektet ska se ut:
[Ljus-Tema](./design/Desktop-light.png)
[Mörkt-Tema](./design/Desktop-dark.png)

## Utmaningen

Din utmaning är att integrera med [REST-ländernas API](https://restcountries.com)för att hämta landsdata och visa dem som i designerna.

Dina användare ska kunna:

- Se alla länder från API:et på startsidan
- Söka efter ett land med hjälp av ett input-fält
- Filtrera länder efter region
- Klicka på ett land för att se mer detaljerad information på en separat sida
- Klicka igenom till grannländerna på detaljsidan
- Växla färgschemat mellan ljus och mörk läge.

**⚠️ OBS ⚠️: Ibland kan REST-ländernas API vara nere. Vi har lagt till en `data.json?`-fil med allt landsdata som du kan använda dig av ist för API:et. Du kan behandla data.json precis som en Endpoint. För att göra api anrop mot den kan du följa denna guide**: https://www.medium.com/frontendweb/how-to-read-local-json-file-in-react-js-564125235fc7

## Navigera genom projektet

Din uppgift är att bygga projektet enligt designerna i mappen `/design`.

I den här utmaningen hittar du mobil- och desktop-designer i ljusa och mörka färgscheman för båda sidorna.

Det finns också en fil `style-guide.md` som innehåller den information du behöver, såsom färgpalett och typsnitt.

## Uppstarts Guide 🌟

1. Titta igenom designerna för att börja planera hur du ska ta itu med projektet. Detta steg är avgörande för att hjälpa dig tänka framåt för styling och att skapa återanvändbara stilar.

2. Skapa en komponent för dina kort som flaggorna och informationen om landet ska vara satta på.

3. Använd dig av props för att stoppa in information som invånare, huvudstad osv i kort-komponenten.

4. När du hämtar datan om länderna så kan du använda dig av Fetch API eller axios i en kombination med React hooken - useEffect.

5. Skapa funktionalitet för att visa land informationen när användaren klickar på ett land från listan. Du kan använda Reacts state-funktionalitet för att hantera vilket land som är valt.

**Stort Lycka till** 🐺
