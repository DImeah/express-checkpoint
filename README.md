# Agro Sales Web Application

This web application showcases a simple Agro Sales platform with three main pages: Home, Our Services, and Contact Us. The application is built using Express.js for server handling, EJS for templating, and CSS for styling.

## Features

- **Working Hours Middleware:** The web application is only available during working hours (Monday to Friday, 9 AM to 5 PM). Outside of these hours, users will see a message indicating that the application is not accessible.

- **Home Page:**
  - Contains a navigation bar with links to Home, Our Services, and Contact Us.
  - Styled with CSS, including a hero section and featured products.

- **Our Services Page:**
  - Contains a navigation bar with links to Home, Our Services, and Contact Us.
  - Lists various agricultural services offered by Agro Sales.

- **Contact Us Page:**
  - Contains a navigation bar with links to Home, Our Services, and Contact Us.
  - Displays contact information (email, phone, address) for Agro Sales.
  - Includes a contact form with fields for name, email, and message.

## How to Run

1. Install dependencies:
   ```bash
   npm install
2. Start the server:
   node app.js

3. Access the application in your web browser:
   http://localhost:3000

4. Project Structure
   /views: Contains EJS templates for Home, Our Services, and Contact Us pages.
   /public: Contains the public assets such as CSS files and images.
   app.js: The main server file with route handling and middleware setup.
   style.css: CSS file for styling the web pages.

5. Customization
   Feel free to customize the content, styling, and functionality according to your specific needs. Update the EJS templates, CSS styles, and add additional features as necessary.

6. License
   This project is licensed under the MIT License - see the LICENSE.md file for details.
