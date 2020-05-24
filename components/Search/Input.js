import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TextInput = styled.TextInput`
  background-color: black;
  border: 1px solid palegreen;
  color: palegreen;
  margin: 0px 30px;
  padding: 10px 20px;
  border-radius: 15px;
  margin-bottom: 30px;
  margin-top: 10px;
`;

const Input = ({ value, onChange, onSubmit, placeholder }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    placeholder={placeholder}
    returnKeyType={"search"}
    placeholderTextColor="palegreen" //placeholder text color setting
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
