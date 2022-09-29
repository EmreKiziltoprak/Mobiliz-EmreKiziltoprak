import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



const Header = (props) => {

    const [value, setValue] = useState(3);

    const handleChange = (event, newValue) => {
      setValue(3);
    };
    
    const handleClick = (event) => {
      console.log(event);
    }

    const location = useLocation();
    console.log(location.pathname);


    
  return (
    <AppBar position="sticky" sx={{ paddingBottom: 343 }}>
      <Toolbar>
        <Tabs
          value={value}
          onChange={handleChange}
          
        >
          <Link to={"vehicles"}>
            <Tab label="Vehicles">
              Load Comments
            </Tab>
          </Link>

          <Link to={"models"}>
            <Tab label="Models"/>
          </Link>

          <Link to={"locations"}>
            <Tab label="Locations"  />
          </Link>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
