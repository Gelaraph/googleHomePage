import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";

const GoogleHomePage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleKeyEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearchKeyword(event.currentTarget.value);
    }
  };

  const handleChange = (event) => {
    setSearchKeyword(event.currentTarget.value);
  };
  return (
    <Container>
      <LogoSection>
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google-logo"
        />
      </LogoSection>
      <SearchSection>
        <Form action="/" method="GET" role="search">
          <Input
            placeholder="Search"
            value={searchKeyword}
            onChange={handleChange}
            onKeyPress={handleKeyEnter}
          />
        </Form>
        <div className="searchWord-display">
          {searchKeyword && <p>Search keyword: {searchKeyword}</p>}
        </div>
        <ButtonSection>
          <Button text="Google Search" />
          <Button text="I'm Feeling Lucky" />
        </ButtonSection>
      </SearchSection>
      <div className="languages">
        <p>
          Google offered in:
          <span>
            <span> Hausa </span>
            <span>Igbo</span>
            <span>Èdè </span>
            <span>Yorùbá </span>
            <span>Nigerian Pidgin</span>
          </span>
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 58vh;
  p {
    color: grey;
    font-size: 14px;
  }
  .searchWord-display {
    margin-top: 2em;
    display: flex;
    justify-content: center;
  }
  .languages {
    display: flex;
    justify-content: center;
    span {
      color: rgb(26, 13, 190);
      font-size: 16px;
      span:hover {
        text-decoration: underline;
      }
      span {
        margin-right: 5px;
      }
    }
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  height: calc(100% - 560px);

  img {
    width: 272px;
    height: 92px;
    margin-top: auto;
  }
`;

const SearchSection = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  padding-top: 18px;
  top: 53px;
  z-index: 0;
`;

const Form = styled.form``;

export default GoogleHomePage;
