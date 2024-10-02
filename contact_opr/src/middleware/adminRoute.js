
import {BrowserRouter as  Route, Navigate} from 'react-router-dom';

const AdminRoute = ({component :Component ,...rest}) =>{
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <Route 
            {...rest}
            render={
                props => user && user.role === 'admin' ? (
                    <Component {...props}/>
                ) :(
                    <Navigate to='/login'/>
                )
            }
        />
    )
};

export default AdminRoute;