"use client";
import React from "react";
import { useState } from "react";

const CreateOrder = () => {
  const [submiting, setSubmiting] = useState(false);
  const [carpet, setCarpet] = useState({
    id:'',
    name:'',
    width:'',
    height:'',
    price:'',
    customerId:''

  });

  const createCarpet = async (e) => {

  }


  return (
    <Form
        type = "Create"
        carpet = {carpet}
        setCarpet = {setCarpet}
        submiting = {submiting}
        handleSubmiting = {createCarpet}
    
    />
  );
};

export default CreateOrder;
