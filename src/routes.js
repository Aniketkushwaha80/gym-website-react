import ClientDeatil from "views/Clients/";
import Dashboard from "views/Dashboard/";
import Helper from "views/Helpers";
import Icons from "views/Icons";
import AddNewPackage from "views/Packages/Add";
import PackageList from "views/Packages/";

import PdfCharts from "views/Charts/Add";


import UserProfile from "views/Users/Profile";
import UserList from "views/UserList";
import AddCoupon from "views/Coupon/coupon";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },

  

  {
    path: "/userlist",
    name: "Clients",
    rtlName: "clients",
    icon: "tim-icons icon-single-02",
    component: UserList,
    layout: "/admin",
  },
  {
    path: "/package-list",
    name: "Package List ",
    rtlName: "package_list",
    icon: "tim-icons icon-single-02",
    component: PackageList,
    layout: "/admin",
  },
  {
    path: "/Charts",
    name: "Charts",
    rtlName: "charts",
    icon: "tim-icons icon-notes",
    component: PdfCharts,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Add Client",
    rtlName: "Add Client",
    icon: "tim-icons icon-simple-add",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/client-detail",
    name: "Client Detail",
    rtlName: "Client Detail",
    icon: "tim-icons icon-simple-add",
    component: ClientDeatil,
    layout: "/admin",
  },
  {
    path: "/Add-package",
    name: "Add Package",
    rtlName: "add_package",
    icon: "tim-icons icon-simple-add",
    component: AddNewPackage,
    layout: "/admin",
  },

  {
    path: "/Add-coupon",
    name: "Add coupon",
    
    icon: "tim-icons icon-simple-add",
    component: AddCoupon,
    layout: "/admin",
  },

  {
    path: "/helpers",
    name: "helpers",
    rtlName: "helpers",
    icon: "tim-icons icon-support-17",
    component: Helper,
    layout: "/admin",
  },

   {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin"
  },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },

  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl"
  // }
];
export default routes;
