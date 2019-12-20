# CourseFill

Welcome to CourseFill, an web app for use by educational institutions to manage the course registration and payment by students.  

CourseFill is still in the development phase but you can see the progress live online at:

https://coursefill-react.herokuapp.com.

<a href="https://coursefill-react.herokuapp.com" target="_blank">
    <img src="https://github.com/Jryke/CourseFill-react/blob/master/src/assets/img/theme/coursefill-login.jpg" />
</a>

## Functionality

**User roles and views**
CourseFill has 3 roles for users; student, teacher and administrator.  Access to information is dependent on the role of the user.  

**Students**
Students are given access to information about classes, schedules, and teachers as well as the ability to sign up and pay for classes.  This is a tool for students to look for classes and get the information that they need to choose their class or classes.

**Teachers**
Teachers are given access to information about classes, schedules, and teachers just like the students.  Teachers also have access to the students' information.  Teachers don't have the ability to sign up for classes or make payments.

**Administrator**
The administrator has all of the access to information that the teachers have and more.  Administrators have more control over the classes; they can add/remove classes, change the class description, schedule, teacher, registration limit and also the price of the class. 

**Registration & Payment**
Once a student selects the a class or classes, they will be available in the shopping cart.  The payment processing is set up using Stripe.  Once the payment is made, teachers/admins can see the student added to the list of students registered for the class and the student will see the class added to their class list.   
