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
} from "@chakra-ui/react";
import {
  ArrowDownIcon,
  ChevronDownIcon,
  DownloadIcon,
  InfoIcon,
  WarningIcon,
  CheckCircleIcon,
  CloseIcon,
  TimeIcon,
} from "@chakra-ui/icons";

// import cars_plate1 from "../assets/Images/background.jpg";
// import cars_plate2 from "../assets/Images/background.jpg";
// import cars_plate3 from "../assets/Images/background.jpg";
// import cars_plate4 from "../assets/Images/background.jpg";
// import cars_plate5 from "../assets/Images/background.jpg";
// import cars_plate6 from "../assets/Images/background.jpg";

import WidgetsBrand from "./WidgetsBrand";
import WidgetsDropdown from "./WidgetsDropdown";
import MainChart from "./MainChart";
import { color } from "framer-motion";

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

  // const progressGroupExample1 = [
  //   { title: "Monday", value1: 34, value2: 78 },
  //   { title: "Tuesday", value1: 56, value2: 94 },
  //   { title: "Wednesday", value1: 12, value2: 67 },
  //   { title: "Thursday", value1: 43, value2: 91 },
  //   { title: "Friday", value1: 22, value2: 73 },
  //   { title: "Saturday", value1: 53, value2: 82 },
  //   { title: "Sunday", value1: 9, value2: 69 },
  // ];

  // const progressGroupExample2 = [
  //   { title: "Male", icon: <ChevronDownIcon />, value: 53 },
  //   { title: "Female", icon: <ChevronDownIcon />, value: 43 },
  // ];

  // const progressGroupExample3 = [
  //   {
  //     title: "Organic Search",
  //     icon: <ArrowDownIcon />,
  //     percent: 56,
  //     value: "191,235",
  //   },
  //   {
  //     title: "Facebook",
  //     icon: <ArrowDownIcon />,
  //     percent: 15,
  //     value: "51,223",
  //   },
  //   { title: "Twitter", icon: <ArrowDownIcon />, percent: 11, value: "37,564" },
  //   { title: "LinkedIn", icon: <ArrowDownIcon />, percent: 8, value: "27,319" },
  // ];

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

  return (
    <Box
      overflow={"scroll"}
      width={"100%"}
      height={"450px"}
      border={"1px solid black"}
    >
      <WidgetsDropdown mb={4} />
      <Card mt={4}>
        <CardBody>
          <Flex justify="space-between" align="center">
            <Box>
              <Heading size="md" mb={0}>
                Traffic
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
          <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={4} textAlign="center">
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
                    {/* <HStack spacing={6} textAlign={"start"}>
                      <Th textAlign={"start"}>Image</Th>
                      <Th textAlign={"start"}>User</Th>
                    </HStack> */}
                    <Th textAlign={"start"}>status</Th>
                    <Th textAlign={"start"}>Car's Number Plate</Th>
                    <Th textAlign={"start"}>Usage</Th>
                    <Th textAlign={"start"}>timeline</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {tableExample.map((item, index) => (
                    <Tr key={index}>
                      {/* <Td>
                        <HStack spacing={6}>
                          <cars_plate
                n"1232342345345"me={item.user.name}
                            size="sm"
                          />
                          <Box>
                            <Text fontWeight="bold">{item.user.name}</Text>
                            <Text fontSize="sm" color="gray.500">
                              {item.user.registered}
                            </Text>
                          </Box>
                        </HStack>
                      </Td> */}
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
                      {/* <Td>{item.payment}</Td> */}
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
  );
};

export default Dashboard;
  // <Card mb={4}>
  //   <CardHeader>Traffic & Sales</CardHeader>
  //   <CardBody>
  //     <SimpleGrid columns={[1, null, 2]} spacing={4}>
  //       {/* <Box> */}
  //       {/* <SimpleGrid columns={2} spacing={4}>
  //                 <Box borderLeft="4px solid" borderColor="blue.500" p={3}>
  //                   <Text fontSize="sm" color="gray.500">
  //                     New Clients
  //                   </Text>
  //                   <Text fontSize="lg" fontWeight="bold">
  //                     9,123
  //                   </Text>
  //                 </Box>
  //                 <Box borderLeft="4px solid" borderColor="red.500" p={3}>
  //                   <Text fontSize="sm" color="gray.500">
  //                     Recurring Clients
  //                   </Text>
  //                   <Text fontSize="lg" fontWeight="bold">
  //                     22,643
  //                   </Text>
  //                 </Box>
  //               </SimpleGrid> */}
  //       {/* <Box mt={4}>
  //                 {progressGroupExample1.map((item, index) => (
  //                   <Box key={index} mb={4}>
  //                     <Text fontSize="sm" color="gray.500">
  //                       {item.title}
  //                     </Text>
  //                     <HStack spacing={2}>
  //                       <Progress
  //                         colorScheme="blue"
  //                         value={item.value1}
  //                         flex={1}
  //                         size="sm"
  //                       />
  //                       <Progress
  //                         colorScheme="red"
  //                         value={item.value2}
  //                         flex={1}
  //                         size="sm"
  //                       />
  //                     </HStack>
  //                   </Box>
  //                 ))}
  //               </Box> */}
  //       {/* </Box>
  //             <Box> */}
  //       {/* <SimpleGrid columns={2} spacing={4}>
  //                 <Box borderLeft="4px solid" borderColor="orange.500" p={3}>
  //                   <Text fontSize="sm" color="gray.500">
  //                     Pageviews
  //                   </Text>
  //                   <Text fontSize="lg" fontWeight="bold">
  //                     78,623
  //                   </Text>
  //                 </Box>
  //                 <Box borderLeft="4px solid" borderColor="purple.500" p={3}>
  //                   <Text fontSize="sm" color="gray.500">
  //                     Organic
  //                   </Text>
  //                   <Text fontSize="lg" fontWeight="bold">
  //                     49,123
  //                   </Text>
  //                 </Box>
  //               </SimpleGrid> */}
  //       {/* <Box mt={4}>
  //                 {progressGroupExample2.map((item, index) => (
  //                   <Box key={index} mb={4}>
  //                     <Text fontSize="sm" color="gray.500">
  //                       {item.title}
  //                     </Text>
  //                     <HStack spacing={2}>
  //                       <Progress
  //                         colorScheme="blue"
  //                         value={item.value}
  //                         flex={1}
  //                         size="sm"
  //                       />
  //                       <Box>{item.icon}</Box>
  //                     </HStack>
  //                   </Box>
  //                 ))}
  //               </Box> */}
  //       {/* <Box mt={4}>
  //                 {progressGroupExample3.map((item, index) => (
  //                   <Box key={index} mb={4}>
  //                     <Flex justify="space-between" align="center">
  //                       <Text fontSize="sm" color="gray.500">
  //                         {item.title}
  //                       </Text>
  //                       <Text fontSize="sm" fontWeight="bold">
  //                         {item.value}
  //                       </Text>
  //                     </Flex>
  //                     <Progress
  //                       mt={2}
  //                       colorScheme="blue"
  //                       value={item.percent}
  //                       size="sm"
  //                     />
  //                   </Box>
  //                 ))}
  //               </Box> */}
  //       {/* </Box> */}
  //     </SimpleGrid>
  //   </CardBody>
  //   <CardFooter>
  //     {/* <ButtonGroup spacing={2}>
  //             <Button colorScheme="blue">
  //               <CheckCircleIcon />
  //             </Button>
  //             <Button colorScheme="yellow">
  //               <WarningIcon />
  //             </Button>
  //             <Button colorScheme="green">
  //               <InfoIcon />
  //             </Button>
  //             <Button colorScheme="red">
  //               <CloseIcon />
  //             </Button>
  //           </ButtonGroup> */}
  //   </CardFooter>
  // </Card>;