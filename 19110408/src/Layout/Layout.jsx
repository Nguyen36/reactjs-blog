import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

function Layout(props) {
    return ( 
        
        <div>
            <Header></Header>
                {props.children}
            <Footer></Footer>
        </div>
    );
}

export default Layout;