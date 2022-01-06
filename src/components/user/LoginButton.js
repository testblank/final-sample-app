import Button from "@components/atomic/Button";

const style = {
    border :"none",
    color :"black",
};
const LoginButton = () => {
    const handleClick = () => {
        alert('로그인');
    };

    return (
        <div className="LoginButton">
            <Button style={style} onClick={handleClick}>로그인</Button>
        </div>
    )
}
export default LoginButton;