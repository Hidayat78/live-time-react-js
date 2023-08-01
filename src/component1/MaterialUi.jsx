// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import { Paper } from "@mui/material";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import pic4 from "./image/pic4.jpg";
// import { Style } from "@mui/icons-material";
// import Carousel from "react-material-ui-carousel";
// import pic1 from "./image/pic1.jpg";
// import pic3 from "./image/pic3.jpg";

// const pages = ["Home", "About", "Services"];
// const settings = ["Profile", "Cart", "Logout"];

// function MaterialUi() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   var items = [
//     {
//       pic: pic1
//     },
//     {

//       pic: pic1
//     },
//     {
//       pic: pic3
//     },
//   ];
//   function Item(props) {
//     return (
//       <Paper>
//         {/* <h2>{props.item.name}</h2>
//         <p>{props.item.description}</p> */}
//         <img src={props.item.pic} height="500px" width="100%" />
//       </Paper>
//     );
//   }
//   return (
//     <>
//       {/* Navbar start */}
//       <AppBar position="sticky">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               HIDAYAT
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href=""
//               sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               HIDAYAT
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: "white", display: "block" }}
//                 >
//                   {page}
//                 </Button>
//               ))}
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar alt="Hidayat" src={pic4} />
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: "45px" }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       {/* Navbar ends */}

//       {/* crousel start */}
//       <Carousel>
//         {items.map((item, i) => (
//           <Item key={i} item={item} />
//         ))}
//       </Carousel>
//       {/* crousel end */}

//       {/* product section */}
//       <h3 className="text-light text-center bg-primary p-3">Product Section</h3>
//       <Grid container spacing={2}>
//         <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
//           <h1>HIDAYAT</h1>
//         </Grid>
//       </Grid>
//       {/* end product section */}
//     </>
//   );
// }
// export default MaterialUi;
