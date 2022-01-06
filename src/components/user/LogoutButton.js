import Button from "../atomic/Button";

const style = {
    border :"none",
    color :"black",
};
const LogoutButton = () => {
    const handleClick = () => {
        alert('로그아웃');
    };

    return (
        <div className="LogoutButton">
            <Button style={style} onClick={handleClick}>로그아웃</Button>
        </div>
    )
}
export default LogoutButton;