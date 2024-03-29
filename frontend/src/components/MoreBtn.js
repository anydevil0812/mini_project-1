import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/Style";

function MoreBtn({ cats }) {
  const searchURL =
    `https://search.naver.com/search.naver?where=image&sm=tab_jum&query=` +
    cats.species;

  return (
    <div>
      <Button>
        <a href={searchURL} target="_blank">
          Do you want More Pictures ?
        </a>
      </Button>
    </div>
  );
}

export default MoreBtn;
