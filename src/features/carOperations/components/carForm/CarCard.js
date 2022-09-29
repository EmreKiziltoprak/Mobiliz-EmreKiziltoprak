import React, { useEffect, useState } from "react";
import "./CarCard.scss";
import {
  useDeleteCarMutation,
  useUpdateCarMutation,
} from "../../../../store/api/apiSlice";
import { Snackbar, TextField } from "@material-ui/core";
import { Alert, Button } from "@mui/material";
import AlertDialogSlide from "../../../popup/CarAlert";
function CarCard({ item }) {
  //TODO: DELETE CAR
  const [deleteCar, { data, isError, error }] = useDeleteCarMutation();
  const [showinga, setShowing] = useState(true);
  const [plate, setPlate] = useState(item.plate);
  const [brand, setBrand] = useState(item.brand);
  const [model, setModel] = useState(item.model);
  const [modelYear, setModelYear] = useState(item.modelYear);
  const [notes, setNotes] = useState(item.notes);

  const [plateError, setPlateError] = useState("");
  const [yearError, setYearError] = useState("");
  const [notesError, setNotesError] = useState("");
  const [showError, setShowError] = useState(false);
  //TODO: UPDATE CAR
  const [
    updateCar,
    { data: UpdateData, isError: isUpdateError, error: updateError },
  ] = useUpdateCarMutation();


  useEffect(() => {
    
  if(showError==true){
    
      setTimeout(() => {
        setShowError(false);
      }, 2000);
      
  }
  }, [showError])
  
  return (
    <section className="card">
      {showError && (
        <Alert autoHideDuration={0} severity="error">
          {plateError + yearError + notesError}
      </Alert>
      )}



      <div className="card__info">
        <TextField
          label="Plate"
          id="filled-hidden-label-small"
          value={plate}
          onChange={(e) => {
            setPlate(e.target.value);
          }}
          variant="filled"
          required
          size="small"
        />
        <TextField
          label="Brand"
          id="filled-hidden-label-small"
          value={brand}
          disabled
          onChange={(e) => {
            setBrand(e.target.value);
          }}
          variant="filled"
          size="small"
        />
        <TextField
          label="Model"
          id="filled-hidden-label-small"
          value={model}
          disabled
          onChange={(e) => {
            setModel(e.target.value);
          }}
          variant="filled"
          size="small"
        />
        <TextField
          label="Year"
          id="filled-hidden-label-small"
          value={modelYear}
          onChange={(e) => {
            setModelYear(e.target.value);
          }}
          required
          variant="filled"
          size="small"
        />
        <TextField
          label="Ntes"
          id="filled-hidden-label-small"
          value={notes}
          required
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          variant="filled"
          size="small"
        />
      </div>
      <div className="card__actions">
        <Button
          onClick={() => {
            if (plate == "") {
              setPlateError("Plate cant be empty!\n");
              setShowError(true);
            }
            if (modelYear == "") {
              setYearError("Year cant be empty!\n");
              setShowError(true);
            }
            if (notes == "") {
              setNotesError("Notes cant be empty!\n");
              setShowError(true);
            }

            updateCar({
              id: item.id,
              plate: plate,
              modelId: item.id,
              modelYear: modelYear,
              notes: notes,
            });
          }}
        >
          Update
        </Button>
        <Button
          onClick={() => {
            deleteCar(item.id);
          }}
        >
          Delete
        </Button>
      </div>
    </section>
  );
}

export default CarCard;
