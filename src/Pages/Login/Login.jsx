import Footer from "../../Components/LoginComponents/Footer/Footer";
import LoginForm from "../../Components/LoginComponents/Login/LoginForm";
 import NavBar from "../../Components/LoginComponents/NavBar/NavBar";
import { LoginPage } from "./Login";

export default function Login(){
    return(
        <LoginPage>
            <NavBar/>
            <LoginForm/>
            <Footer/>
        </LoginPage>
    );
}