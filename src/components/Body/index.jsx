import {
  Container,
  ConnectContainer,
  Connect,
  NextButtonContainer,
  NextButton,
  Pepe1Img,
  Pepe2Img,
  PepePrayImg,
  MintContainer,
  Mintx1,
  MintButtonContainer,
  Mintx2,
  AscentButtonImg,
  MintLeftImg,
  MintRightImg,
  NOWLImg,
} from "./BodyElements";

import { ethers } from "ethers";
import ABI from "../../abi.json";
import { Buffer } from "buffer";
import ConnectHover from "../../img/Buttons/connecthover.png";
import ConnectImg from "../../img/Buttons/connect.png";
import PepeButton from "../../img/Assets/PepeButton.png";
import Pepe1 from "../../img/Assets/pepe1.png";
import Pepe2 from "../../img/Assets/pepe2.png";
import PepePray from "../../img/Assets/PRAYPEPE.png";
import Mint1 from "../../img/Buttons/mint1.png";
import Mint2 from "../../img/Buttons/mint2.png";
import AscendButton from "../../img/Buttons/ascend.png";
import MintLeft from "../../img/Assets/MintLeft.png";
import MintRight from "../../img/Assets/MintRight.png";
import NOWL from "../../img/Assets/NOWL.png";

import data from "../../data.json";

const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const CONTRACT_ADDRESS = "0x5a667b95BfC6bae2964A8CF612e1dcb060E79cAb";

let provider;
let signer;
let contract;

Buffer.from("anything", "base64");

const Main = ({
  walletAddress,
  setWalletAddress,
  connectImg,
  setConnectImg,
  setWallet,
  count,
  setCount,
  pepe,
  setPepe,
  pepe1,
  setPepe1,
  pepe2,
  setPepe2,
  pepepray,
  setPepePray,
  whitelist,
  setWhitelist,
}) => {
  const onClickConnectWallet = async () => {
    if (window.ethereum) {
      // res[0] for fetching a first wallet

      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        accountChangeHandler(res[0]);
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

        setConnectImg(true);
        setPepe(true);
      });
    } else {
      alert("install metamask extension!!");
    }
  };

  function isWhitelisted(type, address) {
    try {
      let whitelistAddresses = data[type].whitelist;
      let spot = whitelistAddresses.findIndex(
        (addr) => addr.toLowerCase() === address
      );
      console.log(spot);

      if (spot !== -1) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  function getProof(type, address) {
    //   try {
    //console.log(address);

    let whitelistAddresses = data[type].whitelist;

    console.log(whitelistAddresses);

    console.log("ADDRESS " + address);
    console.log("TYPE " + type);
    const spot = whitelistAddresses.findIndex(
      (addr) => addr.toLowerCase() === address
    );

    console.log(spot);
    //console.log(whitelistAddresses[spot])
    //console.log(keccak256(whitelistAddresses[spot]))
    console.log("I RAN");
    let leafNodes = whitelistAddresses.map((addr) => keccak256(addr));

    console.log("LEAF NODES\n\n\n" + leafNodes);

    const merkleTree = new MerkleTree(leafNodes, keccak256, {
      sortPairs: true,
    });

    const rootHash = merkleTree.getRoot();
    console.log("rootHash: " + rootHash);
    console.log("Whitelist Merkle Tree\n" + merkleTree.toString());

    const claimingAddress = leafNodes[spot];

    const hexProof = merkleTree.getHexProof(claimingAddress);

    console.log("WWWWWWW" + hexProof);
    //console.log(merkleTree.verify(hexProof,claimingAddress,rootHash));

    return hexProof;
    //  } catch (e) {
    //return false;
    // }
  }

  const mint = async (type, proof, quantity) => {
    let result;
    switch (type) {
      case "holder":
        console.log("DUB");
        console.log(proof);
        result = await contract.holdersMint(quantity, proof, {
          value: ethers.utils.parseEther(String(data[type].cost * quantity)),
        });
        console.log(result);
        break;
      case "whitelist":
        result = await contract.whitelistMint(proof, {
          value: ethers.utils.parseEther(data[type].cost),
        });
        console.log(result);
        break;
      case "public":
        result = await contract.mint({
          value: ethers.utils.parseEther(data[type].cost),
        });
        console.log(result);
        break;
      default:
        break;
    }
  };

  const accountChangeHandler = (account) => {
    // Setting an address data
    setConnectImg(true);
    setWallet(true);
    setWalletAddress(account);
  };

  const pepeClick = () => {
    setCount((count += 1));
    switch (count) {
      case 1:
        setPepe1(true);
        break;
      case 2:
        setPepe1(false);
        setPepe2(true);
        break;
      case 3:
        setPepePray(true);
        setPepe1(false);
        setPepe2(false);
        setPepe(false);

        if (isWhitelisted("holder", walletAddress)) {
          setWhitelist(true);
        }

        break;
      default:
        setPepePray(false);
        setPepe1(false);
        setPepe2(false);
        setPepe(false);
        break;
    }
  };

  return (
    <Container>
      <ConnectContainer className={connectImg ? "active" : ""}>
        <Connect
          src={ConnectImg}
          onClick={onClickConnectWallet}
          onMouseEnter={(x) => (x.currentTarget.src = ConnectHover)}
          onMouseLeave={(x) => (x.currentTarget.src = ConnectImg)}
        />
      </ConnectContainer>
      <NextButtonContainer className={pepe ? "active" : ""} onClick={pepeClick}>
        <NextButton src={PepeButton} />
      </NextButtonContainer>
      <Pepe1Img src={Pepe1} className={pepe1 ? "active" : ""} />
      <Pepe2Img src={Pepe2} className={pepe2 ? "active" : ""} />

      <MintContainer className={pepepray ? "active" : ""}>
        <AscentButtonImg src={AscendButton} />
        <PepePrayImg src={PepePray} />
        <MintLeftImg src={MintLeft} />
        <MintRightImg src={MintRight} />
        <MintButtonContainer className={whitelist ? "active" : ""}>
          <Mintx1
            src={Mint1}
            onClick={async () => {
              if (!walletAddress) {
                alert("Connect a wallet first!");
              } else {
                const proof = getProof("holder", walletAddress);
                console.log(proof);
                if (proof) await mint("holder", proof, 1);
                else alert("You are not whitelisted!");
              }
            }}
          />
          <Mintx2
            src={Mint2}
            onClick={async () => {
              if (!walletAddress) {
                alert("Connect a wallet first!");
              } else {
                const proof = getProof("holder", walletAddress);
                console.log(proof);
                if (proof) await mint("holder", proof, 2);
                else alert("You are not whitelisted!");
              }
            }}
          />
        </MintButtonContainer>
        <NOWLImg src={NOWL} className={whitelist ? "active" : ""} />
      </MintContainer>
    </Container>
  );
};

export default Main;
