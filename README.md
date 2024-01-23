# Cookie Sales Application

This is a simple Node.js application for selling cookies and displaying a table of sold cookies. The application uses Express for the server, MySQL for the database, and HTML for the front end.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/bob4o-afl/cookies_with_database.git
   cd cookies_with_database
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up MySQL Database:**
   - Create a new MySQL database named `cookies_basic`.
   - Run the SQL script in `database_setup.sql` to create the required table:

   ```bash
   mysql -u your_mysql_username -p cookies_basic < database_setup.sql
   ```

   Replace `your_mysql_username` with your MySQL username.

4. **Configure MySQL Connection:**
   Open `server.js` and update the MySQL connection details:
   ```javascript
   const db = mysql.createConnection({
       host: 'localhost',
       user: 'username',
       password: 'pwd',
       database: 'cookies_basic',
       authPlugin: 'mysql_native_password'
   });
   ```

   Replace `'username'` and `'pwd'` with your MySQL username and password.

## Running the Application

1. **Start the Server:**
   ```bash
   node server.js
   ```

2. **Access the Application:**
   Open your web browser and go to [http://localhost:3000](http://localhost:3000) to use the cookie sales application.

3. **Sell Cookies:**
   - Enter cookie details on the main page.
   - Click "Sell Cookie" to add to the sales.

4. **View Sold Cookies Table:**
   - Navigate to [http://localhost:3000/sold-cookies](http://localhost:3000/sold-cookies) to view the table of sold cookies.

## Additional Information

- For security reasons, ensure to handle MySQL credentials carefully, especially in a production environment.
- Always follow best practices for securing your Node.js and MySQL applications.

---

Feel free to customize this README according to your preferences and add any additional information that might be useful for users.
