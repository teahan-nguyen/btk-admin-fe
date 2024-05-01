import './App.css';
import React from "react";
import AdminService from "@btk/common_admin/app";
import CMSCommonService from "@btk/common_services/cms";
import BlogCommonService from "@btk/common_services/blog";
// const AdminService = React.lazy(() => import('@btk/common_admin/app'));
// const CMSCommonService = React.lazy(() => import('@btk/common_services/cms'));

const App = () => {
    return (
        <div className="content">
            <h1>Udestiny</h1>
            <AdminService children={<><CMSCommonService/><BlogCommonService/></>}/>
        </div>
    );
};

export default App;
