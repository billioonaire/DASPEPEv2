import {
    LinkContainer,
    NavbarContainer,
    NavbarLogo,
    LinkImg,
    Link,
    Redirect,
    Wallet,
    ConnectedWallet
  } from "./NavbarElements";

  import Logo from "../../img/Assets/DasPepeTitle.png";
  import Discord from "../../img/Icons/DISCORDICON.png";
  import Twitter from "../../img/Icons/TWITTERICON.png";
  import OpenSea from "../../img/Icons/OSICON.png";
  import DiscordHover from "../../img/Icons/DISCORDICONHOVER.png";
  import TwitterHover from "../../img/Icons/TWITTERICONHOVER.png";
  import OpenSeaHover from "../../img/Icons/OSICONHOVER.png";

  const Navbar = ({ walletAddress, wallet }) => {

    return (
      <NavbarContainer>
        <NavbarLogo src={Logo} />
        <LinkContainer>
          <Wallet className={wallet ? "active" : ""}><ConnectedWallet>Connected Wallet:</ConnectedWallet> {walletAddress}</Wallet>
          <Link>
            <Redirect href="https://discord.gg/IAMAPLACEHOLDER" target="_blank">
              <LinkImg
                src={Discord}
                onMouseEnter={(x) => (x.currentTarget.src = DiscordHover)}
                onMouseLeave={(x) => (x.currentTarget.src = Discord)}
              />
            </Redirect>
          </Link>
          <Link>
            <Redirect href="https://twitter.com/stfupals" target="_blank">
              <LinkImg
                  src={Twitter}
                  onMouseEnter={(x) => (x.currentTarget.src = TwitterHover)}
                  onMouseLeave={(x) => (x.currentTarget.src = Twitter)}
                />
            </Redirect>
          </Link>
          <Link>
            <Redirect href="https://opensea.io/collection/stfupals" target="_blank">
              <LinkImg
                src={OpenSea}
                onMouseEnter={(x) => (x.currentTarget.src = OpenSeaHover)}
                onMouseLeave={(x) => (x.currentTarget.src = OpenSea)}
              />
            </Redirect>
          </Link>
        </LinkContainer>
      </NavbarContainer>
    );
  };

  export default Navbar;
