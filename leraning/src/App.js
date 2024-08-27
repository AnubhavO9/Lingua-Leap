import Home from "./Home/Home";
import Header from "./Layouts/Header";
import { Route, Routes, Router } from "react-router-dom";
import LoginPortal from './Home/LoginPortal';
import TeacherSignup from "./Teacher/TeacherSignup";
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherProfile from "./Teacher/TeacherProfile";
import TeacherDash from "./Teacher/TeacherDash";
import Review from "./Home/Review";
import About from "./Home/About";
import Service from "./Home/Service";
import Footer from "./Layouts/Footer";
import Tcal from "./Teacher/Tcal";
import StudyMaterial from "./Teacher/StudyMaterial";
import Meet from "./Teacher/Meet";
import AddDrop from "./Admin/AddDrop";
import Registered from "./Admin/Registered";
import StudentEnroll from "./Admin/StudentEnroll";
import TeacherDetail from "./Admin/TeacherDetail";
import AddLanguages from "./Student/AddLanguages";
import German from "./Student/German";
import ChangePassword from "./Admin/ChangePassword";
import StartMeeting from "./Student/StartMeeting";
import Material from "./Student/Material";
import AdminLogin from "./Admin/AdminLogin";
import Signup from "./Student/Signup";
import Login from "./Student/Login";
import Select from "./Student/Select";
import Req from "./Student/Req";
import PresentLearning from "./Student/PresentLearning";
import StudentProfile from "./Student/Studentprofile";
import StudCal from "./Student/StudCal";
import ReviewS from "./Student/ReviewS";
import ReviewT from "./Teacher/ReviewT";






function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginportal" element={<LoginPortal />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/footer" element={< Footer />} />

          
          {/* Teacher side */}
          <Route path="/teachersignup" element={<TeacherSignup />} />
          <Route path="/teacherlogin" element={<TeacherLogin />} />
          <Route path="/teacherprofile" element={<TeacherProfile />} />
          <Route path="/teacherdash" element={<TeacherDash />} />
          <Route path='/teachercalendar' element={<Tcal />} />
          <Route path="/studymaterial" element={<StudyMaterial />} />
          <Route path="/meet" element={<Meet />} />
          <Route path="/addreviewT" element={<ReviewT />} />

          {/* Student side */}
          <Route path="/studentsignup" element={<Signup />} />
          <Route path="/studentlogin" element={<Login />} />
          <Route path="/select" element={<Select />} />
          <Route path='/req' element={<Req />} />
          <Route path="/studentprofile" element={<StudentProfile />} />
          <Route path="/presentlearning" element={<PresentLearning />} />
          <Route path="/startmeeting" element={<StartMeeting />} />
          <Route path='/studentcalendar' element={<StudCal />} />
          <Route path="/material" element={<Material />} />
          <Route path="/german" element={<German />} />
          <Route path="/addlanguages" element={<AddLanguages />} />
          <Route path="/addreview" element={<ReviewS />} />



          {/* Admin side */}
          <Route path="/admin" element={<AdminLogin />} />
            <Route path="/changepassword" element={<ChangePassword />} />
          <Route path='/registered' element={<Registered />} />
          <Route path='/studentenroll' element={<StudentEnroll />} />
          <Route path='/teacherdetail' element={<TeacherDetail />} />
          <Route path='/adddrop' element={<AddDrop />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
