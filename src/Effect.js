import React from "react";
import styled, { keyframes } from "styled-components";

function Effect(props) {
  const { name } = props;
  const array = name.split("");
  return (
    <Wrapper>
      {array.map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </Wrapper>
  );
}

export default Effect;

const animate = keyframes`
0% {opacity: 0.2; left : -50px;}

100% {opacity:1 ; left
  
   : -0};
`;
const Wrapper = styled.span`
  span:nth-child(1) {
    position: relative;
    animation: ${animate} 0.5s;
    animation-delay: 1.5s;
    animation-fill-mode: backwards;
  }

  span:nth-child(2) {
    position: relative;
    animation: ${animate} 0.5s;
    animation-delay: 1.6s;
    animation-fill-mode: backwards;
  }
  span:nth-child(3) {
    position: relative;
    animation: ${animate} 0.5s;
    animation-delay: 1.8s;
    animation-fill-mode: backwards;
  }
  span:nth-child(4) {
    position: relative;
    animation: ${animate} 0.5s;
    animation-delay: 1.9s;
    animation-fill-mode: backwards;
  }
  span:nth-child(5) {
    position: relative;
    animation: ${animate} 0.5s;
    animation-delay: 2s;
    animation-fill-mode: backwards;
  }
  span:nth-child(6) {
    position: relative;
    animation: ${animate} 0.5s;
    animation-fill-mode: backwards;
    animation-delay: 2.1s;
  }
  span:nth-child(7) {
    position: relative;
    animation: ${animate} 0.5s;
    animation-fill-mode: backwards;
    animation-delay: 2.2s;
  }
  span:nth-child(8) {
    position: relative;
    animation: ${animate} 0.5s;
    animation-fill-mode: backwards;
    animation-delay: 2.3s;
  }
  span:nth-child(9) {
    position: relative;
    animation: ${animate} 0.5s;
    animation-delay: 2.4s;
    animation-fill-mode: backwards;
  }
  span:nth-child(10) {
    position: relative;
    animation: ${animate} 0.5s;
    animation-delay: 2.5s;
    animation-fill-mode: backwards;
  }
`;
