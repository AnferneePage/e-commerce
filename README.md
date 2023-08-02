## Express.js API with Sequelize Database ##
This is a simple Express.js API that connects to a MySQL database using Sequelize. It allows you to perform CRUD operations on categories, products, and tags.

# Installation #
Clone the repository: git clone https://github.com/AnferneePage/e-commerce
Change directory: cd e-commerce
Install dependencies: npm install
Database Configuration
Create a .env file in the project root.
Add the following lines to the .env file, replacing the values with your MySQL database credentials:
makefile
Copy code

`DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password`

# Database Setup and Seeding #
Run the following commands to create the development database and seed it with test data:
bash
Copy code
npm run sequelize db:create
npm run sequelize db:migrate
npm run sequelize db:seed:all

# Starting the Server #
To start the server and sync Sequelize models to the MySQL database, use:

bash
Copy code
`npm start`
The API will be available at http://localhost:3001.

# API Routes #
GET Routes
GET /categories: Get all categories in JSON format.
GET /products: Get all products in JSON format.
GET /tags: Get all tags in JSON format.
POST Routes
POST /categories: Create a new category.
POST /products: Create a new product.
POST /tags: Create a new tag.
PUT Routes
PUT /categories/:id: Update an existing category.
PUT /products/:id: Update an existing product.
PUT /tags/:id: Update an existing tag.
DELETE Routes
DELETE /categories/:id: Delete a category.
DELETE /products/:id: Delete a product.
DELETE /tags/:id: Delete a tag.
Testing with Insomnia
Use Insomnia or any API testing tool to interact with the mentioned routes. You can perform CRUD operations on categories, products, and tags using these routes.

# License #
This project is licensed under the MIT License.






* A walkthrough video demonstrating the functionality of the application below.
https://drive.google.com/file/d/1wNT0awi_X8I97q5OarjAUhmA_Wi-aLcv/view

