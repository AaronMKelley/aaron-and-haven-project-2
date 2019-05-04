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
 
 ##                                     Event Schedule 
  Next you will be brought to the event schedule where you can see all of the events that are scheduled for this particular conference. You'll see in this particular example there are currently 7 speakers signed up for the event and all have a ID, Name ,Topic and Title associated with them. 
   
   ![alt_text](https://raw.githubusercontent.com/htichy/aaron-and-haven-project-2/master/Images/Schedule.png)
   
   If you by chance were planning to both attend the event and also speak yourself, you have the ability to add yourself as a speaker by clicking the link near the bottom "Add your own talk to the schedule"
 
 
 
 
 
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
