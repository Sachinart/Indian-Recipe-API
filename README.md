# Indian Recipe API

This API is built in NodeJS and ExpressJS to find complete recipe of most of the Indian food. The dataset is taken from - https://www.kaggle.com/kanishk307/6000-indian-food-recipes-dataset in a CSV file separated by pipe and imported the same in SQLite3 database.

# How to Use?

1. To run this API, clone this repository in your server or download and extract the zip in server path.
2. Run the commands in terminal - **npm install** followed by **npm i sqlite3**
3. Create a SQLite3 database using command - **sqlite3 recipe.sqlite** (Name anything for your database)
4. Create a table to hold recipe details with below query - 
```sql
CREATE TABLE recipe (
   Srno INTEGER,
   RecipeName TEXT,
   TranslatedRecipeName TEXT,
   Ingredients TEXT,
   TranslatedIngredients TEXT,
   PrepTimeInMins INTEGER,
   CookTimeInMins INTEGER,
   TotalTimeInMins INTEGER,
   Servings TEXT,
   Cuisine TEXT,
   Course TEXT,
   Diet TEXT,
   Instructions TEXT,
   TranslatedInstructions TEXT,
   URL TEXT
);
```
5. Import the data of CSV file to SQLite3 database using below query in SQLite3 database - 
```sql
.mode csv
.header on
.separator "|"
.import IndianFoodDataset.csv recipe
```
6. You can test the data by running select queries eg. SELECT * FROM recipe LIMIT 5;
7. You may notice that the first row contain the header data. You can delete the first row using below query -
```sql
DELETE FROM recipe WHERE Srno in (SELECT Srno FROM recipe LIMIT 1)
```
8. Come out of SQLite3 database and run the script with command - **npm start**
Note: port is 3000 you can change from it bin/www.

You can run the app on port defined in bin/www file and search for the recipe with parameter q.
End URL would look like - <url>?q=tomato

