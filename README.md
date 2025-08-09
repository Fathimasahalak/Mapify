Mapify 🎯


## Basic Details
### Team Name: Useless


### Team Members
- Team Lead: Fathima Sahala K - NSS College of Engineering, Palakkad
- Member 2: Girik Sagar - NSS College of Engineering, Palakkad


### Project Description
It shows actual routes between cities but pairs them with insulting fitness comments like "Go burn some calories! " or "Time to walk off those coconut laddus! " - giving you real directions while offensively demotivating you at the same time.

### The Problem (that doesn't exist)
We're addressing the problem of navigation apps being too helpful

### The Solution (that nobody asked for)
Our useless maps project satirically "solves" the issue of people becoming overly dependent on GPS navigation by creating an app that deliberately provides no useful assistance - instead giving dismissive responses, requiring users to ask adults for help, or insulting their fitness levels while showing routes, thus forcing people to think for themselves or seek human interaction rather than relying on technology.

## Technical Details
### Technologies/Components Used
For Software:
- Languages used: 
  JavaScript,JSX
  html
  css
  
- Frameworks used:
  React
  
- Libraries used
  react-icons, react-router-dom

- Tools used
  VS Code
  ChatGPT
  Gemini 
  GitHub
  Render
  
- APIs: OpenRouteService API



### Implementation
For Software: Project Implementation
Mapify is a React-based web application that allows users to find the distance between two locations by entering the source and destination addresses. It provides an intuitive and interactive interface with location autocomplete and displays accurate distance information.

How It Works
User Input
The user inputs the source and destination locations using two autocomplete-enabled text fields. These fields suggest places as the user types, improving the user experience and ensuring accurate place names.

Location Selection
The app uses a location search component that fetches location suggestions and details, ensuring the chosen places are valid and standardized.

Distance Calculation
Upon submitting the locations, the app sends the source and destination coordinates to a backend API or directly uses a routing service API (like OpenRouteService or Google Maps API) to calculate the driving or straight-line distance between the two points.

Result Display
The calculated distance is displayed to the user in a clear and readable format with sarrcastic comments, along with any additional messages or insights.

Technology Stack
Frontend: React.js for building a responsive and dynamic user interface.

Icons: React Icons library for clean, intuitive icons.

Routing & API: OpenRouteService API (or similar) for calculating distances between coordinates.

Styling: CSS modules for scoped and modular styles.

Git clone: https://github.com/Fathimasahalak/Mapify

# Installation
npx create-react-app mapify
cd mapify
npm install

# Run
npm start

### Project Documentation
For Software:

# Screenshots (Add at least 3)
<img width="1920" height="1080" alt="Screenshot 2025-08-09 053549" src="https://github.com/user-attachments/assets/409b5617-d356-4ba6-8902-85b2fe8534d5" />
Shows the landing page with source and destination input fields.

<img width="1920" height="1080" alt="Screenshot 2025-08-09 053503" src="https://github.com/user-attachments/assets/8dc7c20a-0664-45c7-a2fa-cb461828d5e3" />
Displays calculated distance and funny/offensive notifications.

<img width="1920" height="1080" alt="Screenshot 2025-08-09 053517" src="https://github.com/user-attachments/assets/0cb61467-080e-41a4-b266-fc94078e08cf" />
Interactive map showing the route between the two locations.

<img width="1920" height="1080" alt="Screenshot 2025-08-09 053549" src="https://github.com/user-attachments/assets/408a0f0e-269f-4adf-998a-e191025511ee" />
<img width="1920" height="1080" alt="Screenshot 2025-08-09 053602" src="https://github.com/user-attachments/assets/a4fcaa83-268c-432d-a1a2-2bb85310dcc9" />


Diagrams
Workflow:![WhatsApp Image 2025-08-09 at 05 53 15_35564881](https://github.com/user-attachments/assets/7e849617-1033-4a89-9866-40475abfe3ce)




### Project Demo:
https://drive.google.com/drive/folders/1Jdm0HHn7L3HMbhGLoL_4CoUzLOmiUUT4
This video demonstrates the app’s main features: inputting locations, calculating distance, and displaying quirky notifications.



deployed link: https://mapify-7la5.onrender.com


## Team Contributions
- Fathima sahala k: 
Developed the React frontend components including LocationSearch and DistanceForm

Integrated OpenRouteService API for distance calculation

Implemented routing and results page UI

- Girik Sagar: Designed the UI/UX and CSS styling

Assisted with API integration and testing


---
Made with ❤ at TinkerHub Useless Projects 

