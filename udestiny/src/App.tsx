import './App.css';
import React from "react";
import AdminService from "common_admin/app";
import CMSCommonService from "common_services/cms";
// const AdminService = React.lazy(() => import('common_admin/app'));
// const CMSCommonService = React.lazy(() => import('common_services/cms'));

const App = () => {
    return (
        <div className="content">
            <h1>Udestiny</h1>
            <AdminService children={<CMSCommonService/>}/>
        </div>
    );
};

export default App;
