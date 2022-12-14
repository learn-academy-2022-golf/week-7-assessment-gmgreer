# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Yes you can go into the class of student in the models folder and put belongs_to :cohort. This will allow you to create a foreign key when creating a student. You would first create a cohort then using that specific cohort you could create a student. like golf.student.create. Then create that student and they keys would be in each table. The foreign key is cohort id on the student table.

Researched answer: You can also add a reference via migration. Something like rails g migration AddForeignKeyToX. Then in the migration you can do an add_foreign_key :table_name, :x. You can also add a reference at the same time with a rails g migration AddReference x:reference. Then in migration it will look like 
add_reference :table, :x, index: true
add_foreign_key :uploads, :users
then of course rails db:migrate 

2. Which RESTful routes must always be passed params? Why?

Your answer: Lets go through, so from what I understand the Get command will need to know what it is getting and if it is getting a single item will need the primary key for that item. I think any get even if you are getting all will have to pass the table name in params. Or maybe that can be hard coded so you wouldn't need the params. For a Post or Create you will need the information you are posting so that will need params. For both of the updates you will need the information to be updated as well as the id of that think in params. For destroy you will need the id of the thing you want to destroy. So all but maybe the get all will need params. 

Researched answer: So Index will not need params though I am sure you could set it up to where it has params. But it doesn't need it because it is just doing a .all. Then there is new which doesn't need params since it is just passing the information from the user and packaging it up in a format that will later be passed as params.

3. Name three rails generator commands. What is created by each?

Your answer: Three g commands are model, migration, and controller. The model creates a table with certain columns and their data type. THe migration will change the table in some way by adding or deleting columns or changing them in some way. The controller is created that is an interface between the database and routes and the view. It is the C in MVC. It holds the methods that get information from the database and put it into the view.

Researched answer: Rails generate are command line tools that automate the creation of boilerplate code. The generate controller is expecting a generate controller ControllerName action1 action2 command. The action1 and so on create the different methods that you would see. Each controller would create a a controller file, a view file, a functional test file, a helper for the view, a JavaScript file, and a stylesheet file.

The generate model will strictly set up a table with given data while a generate scaffold will set up a model, database migration for that model, controller to manipulate it, views to view and manipulate the data, and a test suite for each of the above.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students An index or .all method would be used and it would get all of the students from the Student table

action: "POST" location: /students Student.create would be called and it would use params that goes through a .new to POST a new student to the database. Likely would use secured params from a student_params that would be in a private section of the controller

action: "GET" location: /students/new Student.new would be called and would create a formatted set of data to go to the database with a create.

action: "GET" location: /students/2 A Student.find(:id) would be used in order to retrieve the data from the student with id 2.

action: "GET" location: /students/2/edit A student.find would be used to prepare the information for an updated student data changed on the frontend in a prepared way to send to the back. 

action: "PATCH" location: /students/2 Student.find to get the data of the student then a .update to update the students information.

action: "DELETE" location: /students/2 Student.destroy would be used to delete the data from the student of id 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
 1. As a user I want to see a navigation bar at the top of the page that allows me to log in or log out.
 2. As a user I would like to be able to log in with other social media sites.
 3. As a user after I am logged in I would like to be able to click a button to create a new todo.
 4. As a user I would like to be able to write a todo with a title.
 5. as a user I would like to be able to write a description of the todo.
 6. As a user I would like to be able to put in a due date or time for the todo.
 7. As a user after I created my todo I would like to be able to see all of my todos in an ordered list.
 8. As a user I would like to be able to search through my todo list with a search bar.
 9. As a user I would like to be able to sort my todos by different criteria.
 10. As a user I would like to be able to mark todos as done and not see them any more.
 11. As a user I would like to be able to update or change an aspect of my todo.