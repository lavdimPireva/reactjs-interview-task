# Note App

Notes-App is a modern web application designed for taking, updating, and searching notes. Built using React and  Bootstrap framework, it provides a seamless experience for users to manage their notes.


### Features
- **Create a New Note**: You can create a note.
- **Update Existing Notes**: Modify your notes.
- **View All Notes**: See all your notes in one place.
- **Search Functionality**: Find the exact note you're looking.
- **Axios Data Fetching**: Fetches dummy data from a specific API for demonstration purposes.

### Tech Stack
- **React**: The frontend framework for building user interfaces.
- **Bootstrap**: A framework of CSS for design.
- **Axios**: Promise-based HTTP client for making API calls.

### How to Run
1. **Clone the Repository**
   ```bash
   git clone https://github.com/lavdimPireva/reactjs-interview-task
   cd notes-app
2. Install Dependencies
   ```bash
   npm install
3. Run the Application
   ```bash
   npm start

### Screenshots
To view the final screenshots of our app, please refer to the 'screenshots' directory in this repository.

### Questions and Answers
1. How might you make this app more secure?
  - About the first question how the notes-app can be more secure, we can do it using different security approaches. For example we can backup the app. There are many solution for that, we can use : aws s3 which is a service in aws which can be used to store backup files. Also we have other platforms like google cloud, azure etc. It’s important to secure the storage like Local Storage. So if we have a backend-frontend app, it’s important passwords and things like tokens where we can save into local storage before we have to encrypt them. Using HTTPS for the application is also part of the security.

2. How would you make this solution scale to millions of records?
- About the second question I think that using microservices and orchestration tool like Kubernetes for managing containers (our app) is the best solution. 
So in the frontend is important to implement pagination so instead of loading all the records at once we can just limit the number of records. In the other hand using microservices so breaking the application into smaller microservices allows us to scale the app if your system is overloaded. Load Balancing or distribute the traffic accross multiple servers could be a solution how to manage millions of records in our app. 
Also we have to make sure that our app is stateless so in this way we can scale the app much easier. And auto-scaling is a service that aws offer so it automatically spin up or down the servers (nodes) based on the load.  
All of these features are part of Kubernetes and AWS infrastructure or any other platform like Google Cloud or Azure. So using those tools help us to make a solution how to manage a complex applications. 
   




