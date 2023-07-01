# Pawster

Originally starting off as a capstone project, Pawster was presented as a solution for targeting overcrowding in shelters and as a method to decrease the number of shelter animals euthanized every year. Pawster was designed to become a platform used to connect both users and pets in need of fostering. Using a more modern approach, we aimed to create a user friendly experience relying on the popular Tinder swiping functionality to help sort through the available pets. While this started off as a group effort, after polishing and presenting our original project, this repository is the result of taking into account design changes and constructive criticism recieved from panelists and fellow peers.


#### This project relies on Firebase for both database usage and email login. In order to inilaize and set up Firebase for email sign-in follow the link [here](https://github.com/ametzamaldonado/react-app-email-firebase) to start.
 
 
- After creating a Firebase project you should land on the Project Overview page, scrolling slight down, click on the Cloud Firestore icon. Select the "Create database" button and follow the below prompts to set up:
  - Select "production mode";
  - No need to change Firestore location, Google automiatically sets your location
  - Click enable and wait for the set up to be complete
  
- Once the database has been setup, you should be automatically navigated to the "panel view" where the tabs "Data, Rules, Indexes, Usage" will be visible. 
  - Once here, click on the Rules tab and make the following changes necessary to grant and restrict user access permissions
     ```
     rules_version = '2';
    // Allow read/write access on all documents to any user signed in to the application
    service cloud.firestore {
      match /databases/{database}/documents {
    // Allow authenticated users to read and write in all collections except for contactForm
        match /{document=**} {
          allow read, write: if request.auth != null;
        }
    // Allow public users to read and write in the contactForm collection
        match /contactForm/{document=**} {
          allow read, write: if true;
        }
      }
    }

#### In order to install this project locally following the below steps to ensure all necessary packages run smoothly:
  
1. Log into your own account on GitHub.
2. In the '+' menu on the upper right, choose Import repository
3. Complete the Import form fields:
    - Your old repository’s clone URL: enter this exactly: https://github.com/ametzamaldonado/pawster-ver-two 
    - Choose your own account as owner and type a repo name
4. Click Begin import.
5. Wait for the import to complete. If the repo is imported successfully, you will see a confirmation message. If you don’t see a success message, go back to 1 and start over.
6. Confirm your copy exists. Click the link on your new repository to see it on GitHub.
7. When complete make sure to clone the repository locally and run the folowing commands:
      ```
      npm run install // to download all dependencies
      npm start // to verify that the website is up and running.
      ```
8. Remember to create a .env file and input the following firebase configuration
    ```
    REACT_APP_FIREBASE_KEY=Your_firebaseConfig_apiKey
    REACT_APP_FIREBASE_AUTH_DOMAIN=Your_firebaseConfig_authDomain
    REACT_APP_FIREBASE_DATABASE=Your_firebaseConfig_databaseURL
    REACT_APP_FIREBASE_PROJECT_ID=Your_firebaseConfig_projectId
    REACT_APP_FIREBASE_STORAGE_BUCKET=Your_firebaseConfig_storageBucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=Your_firebaseConfig_messagingSenderId
    REACT_APP_FIREBASE_APP_ID=Your_firebaseConfig_appId
   ```


#### Usage and Features:
 ~~ Incoming info ~~

#### ** **Click here for [Deployed Site](https://pawster-two-demo.netlify.app/)** **
