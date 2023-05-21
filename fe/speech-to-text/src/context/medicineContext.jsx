import axios from 'axios';
import React, { createContext, useState } from 'react'


export const medicineContext = createContext(null)

const medicineContextProvider = (props) => {
    const [medicineDetail, setMedicineDetail] = useState(null);
    const [showModal, setShowModal] = useState(false);

    async function getMedicineDetail(slug) {
      await axios
        .get(`http://localhost:5000/api/buy-medicine/products/details`, {
          params: {
            query: slug,
          },
        })
        .then((response) => {
          console.log(response.data);
          setMedicineDetail(response.data);
          alert(response.data.description);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    const handleOnClose = () => onClose();

    const contextValue = {
        getMedicineDetail
    }

  return (
    <medicineContext.Provider value={contextValue}>
        {props.children}
    </medicineContext.Provider>
  )
}

export default medicineContextProvider