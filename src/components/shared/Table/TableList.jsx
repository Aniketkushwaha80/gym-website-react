import React from "react";

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

const TableList = (prop) => {
  

  return (
    <div>
      <Table className="tablesorter" responsive>
        <thead className="text-primary">
          <tr>
            <th>S.NO.</th>

            {prop.tablehead.map((evt, index) => (
              <th key={index}>{evt}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {prop.data.map((client,index) => (
            <tr key={index}>
              {Object.keys(client).map((key, keyindex) => {
                return (
                  <>
                    {key == "firstName" || key == "lastName" ? (
                      <>
                        {key == "lastName" ? (
                          
                            <td  >
                              {client.firstName} {client.lastName}
                            </td>
                         
                        ) : (
                          ""
                        )}
                      </>
                    ) : (
                      <td key={client[key]}>{client[key]}</td>
                    )}
                  </>
                );
              })}
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
    </div>
  );
};

export default TableList;
