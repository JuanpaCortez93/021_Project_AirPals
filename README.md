# 021_Project_AirPals
This project is a Code Challenge created by AirPals. The acceptance criteria is recreate a web app with the following conditions:

![image](https://github.com/JuanpaCortez93/021_Project_AirPals/assets/63519906/9842ce05-7b7b-456a-85d8-bacb596140a3)

1. The font can be a similar one from Google Fonts. The idea is to have a text box where you can enter an address, and it suggests 3 options by querying the Google Maps API. As you type more characters, the suggestions will become more accurate since Google Maps will have more information.
![image](https://github.com/JuanpaCortez93/021_Project_AirPals/assets/63519906/d1b6fbf3-0da8-4451-bdcb-287705ad38de)

2. When selecting an address (by clicking on it), the system should validate that it is only an address from a list of ZIP codes in the United States (approximately 110). This list is available in the queriesUsed.sql file on the backend.

3. In the case that the postal code or ZIP code is valid (within the listed ones), a popup will be displayed as follows:
![image](https://github.com/JuanpaCortez93/021_Project_AirPals/assets/63519906/7e9a9350-2292-4725-9580-3772b387933a)

4. Otherwise, if it is not a valid postal code or ZIP code, the popup will display a message saying that it is out of range.
![image](https://github.com/JuanpaCortez93/021_Project_AirPals/assets/63519906/53f108b7-a52a-4f38-9cfd-f6a3d4d41f50)

# Criterio de aceptación:
- Clean, consistent, and understandable code: All folders have been organized in both the front end and back end in the most professional manner possible. Concepts of KISS (Keep It Simple, Stupid) and DRY (Don't Repeat Yourself) have been applied, attempting to minimize technical debt. As of the creation date of this documentation (11/13/2023), all libraries are free of vulnerabilities. Additionally, emphasis is placed on simple and clear commenting. The libraries used include:

 * Frontend: vite (react) y axios.
 * Backend: express, nodemon, cors, dotenv, mysql2, axios, jest y supertest. A relational table was chosen in this case to store the provided ZIP codes as it is deemed most suitable based on my technical criteria for this type of information.  
   
- Correct use of GIT: The commit format used adheres to the pattern: type: [subject][description], and the code was pushed at the end of the day, similar to a typical workday.
- Automated Tests (Desirable): Conducted on the backend using Jest and Supertest..

 # Results
- Final outcome on the frontend:
  ![image](https://github.com/JuanpaCortez93/021_Project_AirPals/assets/63519906/db569272-eae2-4beb-89bb-adc9e0010548)

-Final test in the backend:
![image](https://github.com/JuanpaCortez93/021_Project_AirPals/assets/63519906/3c6c097a-e2ed-4801-a578-39c99a05f342)
