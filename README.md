# expense-tracker
Practice project of expense tracker written in javascript, which can read, create, update and delete data stored in an external JSOON file through APIs.
Here's how it looks:

![Screenshot 2023-06-08 063928](https://github.com/dheemanth-1/expense-tracker/assets/136865272/460e1560-c83b-48e8-9840-e7912f786ebf)

## How to use:
To run the code locally, run ```npm install``` in the command line after downloading the repository. This will download all the required dependencies. 
Then run the command ```npm run dev``` to start the app on a local server.
You will also have to setup a .env file and set the URL for the API being used to the variable ```VITE_JSON_SERVER_URL```.
To start the json-server as a backend run the command ```npx json-server -p 3500 -w data/sb.json``` on a seperate command line.
Or any other backend APIS can also be set up.
