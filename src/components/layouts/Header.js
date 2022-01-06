import LoginButton from "@components/user/LoginButton";
import LogoutButton from "@components/user/LogoutButton";

const Header = () => {
    const isLogin = false;

    return (
        <div>
            {isLogin ? <LogoutButton/> : <LoginButton/>}
        </div>
    )
}

export default Header;