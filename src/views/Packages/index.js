import React, { useEffect, useState } from "react";
import {
  Input,
  FormGroup,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

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

function PackageList() {
  const [SearchValue, setSearchValue] = useState("");

  const [Package, setPackage] = useState([
    {
      id: 1,
      Package: "5 month plan",
      Amount: 4560,
 
    },
     {
      id: 2,
      Package: "6 month plan",
      Amount: 1560,
 
    },
  
  ]);

  // paginsation
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Records to be displayed on the current page
  const currentRecords = Package.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(Package.length / recordsPerPage);
  const pagenumber = [];

  for (var i = 1; i <= nPages; i++) {
    pagenumber.push(i);
  }

  // sorting
  const SortClients = (shortValue) => {
    
    const sortData = [...Package];
    if (shortValue.target.value == "a-z") {
      sortData.sort(function (a, b) {
        if (a.Amount > b.Amount) {
          return 1;
        } else if (a.Amount < b.Amount) {
          return -1;
        } else {
          return 0;
        }
      });
      setPackage(sortData);
    }
    if (shortValue.target.value == "z-a") {
      sortData.sort(function (a, b) {
        if (a.Amount < b.Amount) {
          return 1;
        } else if (a.Amount > b.Amount) {
          return -1;
        } else {
          return 0;
        }
      });
      setPackage(sortData);
    }
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <CardTitle tag="h4">Package List</CardTitle>
                <Input
                  onChange={(event) => {
                    setSearchValue(event.target.value);
                  }}
                  placeholder="Search"
                  style={{ width: "25%" }}
                />
              </CardHeader>

              <Input
                style={{
                  width: "20%",
                  float: "right",
                  backgroundColor: "black",
                }}
                id="exampleSelect"
                name="select"
                type="select"
                onChange={SortClients}
              >
                <option>Filter</option>
       
                <option value="a-z">Asc</option>
                <option value="z-a">Desc</option>
              </Input>

              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>S.NO.</th>
                      <th>Package</th>
                      <th>Price</th>
                      <th>Edit</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {
                     Package.map((client) => (
                        <tr>
                          <td>{client.id}</td>
                          <td>
                            {client.Package} 
                          </td>
                          <td>{client.Amount}</td>
                        
                         
                          <td>
                            <MdOutlineModeEditOutline
                              style={{
                                fontSize: "20px",
                                color: "#BEE64B",
                                cursor: "pointer",
                              }}
                            />{" "}
                            &nbsp;
                            <MdDeleteForever
                              style={{
                                fontSize: "23px",
                                color: "#CC3336",
                                cursor: "pointer",
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </CardBody>

              <Pagination style={{ float: "right" }}>
                <PaginationItem>
                  <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem
                  onClick={() => {
                    if (currentPage != 1) {
                      setCurrentPage(currentPage - 1);
                    }
                  }}
                >
                  <PaginationLink href="#" previous />
                </PaginationItem>
                {pagenumber.map((event, index) => (
                  <PaginationItem
                    key={index}
                    onClick={() => {
                      setCurrentPage(event);
                    }}
                  >
                    <PaginationLink href="#">{event}</PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem
                  onClick={() => {
                    if (nPages > currentPage) {
                      setCurrentPage(currentPage + 1);
                    }
                  }}
                >
                  <PaginationLink href="#" next />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" last />
                </PaginationItem>
              </Pagination>
            </Card>
            <NavLink to={"/admin/Add-package"}>
              <Button color="info">Add Package</Button>
            </NavLink>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PackageList;
