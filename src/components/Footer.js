import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="country">
        <p>Nigeria</p>
      </div>

      <div className="main-footer">
        <div className="main-footer-list">
          <ul>
            <li>About </li>
            <li>Advertising</li>
            <li>Business</li>
            <li>How Search works</li>
          </ul>
        </div>

        <div className="main-footer-list-center">
          <img
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUA…SY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"
          />
          <p>Carbon neutral since 2007</p>
        </div>
        <div className="main-footer-list">
          <ul>
            <li>Privacy </li>
            <li>Terms</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: rgb(242, 242, 242);
  font-size: 15px;
  color: #858585;
  margin-top: 4em;
  .country {
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 2em;
  }
  .main-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #c7c7c7;
    padding-top: 0.5em;
    margin-top: 1em;
    padding: 2em;
  }
  .main-footer-list ul,
  .main-footer-list-center {
    display: flex;
    gap: 1em;
  }
  li {
    list-style: none;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
export default Footer;
