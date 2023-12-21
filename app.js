import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to check if the current time is within working hours
const workingHoursMiddleware = (req, res, next) => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  const currentHour = currentDate.getHours();

  if (
    dayOfWeek >= 1 &&
    dayOfWeek <= 5 &&
    currentHour >= 9 &&
    currentHour < 17
  ) {
    // It's within working hours
    next();
  } else {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/style.css">
        <title>Error</title>
      
      </head>
      <body>
        <div class="error-message">
          Sorry, the web application is only available during working hours (Monday to Friday, 9 to 17).
        </div>
      </body>
      </html>
    `);
  }
};

app.use(express.static("public")); // Serve static files from the public directory
app.use(workingHoursMiddleware); // Apply the custom middleware to check working hours

// Set up template engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Define route for home
app.get("/", (req, res) => {
  res.render("home");
});

// Define route for services
app.get("/services", (req, res) => {
  res.render("services");
});

// Define route for contact
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
