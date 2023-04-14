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
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const data = [
  {
    month: "January",
    indicators: [
      { name: "revenue", value: 10000 },
      { name: "expenses", value: 8000 },
    ],
  },
  {
    month: "February",
    indicators: [
      { name: "revenue", value: 12000 },
      { name: "expenses", value: 10000 },
    ],
  },
  {
    month: "March",
    indicators: [
      { name: "revenue", value: 9000 },
      { name: "expenses", value: 7000 },
    ],
  },
  {
    month: "April",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "May",
    indicators: [
      { name: "revenue", value: 8000 },
      { name: "expenses", value: 6000 },
    ],
  },
  {
    month: "June",
    indicators: [
      { name: "revenue", value: 14000 },
      { name: "expenses", value: 12000 },
    ],
  },
  {
    month: "July",
    indicators: [
      { name: "revenue", value: 9000 },
      { name: "expenses", value: 7000 },
    ],
  },
  {
    month: "August",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "September",
    indicators: [
      { name: "revenue", value: 10000 },
      { name: "expenses", value: 8000 },
    ],
  },
  {
    month: "Octomber",
    indicators: [
      { name: "revenue", value: 12000 },
      { name: "expenses", value: 10000 },
    ],
  },
  {
    month: "November",
    indicators: [
      { name: "revenue", value: 9000 },
      { name: "expenses", value: 7000 },
    ],
  },
  {
    month: "December",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
];

const Tablecomp = () => {
  const [click, setClick] = useState(false);
  const [id, setId] = useState("");
  const [subdata, setSubdata] = useState<any>();
  const handleClick = (value: string) => {
    setId(value);
    setClick(!click);
    switch (value) {
      case "Q1":
        setSubdata([data[0], data[1], data[2]]);
        break;
      case "Q2":
        setSubdata([data[4], data[3], data[5]]);
        break;
      case "Q3":
        setSubdata([data[6], data[7], data[8]]);
        break;
      case "Q4":
        setSubdata([data[9], data[10], data[11]]);
        break;
      default:
        setSubdata([]);
    }
  };

  const abc = ["Q1", "Q2", "Q3", "Q4"];
  return (
    <TableContainer className="main">
      <Table size="md" className="table">
        <Thead className="head">
          <Tr>
            <Th>Values</Th>
            {abc.map((month, index) => {
              return (
                <>
                  <Th
                    onClick={() => {
                      handleClick(month);
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
                      {month}
                      {click && id === month ? (
                        <AiOutlineArrowLeft />
                      ) : (
                        <AiOutlineArrowRight />
                      )}
                    </div>
                  </Th>
                  {click && id === month && (
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
            {abc.map((value, index) => {
              return (
                <>
                  <Td>800</Td>
                  {click && id === value && (
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
            {abc.map((value, index) => {
              return (
                <>
                  <Td>1200</Td>
                  {/* <Td key={index}>{value.indicators[1].value}</Td> */}
                  {click && id === value && (
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
