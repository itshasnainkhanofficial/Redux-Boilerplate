import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyLaptop, buyMobile } from "./reducer.js";

const SimpleReducerWithPayload = () => {

  const dispatch = useDispatch();
  const LaptopQty = useSelector((state) => state.LaptopValue.laptopQty);
  const MobileQty = useSelector((state) => state.MobileValue.mobileQty);



  const initialValues = {
    laptop: 1,
    mobile: 1,
  };

  const [inputdata, setInputdata] = useState(initialValues);

  const { laptop, mobile } = inputdata;

  const onChange = (e) => {
    //const name = e.target.name 
    //const value = e.target.value 
    const { name, value } = e.target

    setInputdata((prevState) => ({
      ...prevState,
      [name]: value,
    }))

  };


  const buyLaptopNow = () => {
    dispatch(buyLaptop(inputdata.laptop));
  };

  const buyMobileNow = () => {
    dispatch(buyMobile(inputdata.mobile));
  };

 

  return (
    <div>
      <h1>Multiple Reducers</h1>

      <span>{`current Laptop Qty ${LaptopQty}`}</span>

      <input
        type="number"
        min={1}
        name="laptop"
        onChange={onChange}
        value={inputdata.laptop}
      />

      <button
        type="button"
        onClick={buyLaptopNow}
      >{`Buy ${laptop} Laptop Now!`}</button>
      <hr/>

      <span>{`current Mobile Qty ${MobileQty}`}</span>

      <input
        type="number"
        min={1}
        name="mobile"
        onChange={onChange}
        value={inputdata.mobile}
      />

      <button
        type="button"
        onClick={buyMobileNow}
      >{`Buy ${mobile} Mobile Now!`}</button>
    </div>
  );
};

export default SimpleReducerWithPayload;
