import {Link} from "react-router";

const Home =()=>{
    return(
        <>
            <h2>Trang chủ</h2>
            <ul>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/student'}>StudentManager</Link></li>
            </ul>
        </>
    )
}
export default Home ;