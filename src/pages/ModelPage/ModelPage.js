import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import { any } from "prop-types";
import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ModelCard from "../../features/models/modelCard/ModelCard";
import {
  useGetModelsQuery,
  useGetModelsWBrandQuery,
} from "../../store/api/apiSlice";
import "./ModelPage.scss";

function ModelPage() {
  var searchData = [];

  var [queryState, setQueryState] = useState([]);
  const [textValue, setTextValue] = useState("");

  const { data = [], isLoading, isFetching, isError } = useGetModelsQuery();
  const {
    data: dataOfQuery,
    isLoading: isLoadingOfQuery,
    isFetching: isFetchingOfQuery,
    isError: isErrorOfQuery
    
  } = useGetModelsWBrandQuery(textValue);




  const onTextChange = (e) => setTextValue(e.target.value);

  const [initial, setInitial] = useState(true);

  return (
    <main>
      <div className="models__search">
        <h4>Models</h4>

        <TextField
          value={textValue}
          onChange={(e) => {
            onTextChange(e);
            setInitial(false);
          }}
          id="outlined-basic"
          label="Search Brand.."
        />
      </div>
      <div className="models__container">
        {!isLoading &&
          textValue == "" &&
          data.map((item) => <ModelCard item={item} key={item.id} />)}

        {!isLoadingOfQuery &&
          textValue != "" &&
          dataOfQuery.map((item) => <ModelCard item={item} key={item.id} />)}
      </div>
    </main>
  );
}

export default ModelPage;
