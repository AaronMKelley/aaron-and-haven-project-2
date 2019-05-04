![alt text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Logo.png)
 #                                  Event Planner and Scheduler 
  This app is designed to allow ami users to add and manage events, their attendees and their speakers all in the same place. As a user one can view all upcoming events, sign up for the events of their choosing, see the speakers at the event and check in to specific sessions. As a admin one can add their own event to the app, add and delete attendees, change their status when it comes to lunch and swag, and add and remove speakers.  
 
 
 ![alt_text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Front-Page.png)
  
  ##                                 Run the App Through Node. 
   To access the application you will first need to either git clone the repository or download the zip file. Once you have open the folder in your coding editor, in the terminal run "npm install" to download all of the required npm packages. Once you have done so you will run the command "nodemon server.js" (or "node sever.js") to run the apps server. The app will then begin running on localhost:3000. 
 ![alt_text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Nodemon%20.png)
    
   ##                             Creating an Account as a User 
   First we will run through the process of running through the process as a user. If you don't already have an account you can begin to sign up for one by either clicking "Create An Account" in the middle of the page or "Sign Up" at the top right. 
   From here you will be prompted to a page that will ask you for your email, to create a password and to let us know if you plan on signing up as a admin or user by saying "true" for admin and "false" for user (here since we are signing up for a user account we will say "false"). To ensure your safety and privacy your password will be encrypted on our server and will only be known to you. At this point the application will also assign you a user_id that will be used to track your activity and to keep track of all of the users on the site. 
   
   ![alt_text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Sign%20Up.png)
 
 ##                                 Signing Up for an Event 
  Currently our application only has the capability to allow you to sign up to one current conference that is built into the system. Due to this, the next page that you are prompted to is the sign-up page for the current event. Here you will enter your name, email, and the company that you work for. You are also be assigned here a attendee_id that will be your unique id for the event or conference that the admins can use to track where you have checked in to and if you have picked up your lunch or swag throughout the day.  
  If you have by chance already signed up for the event, you can bypass this page by click "Already registered? See Event Schedule". If not, fill out the form and click "I'm Going!"
           
![alt text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Add%20Attendee%20.png)
 
 ##                                     Logging In
  If you already have an account, on the main page you will click "Sign-In" and see a similar page, but this one just asks for your email and password. 
  
  ![alt_text] (https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Login.png)
 
 #                                        User View 
 
 ##                                     Event Schedule 
  Next you will be brought to the event schedule where you can see all of the events that are scheduled for this particular conference. You'll see in this particular example there are currently 7 speakers signed up for the event and all have a ID, Name ,Topic and Title associated with them. 
   
   ![alt_text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Schedule.png)
   
   To check into the speakers that you want to see you will enter your attendee ID number (which will be emailed to you prior to the event or given to you the day you arrive) and the ID for the speaker whic can be find in the first column. You can sign up for as many or as few speakers as you like. This allows the speaker to have some idea of their expected attendance. When you do check-in to a speaker you are directed to a page where you can see a table of the Speaker IDs and the cooresponding attendees where are planning on going to give you a sense of each talks popularity without compromising the attendees info.
   
   ![alt_text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Speaker_Check_in.png)
   
   If you by chance were planning to both attend the event and also speak yourself, you have the ability to add yourself as a speaker by clicking the link near the bottom "Add your own talk to the schedule"
 
  From here you will be presented with a page where you can sign up as a speaker. The information that is collected includes your name, topic, title of your talk, and an unique 5 code of your own that allows you to help identify you class. 
 
 ![alt_text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Add_Speaker.png)
 
 #                                                Admin View   
 
 ##                                              Event Schedule 
   
   Through the admin view you can see that the event schedule now gives you the ability to delete a speaker. This could be a handy feature if someone last minute needs to drop out of the event or have another reason you no longer want to highlight them. You can also see that you have access to the 5 digit unique code that they entered when they signed up. This can be used to verify their identity and as an extra security measure for the event. 
   You may also notice now that another link as appeared near the bottom of the page reading "Admin? See and edit the attendee list." Click on this will bring you to the attendee list. 
 
 ![alt_text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Admin_Schedule.png)
 
 ##                                              Attendee List
  This is the true command center for any event. From this page an admin of the event can view every attendee who has signed up,when they did so, and also have the ability to remove them from the event. Antother great feature is the ability to track when each attendee has picked up their swag and lunch so that no one is double dipping. The editable check boxes stay saved the way that you leave them regardless if you leave the page, but are also editable in case you have made a mistake and need to make a correction. 
 
 ![alit_text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Attendee_List.png)
 
 #                                             Future Goals of the App 
  We are looking soon too to expand the applications capabilities beyond being able to handle one event. We are currently on the early stages of allow one to create their own events and on the reverse side, see all the upcoming events that they can sign up for. You can see the two demo options on the main page. 
  
 ![alt text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Main_Further_down.png)
 
 ##                                             Add Event 
 ![alt_text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Add_event.png)
 
 ##                                           See All Events 
 ![alt_text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/All_events.png)
 
 ## Technologies used:
*Node.js
*Express
*MongoDB
*API's:
*jQuery
*Javascript
*HTML5
*Materialize.css
*Google Fonts
