import { Box,useToast, Button,Flex, Checkbox, FormControl, FormLabel, Input,Heading, Text } from '@chakra-ui/react';
import React,{useState,useEffect} from 'react';
import backgroundimage from '../assets/Images/background.jpg';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LoginUser} from "../Redux/Auth/action";
import {LOGIN_SUCCESS} from "../Redux/Auth/actionTypes";
const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [flag, setFlag] = useState(false);
   const [isCheck,setIsCheck]=useState(false);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const toast = useToast();
   const handleForm = (e) => {
     e.preventDefault();
     const form = e.currentTarget;
     console.log(form)
     if (form.checkValidity() === false) {
       e.stopPropagation();
       setFlag(true);
       return;
     }
     const payload = {
       email,
       password,
     };
     dispatch(LoginUser(payload))
       .then((r) => {
         if (r.type === LOGIN_SUCCESS) {
           navigate("/dashboard");
           localStorage.setItem("rememberedEmail", email);
           localStorage.setItem("rememberedPassword", password);
           toast({
             title: "Login Successfully.",
             description: "Account Created",
             status: "success",
             duration: 2000,
             isClosable: true,
             position: "top",
           });
         } else if (r.payload.response.status === 401) {
           toast({
             title: "check email or Password is wrong",
             description: "write correct password",
             status: "error",
             duration: 2000,
             isClosable: true,
             position: "top",
           });
         }
       })
       .catch((e) => {
         toast({
           title: "Login unsuccessfully.",
           description: "We've created your account for you.",
           status: "error",
           duration: 2000,
           isClosable: true,
           position: "top",
         });
       });
   };
   useEffect(() => {
     const storedEmail = localStorage.getItem("rememberedEmail");
     const storedPassword = localStorage.getItem("rememberedPassword");

     if (storedEmail && storedPassword) {
       setEmail(storedEmail);
       setPassword(storedPassword);
     }
   }, []);
  return (
    <Box
      width={{ base: "300px", md: "760px", lg: "1280px" }}
      height={{ base: "472px", md: "1000px", lg: "580px" }}
      margin={"auto"}
      padding={"4px"}
      marginTop={"2px"}
      backgroundImage={`url(${backgroundimage})`}
      backgroundSize={"cover"}
      backgroundPosition={"fixed"}
      backgroundRepeat={"no-repeat"}
      imageRendering={"-webkit-optimize-contrast"}
      opactiy={"0.5"}
      overflow={"hidden"}
    >
      <Box
        width={{ base: "300px", md: "100%", lg: "30%" }}
        // border={{
        //   base: "1px solid red",
        //   md: "1px solid blue",
        //   lg: "1px solid green",
        // }}
        height={{ base: "100%", md: "100%", lg: "100%" }}
        margin={"auto"}
      >
        <Heading
          color={"white"}
          padding={4}
          fontSize={{ base: "15px", md: "24px", lg: "20px" }}
          textAlign={"center"}
        >
          Welcome to Security Application For Login
        </Heading>
        <Box
          width={{
            base: "100%",
            md: "100%",
            lg: "100%",
            color: "white",
            backgroundColor: "white",
          }}
        >
          <form onSubmit={handleForm} noValidate validate={flag}>
            <FormControl isRequired>
              <FormLabel color={"white"}>Email</FormLabel>
              <Input
                type="email"
                placeholder="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                color={"white"}
              />
            </FormControl>
            <br />
            <FormControl isRequired>
              <FormLabel color={"white"}>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </FormControl>
            <br />
            <Flex justifyContent={"space-between"}>
              <Checkbox
                isChecked={isCheck}
                onChange={(e) => setIsCheck(e.target.checked)}
                border={"blue"}
                color={"white"}
              >
                Remember Me
              </Checkbox>
              <Box>
                <Link to={"/forgetpassword"}>
                  <Text color={"white"}>ForgetPassword</Text>
                </Link>
              </Box>
            </Flex>
            <br />
            <Button
              color={"black"}
              type="submit"
              border={"1px solid black"}
              width={"100%"}
            >
              Login
            </Button>
          </form>
        </Box>
        <br />
        <Box width={"100%"}>
          <Button
            backgroundColor={"blue"}
            border={"1px solid blue"}
            width={"50%"}
            color={"white"}
          >
            Facebook
          </Button>
          <Button
            backgroundColor={"Red"}
            border={"1px solid Red"}
            width={"50%"}
            color={"white"}
          >
            Google
          </Button>
        </Box>
        <br />
        <Box color={"white"}>
          If you don't have account on Security Application then
          <br />
          <Link to="/register">
            <Button color="black" active>
              Register Now!
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}      

export default Login;
