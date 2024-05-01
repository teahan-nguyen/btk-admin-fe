import './App.css';
import {ReactNode} from "react";

const App = ({children}: { children: ReactNode }) => {
    return (
        <div className="content">
            <h1>This is Common Admin</h1>
            {children}
            <h2>This is Admin Role</h2>
        </div>
    );
};

export default App;
