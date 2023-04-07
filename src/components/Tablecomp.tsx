import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import "./Tablecomp.css";
import { data, Q1, Q2, Q3, Q4 } from "./metadata";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Tablecomp = () => {
  const [click, setClick] = useState(false);
  const [id, setId] = useState("");
  const [subdata, setSubdata] = useState<any>();
  const handleClick = (value: string) => {
    setId(value);
    setClick(!click);
    switch (value) {
      case "Q1":
        setSubdata(Q1);
        break;
      case "Q2":
        setSubdata(Q2);
        break;
      case "Q3":
        setSubdata(Q3);
        break;
      case "Q4":
        setSubdata(Q4);
        break;
      default:
        setSubdata([]);
    }
  };
  return (
    <TableContainer className="main">
      <Table size="md" className="table">
        <Thead className="head">
          <Tr>
            <Th>Values</Th>
            {data.map((value, index) => {
              return (
                <>
                  <Th
                    onClick={() => {
                      handleClick(value.time);
                    }}
                    key={index}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "1px",
                        alignItems: "center",
                      }}
                    >
                      {value.time}{" "}
                      {click && id === value.time ? (
                        <AiOutlineArrowLeft />
                      ) : (
                        <AiOutlineArrowRight />
                      )}
                    </div>
                  </Th>
                  {click && id === value.time && (
                    <>
                      {subdata?.map((value: any, index: any) => {
                        return (
                          <>
                            <Th
                              onClick={() => {
                                handleClick(value.month);
                              }}
                              key={index}
                            >
                              {value.month}
                            </Th>
                          </>
                        );
                      })}
                    </>
                  )}
                </>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Revenue</Td>
            {data.map((value, index) => {
              return (
                <>
                  <Td key={index}>{value.indicators[0].value}</Td>
                  {click && id === value.time && (
                    <>
                      {subdata?.map((value: any, index: any) => {
                        return (
                          <>
                            <Td className="col" key={index}>
                              {value.indicators[0].value}
                            </Td>
                          </>
                        );
                      })}
                    </>
                  )}
                </>
              );
            })}
          </Tr>
          <Tr>
            <Td>Expense</Td>
            {data.map((value, index) => {
              return (
                <>
                  <Td key={index}>{value.indicators[1].value}</Td>
                  {click && id === value.time && (
                    <>
                      {subdata?.map((value: any, index: any) => {
                        return (
                          <>
                            <Td className="col" key={index}>
                              {value.indicators[1].value}
                            </Td>
                          </>
                        );
                      })}
                    </>
                  )}
                </>
              );
            })}
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Tablecomp;
