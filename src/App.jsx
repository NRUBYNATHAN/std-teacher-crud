import "./App.css";

import { StudentList } from "./StudentList";
import { Routes, Route, useNavigate } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Home } from "./Home";

import { AddStudent } from "./AddStudent";
import { AddTeacher } from "./AddTeacher";
import { useState } from "react";
import { EditStudent } from "./EditStudent";
import { EditTeacher } from "./EditTeacher";
import { TeacherList } from "./TeacherList";


export default function App(){
  const [studentlist,setStudentList] = useState([
    {
      "id": "0",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5jT4VxAturLr7dXEknhLSxaBgyTkDPXm6A&usqp=CAU",
      "name": "ruby",
      "age": 20,
      "regno": 1910,
      "email": "rubynatha999@gmail.com",
      "phone": 9344949540,
      "deg": "BSc"
    },
    {
      "id": "1",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5jT4VxAturLr7dXEknhLSxaBgyTkDPXm6A&usqp=CAU",
      "name": "john",
      "age": 19,
      "regno": 1911,
      "email": "john999@gmail.com",
      "phone": 9244949543,
      "deg": "BSc"
    },
    {
      "id": "2",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5jT4VxAturLr7dXEknhLSxaBgyTkDPXm6A&usqp=CAU",
      "name": "UMAMAHESH",
      "age": 21,
      "regno": 1912,
      "email": "maha999@gmail.com",
      "phone": 9344949320,
      "deg": "B.com"
    }
  ])
  const [teacherlist,setTeacherList] = useState([
    {
      "id": "0",
      "image": "https://www.shutterstock.com/image-photo/teacher-asking-her-students-question-260nw-309239105.jpg",
      "name": "MR. RAM ",
      "age": 25,
      "regno": 1910,
      "email": "ram999@gmail.com",
      "phone": 9344949540,
      "deg": "MSc.,MPhil"
    },
    {
      "id": "1",
      "image": "https://www.shutterstock.com/image-photo/teacher-asking-her-students-question-260nw-309239105.jpg",
      "name": "MR. RAMESH ",
      "age": 39,
      "regno": 1911,
      "email": "ramesh999@gmail.com",
      "phone": 9244949543,
      "deg": "MSc.,MPhil"
    },
    {
      "id": "2",
      "image": "https://www.shutterstock.com/image-photo/teacher-asking-her-students-question-260nw-309239105.jpg",
      "name": " MR. MAHESH",
      "age": 31,
      "regno": 1912,
      "email": "mahesh999@gmail.com",
      "phone": 9344949320,
      "deg": "M.com.,PH.D"
    }
  ])
  const navigate=useNavigate()
  return(
    <div>
     <AppBar position="static">
        <Toolbar>
           <Button onClick={()=>navigate("/")} color="inherit">HOME</Button>
          <Button onClick={()=>navigate("/studentlist")} color="inherit">STUDENTS</Button>
          <Button onClick={()=>navigate("/teacherlist")} color="inherit">TEACHERS</Button>
          <Button onClick={()=>navigate("/addstudents")} color="inherit">ADD STUDENTS</Button>
          <Button onClick={()=>navigate("/addteacher")} color="inherit">ADD TEACHER</Button>
        </Toolbar>
      </AppBar>

        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/studentlist" element={ <StudentList studentlist={studentlist} setStudentList={setStudentList}/> } />
        <Route path="/teacherlist" element={ <TeacherList teacherlist={teacherlist} setTeacherList={setTeacherList}/> } />
        <Route path="/addstudents" element={ <AddStudent studentlist={studentlist} setStudentList={setStudentList}/> } />
        <Route path="/addteacher" element={ <AddTeacher teacherlist={teacherlist} setTeacherList={setTeacherList}/> } />
        <Route path="/student/edit/:id" element={ <EditStudent  studentlist={studentlist} /> } />
        <Route path="/teacher/edit/:id" element={ <EditTeacher  teacherlist={teacherlist} /> } />
      </Routes>
   
    </div>
  );
}
