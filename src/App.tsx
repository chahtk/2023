import React from 'react';
import styled from 'styled-components';

interface Text {
  text: string;
}

const Box = styled.div<Text>`
  width: 200px;
  height 200px;
  border: 1px solid red;
  ${({ theme }) => theme.media.desktop`        
      border: 2px solid blue;
      ${(props: Text) => `&::before{
          content:"데스크톱 ${props.text}"
      }`};
  `}
  ${({ theme }) => theme.media.tablet`
      border: 2px solid yellow;
      ${(props: Text) => `&::before{
          content:"태블릿 ${props.text}"
      }`}
  `}
  ${({ theme }) => theme.media.mobile`
      border: 2px solid purple;
      ${(props: Text) => `&::before{
          content:"모바일 ${props.text}"
      }`}
  `}
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Box text="사이즈입니다" />
    </div>
  );
};

export default App;
