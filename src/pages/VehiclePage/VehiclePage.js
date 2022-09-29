import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import CarCard from "../../features/carOperations/components/carForm/CarCard";
import {
  useAddCarMutation,
  useCarFilterQuery,
  useGetCarsQuery,
} from "../../store/api/apiSlice";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./VehiclePage.scss";
import { string } from "prop-types";
import AlertDialogSlide from "../../features/popup/CarAlert";
import axios from "axios";
function VehiclePage() {

  const [filter, setFilter] = useState("");
  const [showing, setShowing] = useState(false);

  const [filteredCars, setFilteredCars] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const [textValue, setTextValue] = useState("");

  const { data = [], isLoading, isFetching, isError } = useGetCarsQuery();

  const [addCar, { data: addCardata, addCarisError, addCarError }] =
    useAddCarMutation();

  const getFilteredCars = (plate = "", brand = "", model = "") => {
    axios
      .get("https://test001.testnet.mobiliz.com.tr/interview/vehicles", {
        params: { plate: plate, brand: brand, model: model },
      })
      .then((response) => {
        console.log(response);
        setFilteredCars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onTextChange = (e) => setTextValue(e.target.value);

  const [initial, setInitial] = useState(true);
  return (
    <main>
      <div className="models__search">
        <h4>Vehicles</h4>
        <AlertDialogSlide
          isShowing={showing}
          setShowing={setShowing}
          text=""
          title=""
        />
        <TextField
          value={textValue}
          onChange={(e) => {
            onTextChange(e);

            setInitial(false);
          }}
          id="outlined-basic"
          label={`Search ${filter}..`}
        />

        <FormControl sx={{ width: "100px" }}>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Filter"
            onChange={handleChange}
          >
            <MenuItem value={"plate"}>Plate</MenuItem>
            <MenuItem value={"brand"}>Brand</MenuItem>
            <MenuItem value={"model"}>Model</MenuItem>
          </Select>
        </FormControl>

        <Button
          style={{
            borderRadius: 15,
            backgroundColor: "#CAB8AD",
            padding: "6px 12px",
            fontSize: "1rem",
          }}
          variant="contained"
          onClick={() => {
            if (filter == "plate") {
              getFilteredCars(textValue, "", "");
            }
            if (filter == "brand") {
              getFilteredCars("", textValue, "");
            }
            if (filter == "model") {
              getFilteredCars("", "", textValue);
            }
          }}
        >
          Search
        </Button>

        <Button
          style={{
            borderRadius: 15,
            backgroundColor: "#CAB8AD",
            padding: "6px 12px",
            fontSize: "1rem",
          }}
          variant="contained"
          onClick={() => {
            setShowing(true);
          }}
        >
          Add Vehicle
        </Button>
      </div>
      <div className="vehicle__container">
        {!isLoading &&
          textValue == "" &&
          data.map((item) => <CarCard item={item} key={item.id} />)}

        {textValue != "" &&
          filteredCars &&
          filteredCars.map((item) => <CarCard item={item} key={item.id} />)}
      </div>
    </main>
  );
}

export default VehiclePage;

/*
               getFilteredCars(
                 (plate = "e.current.value"),
                 (brand = ""),
                 (model = "")
               ); */
