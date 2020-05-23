import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TextInput = styled.TextInput`
  background-color: black;
  border: 1px solid palegreen;
  color: palegreen;
`;

const Input = ({ value, onChange, onSubmit, placeholder }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    placeholder={placeholder}
    returnKeyType={"search"}
    placeholderTextColor="palegreen"
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
