import { useState } from "react";

import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import BG from "./img/Assets/alloverbackground.png";

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
background-image: url(${BG});

`

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [connectImg, setConnectImg] = useState(null);
  const [wallet, setWallet] = useState(false);
  const [count, setCount] = useState(0);
  const [pepe, setPepe] = useState(null);
  const [pepe1, setPepe1] = useState(null);
  const [pepe2, setPepe2] = useState(null);
  const [pepepray, setPepePray] = useState(null);
  const [whitelist, setWhitelist] = useState(null);

  return (
    <Container>
      <GlobalStyle />
      <Navbar
        walletAddress={walletAddress}
        wallet={wallet}
      />
      <Body
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
        connectImg={connectImg}
        setConnectImg={setConnectImg}
        setWallet={setWallet}
        count={count}
        setCount={setCount}
        pepe={pepe}
        setPepe={setPepe}
        pepe1={pepe1}
        setPepe1={setPepe1}
        pepe2={pepe2}
        setPepe2={setPepe2}
        pepepray={pepepray}
        setPepePray={setPepePray}
        whitelist={whitelist}
        setWhitelist={setWhitelist}
      />
    </Container>
  );
}

export default App;
