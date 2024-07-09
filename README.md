**Tech Blog**
Description
The Tech Blog is a CMS-style blog site where developers can publish articles, blog posts, and their thoughts and opinions on various tech topics. Users can also comment on other developers’ posts. The application is built following the MVC paradigm, using Handlebars.js for templating, Sequelize as the ORM, and express-session for authentication. The app is deployed on Render.

**Table of Contents**
Installation
Usage
Features
License
Contributing
Tests
Questions
Screenshots
Deployed Application
Installation
Clone the repository:

**bash**
Copy code
git clone (https://github.com/vbadger7/challenge_fourteen/)
cd tech-blog
Install dependencies:

**bash**
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following:
makefile
Copy code
DATABASE_URL=
SECRET=

**Set up the database:**

Ensure you have PostgreSQL installed and running.
Create the database by running the following command:
bash
Copy code
node seeds/seed.js
Usage
Start the server:

**bash**
Copy code
npm start
Open your browser and visit http://localhost:3001 to view the application.

**Features**
User authentication (sign up, login, logout).
View existing blog posts on the homepage.
Create, update, and delete blog posts from the dashboard.
Comment on blog posts.
Session management with automatic logout after inactivity.
License
This project is licensed under the MIT License.

**Contributing**
Contributions are welcome! Please fork the repository and create a pull request with your changes.

**Tests**
To run tests, execute the following command:

**bash**
Copy code
npm test
Questions
For any questions or feedback, please contact me via email.
