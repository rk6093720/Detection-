import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Progress,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import WidgetsBrand from "./WidgetsBrand";
import WidgetsDropdown from "./WidgetsDropdown";
import MainChart from "./MainChart";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const progressExample = [
    { title: "Visits", value: "29.703 Users", percent: 40, color: "green" },
    { title: "Unique", value: "24.093 Users", percent: 20, color: "blue" },
    { title: "Pageviews", value: "78.706 Views", percent: 60, color: "orange" },
    { title: "New Users", value: "22.123 Users", percent: 80, color: "red" },
    {
      title: "Bounce Rate",
      value: "Average Rate",
      percent: 40.15,
      color: "purple",
    },
  ];

  const sidebarShow = useSelector((state) => state.store.sidebarUnfoldable);

  const tableExample = [
    {
      cars_plate: "1232342345345",
      status: "Enter",
      usage: {
        value: 50,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "green",
      },
      payment: "Mastercard",
      timeline: "10 sec ago",
    },
    {
      cars_plate: "1232342345345",
      status: "Exit",
      usage: {
        value: 22,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "blue",
      },
      payment: "Visa",
      timeline: "5 minutes ago",
    },
    {
      cars_plate: "1232342345345",
      status: "Enter",
      usage: {
        value: 74,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "orange",
      },
      payment: "Stripe",
      timeline: "1 hour ago",
    },
    {
      status: "Exit",
      cars_plate: "1232342345345",
      usage: { value: 98, period: "Jun 11, 2023 - Jul 10, 2023", color: "red" },
      timeline: "Last month",
    },
    {
      status: "Enter",
      cars_plate: "1232342345345",
      usage: {
        value: 22,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "purple",
      },
      timeline: "Last week",
    },
    {
      status: "Exit",
      cars_plate: "1232342345345",
      usage: {
        value: 43,
        period: "Jun 11, 2023 - Jul 10, 2023",
        color: "green",
      },
      timeline: "Last week",
    },
  ];
  const boxwidth = useBreakpointValue({
    base: "320px",
    md: "100%",
    lg: !sidebarShow ? "calc(100% - 0.5%)" : "100%",
  });
  return (
    <React.Fragment>
      <Box
        overflow={"scroll"}
        width={boxwidth}
        position={"absolute"}
        height={"495px"}
        border={"1px solid black"}
      >
        <WidgetsDropdown mb={4} />
        <Card mt={4}>
          <CardBody>
            <Flex justify="space-between" align="center">
              <Box>
                <Heading size="md" mb={0}>
                  vehicles
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  January - July 2023
                </Text>
              </Box>
              <HStack spacing={3}>
                <Button colorScheme="blue">
                  <DownloadIcon />
                </Button>
                <ButtonGroup>
                  {["Day", "Month", "Year"].map((value) => (
                    <Button
                      colorScheme="blue"
                      variant={value === "Month" ? "solid" : "outline"}
                      key={value}
                    >
                      {value}
                    </Button>
                  ))}
                </ButtonGroup>
              </HStack>
            </Flex>
            <MainChart />
          </CardBody>
          <CardFooter>
            <SimpleGrid
              columns={[1, 2, 3, 4, 5]}
              spacing={4}
              textAlign="center"
            >
              {progressExample.map((item, index) => (
                <Box key={index}>
                  <Text color="gray.500">{item.title}</Text>
                  <Text fontWeight="bold">
                    {item.value} ({item.percent}%)
                  </Text>
                  <Progress
                    mt={2}
                    colorScheme={item.color}
                    value={item.percent}
                    size="sm"
                  />
                </Box>
              ))}
            </SimpleGrid>
          </CardFooter>
        </Card>
        <WidgetsBrand mb={4} withCharts />
        <SimpleGrid columns={1}>
          <Card mb={4}>
            <CardHeader>Vehicles</CardHeader>
            <CardBody>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th textAlign={"start"}>Status</Th>
                      <Th textAlign={"start"}>Car's Number Plate</Th>
                      <Th textAlign={"start"}>Usage</Th>
                      <Th textAlign={"start"}>Timeline</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {tableExample.map((item, index) => (
                      <Tr key={index}>
                        <Td
                          textAlign={"start"}
                          bg={item.status === "Enter" ? "green" : "red"}
                          color={item.status === "Enter" ? "white" : "white"}
                        >
                          {item.status}
                        </Td>
                        <Td>{item.cars_plate}</Td>
                        <Td>
                          <Text fontWeight="bold">{item.usage.value}%</Text>
                          <Progress
                            colorScheme={item.usage.color}
                            value={item.usage.value}
                            size="sm"
                          />
                          <Text fontSize="xs" color="gray.500">
                            {item.usage.period}
                          </Text>
                        </Td>
                        <Td>{item.timeline}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
    </React.Fragment>
  );
};

export default Dashboard;

