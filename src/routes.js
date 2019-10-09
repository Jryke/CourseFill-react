/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Profile from "./views/examples/Profile.jsx";
import Login from "./views/examples/Login.jsx";
import Tables from "./views/examples/Tables.jsx";
import Signup from "./views/examples/Signup.jsx";
import AdminRegister from "./views/examples/AdminRegister.jsx";
import StudentRegister from "./views/examples/StudentRegister.jsx";
import CourseInfo from "./views/examples/CourseInfo.jsx";
import CourseCreate from "./views/examples/CourseCreate.jsx";
import SubjectInfo from "./views/examples/SubjectInfo.jsx";
import TeacherInfo from "./views/examples/TeacherInfo.jsx";
import StudentInfo from "./views/examples/StudentInfo.jsx";
import Cart from "./views/examples/Cart.jsx"

var routes = [
	// Teacher Links
  {
    path: "/courses",
    name: "Courses",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
		invisible: false
  },
	{
    path: "/subjects",
    name: "Subjects",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
		invisible: false
  },
	{
    path: "/teachers",
    name: "Teachers",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
		invisible: false
  },
	{
    path: "/students",
    name: "Students",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
		invisible: false
  },
	{
		path: "/settings",
		name: "Settings",
		icon: "ni ni-single-02 text-yellow",
		component: Profile,
		layout: "/admin",
		invisible: false
	},
	{
		path: "/course/:id",
		name: "Course Info",
		icon: "ni ni-bullet-list-67 text-red",
		component: CourseInfo,
		layout: "/admin",
		invisible: true
	},
	{
		path: "/course-create",
		name: "Course Create",
		icon: "ni ni-bullet-list-67 text-red",
		component: CourseCreate,
		layout: "/admin",
		invisible: true
	},
	{
		path: "/subject/:id",
		name: "Subject Info",
		icon: "ni ni-bullet-list-67 text-red",
		component: SubjectInfo,
		layout: "/admin",
		invisible: true
	},
	{
		path: "/teacher/:id",
		name: "Teacher Info",
		icon: "ni ni-bullet-list-67 text-red",
		component: TeacherInfo,
		layout: "/admin",
		invisible: true
	},
	{
		path: "/student/:id",
		name: "Student Info",
		icon: "ni ni-bullet-list-67 text-red",
		component: StudentInfo,
		layout: "/admin",
		invisible: true
	},
	// Student Links
	{
    path: "/courses",
    name: "Courses",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/student",
		invisible: false
  },
	{
    path: "/subjects",
    name: "Subjects",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/student",
		invisible: false
  },
	{
    path: "/teachers",
    name: "Teachers",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/student",
		invisible: false
  },
	{
		path: "/profile",
		name: "Student Info",
		icon: "ni ni-single-02 text-yellow",
		component: Profile,
		layout: "/student",
		invisible: false
	},
	{
		path: "/course/:id",
		name: "Class Info",
		icon: "ni ni-single-02 text-yellow",
		component: CourseInfo,
		layout: "/student",
		invisible: true
	},
	{
		path: "/subject/:id",
		name: "Subject Info",
		icon: "ni ni-bullet-list-67 text-red",
		component: SubjectInfo,
		layout: "/student",
		invisible: true
	},
	{
		path: "/teacher/:id",
		name: "Teacher Info",
		icon: "ni ni-bullet-list-67 text-red",
		component: TeacherInfo,
		layout: "/student",
		invisible: true
	},
	// Auth Links
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
		invisible: true
  },
  {
    path: "/signup",
    name: "Signup",
    icon: "ni ni-circle-08 text-pink",
    component: Signup,
    layout: "/auth",
		invisible: true
  },
  {
    path: "/admin-register",
    name: "Admin Register",
    icon: "ni ni-circle-08 text-pink",
    component: AdminRegister,
    layout: "/auth",
		invisible: true
  },
  {
    path: "/student-register",
    name: "Student Register",
    icon: "ni ni-circle-08 text-pink",
    component: StudentRegister,
    layout: "/auth",
		invisible: true
	},
	{
		path: "/cart",
		name: "Shopping Cart",
		icon: "ni ni-circle-08 text-pink",
		component: Cart,
		layout: "/auth",
		invisible: true
	}
];
export default routes;
