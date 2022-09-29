import React, { useEffect } from 'react'
import CarLocationCard from '../../features/authentication/components/CarLocationCard/CarLocationCard';
import { useGetLocationsQuery } from '../../store/api/apiSlice';
import "./LocationPage.scss"
function LocationPage() {

    const {
      data = [],
      isLoading,
      isFetching,
      isError,
      refetch
    } = useGetLocationsQuery();

     useEffect(() => {

       const intervalId = setInterval(() => {
         refetch();
       }, 1000 * 5); // in milliseconds
       return () => clearInterval(intervalId);
     }, []);

  return <div className='container'>{!isLoading && data.map((e) => <CarLocationCard item={e}/>)}</div>;
}

export default LocationPage