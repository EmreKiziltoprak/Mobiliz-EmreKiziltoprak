import React, { Fragment } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from '../../layouts/Header/Header'
import Layout from '../../layouts/Layout/Layout';
import LocationPage from '../LocationPage/LocationPage';
import ModelPage from '../ModelPage/ModelPage';
import VehiclePage from '../VehiclePage/VehiclePage';

function HomePage(props) {
  return (
    <div>
      <VehiclePage />
      <Routes>
        <Route exact path="/vehicles" element={<VehiclePage />} />

        <Route path="/models" element={<ModelPage />} />

        <Route path="/locations" element={<LocationPage />} />
      </Routes>
    </div>
  );
}


export default HomePage