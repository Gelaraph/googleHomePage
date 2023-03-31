import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ text, onClick, disabled }) => {
  return (
    <ButtonSection>
      <button onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </ButtonSection>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
const ButtonSection = styled.div`
  margin-botom: 1em;
  button {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: Roboto, arial, sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    :hover {
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
  }
`;

export default Button;
