import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
} from "@mui/x-data-grid";
// import SearchBar from "material-ui-search-bar";

import {
  Input,
  FormGroup,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import SearchBar from "material-ui-search-bar";
import { NavLink, Link, useLocation } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";

import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import TableList from "components/shared/Table/TableList";

const VISIBLE_FIELDS = ["name", "rating"];

const CustomToolbar = (props) => (
  <div>
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
    </GridToolbarContainer>
   
  </div>
);

const rows = [
  {
    id: 1,
    firstName: "Beatrix",
    lastName: "Potter",
    Email: "xyz.32.com",
    phone: "8721556552",
    package: "yearly",
    start_date: "02/45/2022",
    end_date: "25/24/2023",
    persnal_training: "no",
  },
  {
    id: 2,
    firstName: "Ann",
    lastName: "Martin",
    Email: "xyz.32.com",
    phone: "8721556552",
    package: "yearly",
    start_date: "02/45/2022",
    end_date: "25/24/2023",
    persnal_training: "no",
  },
  {
    id: 3,
    firstName: "Beverly",
    lastName: "Cleary",
    Email: "xyz.32.com",
    phone: "8721556552",
    package: "yearly",
    start_date: "02/45/2022",
    end_date: "25/24/2023",
    persnal_training: "no",
  },
 
  {
    id: 4,
    firstName: "Beverly",
    lastName: "Cleary",
    Email: "xyz.32.com",
    phone: "8718820714",
    package: "yearly",
    start_date: "02/45/2022",
    end_date: "25/24/2023",
    persnal_training: "no",
  },
];

function UserList() {
  const history=useHistory()
  
  const [searchText, setSearchText] = useState("");
  const [SearchValue,setSearchvalue]=useState("")
  const [pageSize, setPageSize] = useState(2);

  const [tableData, setTableData] = useState(rows);

  const [columns] = useState([
    {
      field: "id",
      headerName: "ID",
      width: 20,
      cellClassName: "super-app-theme--cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 100,
      editable: true,
      cellClassName: "super-app-theme--cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 100,
      editable: true,
      cellClassName: "super-app-theme--cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Email",
      headerName: "Email",
      width: 100,
      editable: true,
      cellClassName: "super-app-theme--cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "start_date",
      headerName: "DOB",

      width: 100,
      editable: true,
      cellClassName: "super-app-theme--cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "phone",
      headerName: "Phone",

      width: 100,
      editable: true,
      cellClassName: "super-app-theme--cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "package",
      headerName: "Package",
      type: "number",
      width: 100,
      editable: true,
      cellClassName: "super-app-theme--cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "start_date",
      headerName: "Start Date",

      width: 100,
      editable: true,
      cellClassName: "super-app-theme--cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "end_date",
      headerName: "End Date",

      width: 100,
      editable: true,
      cellClassName: "super-app-theme--cell",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "persnal_training",
      headerName: "PT",

      width: 30,
      editable: true,
      cellClassName: "super-app-theme--cell",
      headerClassName: "super-app-theme--header",
    },

    {
      field: "action",
      headerName: "Action",
      width: 100,
      sortable: false,
      disableClickEventBubbling: true,
      cellClassName: "super-app-theme--cell",
      headerClassName: "super-app-theme--header",

      renderCell: (params) => {
        const onClick = (e) => {
          const currentRow = params.row;
          return alert(JSON.stringify(currentRow, null, 4));
        };

        return (
          <div direction="row" spacing={2}>
            <MdOutlineModeEditOutline
              style={{
                fontSize: "20px",
                color: "#BEE64B",
                cursor: "pointer",
              }}
            />
            &nbsp; &nbsp;
            <MdDeleteForever
              style={{
                fontSize: "23px",
                color: "#CC3336",
                cursor: "pointer",
              }}
            />
          </div>
        );
      },
    },
  ]);

 console.log(SearchValue)
  const requestSearch = (searchValue) => {
   
    const searchRegex = new RegExp(`.*${searchValue}.*`, "ig");
    const filteredRows = rows.filter((o) => {
      return Object.keys(o).some((k) => {
        return searchRegex.test(o[k].toString());
      });
    });
    setTableData(filteredRows);
  };

  const cancelSearch = () => {
    setSearchText("");
    requestSearch(searchText);
  };

  const handleEvent = (
  params, // GridRowParams
  event, // MuiEvent<React.MouseEvent<HTMLElement>>
  details, // GridCallbackDetails
) => {
 history.push("/admin/client-detail")
};
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12" style={{}}>
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Clients List</CardTitle>
                 <SearchBar onChange={(e)=>{

requestSearch(e)
                 }} style={{width:"30%",float:"right",height:"35px", background: "black",border:"1px solid white",color:"red" }} />
              </CardHeader>

              <CardBody>
                <div style={{ height: 500, width: "100%" }}>
                  <DataGrid 
                  onRowClick={handleEvent} 
                    style={{ border: "none",}}
                    components={{ Toolbar: CustomToolbar }}
                    rows={tableData}
                    columns={columns}
                  
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserList;
