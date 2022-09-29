import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useAddCarMutation } from "../../store/api/apiSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ text, title, setShowing, isShowing }) {

  //TODO: DELETE CAR
  const [plate, setPlate] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [notes, setNotes] = useState("");

  const [plateError, setPlateError] = useState("");
  const [yearError, setYearError] = useState("");
  const [notesError, setNotesError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleClose = () => {
    setShowing(false);
  };

  const [
    addCar,
    { data: AddData, isError: isAddError, error: addError },
  ] = useAddCarMutation();

  return (
    <div>
      <Dialog
        open={isShowing}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
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

                addCar({
                  plate: plate,
                  modelId: 30,
                  modelYear: modelYear,
                  notes: notes,
                });
              }}
            >
              Add Vehicle
            </Button>
          </div>
        </section>
        <DialogActions>
          <Button
            onClick={() => {
              setShowing(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
