import React from "react";
import Alert from "../../components/Alert";
import CoinSectionIllustration from "../../components/CoinSectionIllustration";
import HeroCard from "../../components/herocard";
import HeroSectionIllustration from "../../components/HeroSectionIllustration";
import { RoadmapSectionIllustration } from "../../components/RoadmapSectionIllustration";
import TokenomicsChart from "../../components/TokenomicsChart";
import "./styles.css";
import BroadcastCrypto from "../../statics/broadcastcrypto.png";
import CryptoNFT from "../../statics/cryptonftmedia.png";
import PremuimCrypto from "../../statics/premuimcrypto.png";
import CriptoTotem from "../../statics/crptototem.png";
import CoinShedule from "../../statics/coinschedule.png";
import Crptoradar from "../../statics/crptoradar.png";
import Foundico from "../../statics/foundico.png";
import IcoBench from "../../statics/ico-bench.png";
import IcoHotList from "../../statics/ico-hot-list.png";
import IcoRating from "../../statics/ico-rating.png";
import IcoHolder from "../../statics/icoholder.png";
import IcoLink from "../../statics/icolink.png";
import IcoMarks from "../../statics/icomarks.png";
import TopIcoList from "../../statics/topicolist.png";
import IcoListing from "../../statics/icolisting.png";
import TeamSectionIllustration from "../../components/TeamSectionIllustration";
import VersusIllustration from "../../components/VersusIllustration";
import TelegramIcon from "../../components/TelegramIcon";
import TwitterIcon from "../../components/TwitterIcon";
import SocialIcon from "../../components/SocialIcon";
import Dydx from "../../statics/dydx.png";
import coinSniper from "../../statics/coinsniper.png";
import Coinhunt from "../../statics/coinhunt.png";
import BakeryToken from "../../statics/bakery-token.png";
import apeswap from "../../statics/apeswap.png";
import uniswap from "../../statics/uniswap.png";
import poocoin from "../../statics/poocoin.png";
import pancakeSwap from "../../statics/pancake-swap.png";
import binance from "../../statics/binance.png";
import IllustrationTwo from "../../components/IllustrationTwo";

const Home = () => {
  return (
    <div>
      <section className="hero container">
        <div className="blur left" />
        <div className="blur right" />
        <div>
          <div className="hero-content">
            <h3 className="gradient-title">ENYOVERSE GAMING</h3>
            <h1 className="title">CYBER ENYOVERSE</h1>
            <h2 className="title-bottom">METAVERSE GAMING AT IT'S BEST</h2>
          </div>
          <HeroCard />
          <div className="social-stack">
            <SocialIcon icon={<TwitterIcon />} name="Follow on Twitter" />
            <SocialIcon icon={<TelegramIcon />} name="Telegram Channel" />
            <SocialIcon icon={<TelegramIcon />} name="Telegram Chat" />
          </div>
        </div>

        <div className="hero-section-illustration">
          <HeroSectionIllustration />
        </div>
      </section>

      <section className="coin-section background-section">
        <div className="container">
          <div className="title-container section-title">
            <h2 className="section-headline">GAMEPLAY IN ANCIENT GREECE</h2>
            <h2 className="section-headline">MATED WITH CYBER METAVERSE</h2>
          </div>

          <div className="coin-logos">
            <div className="row">
              <img src={binance} />
              <img src={pancakeSwap} />
              <img src={poocoin} />
              <img src={uniswap} />
              <img src={apeswap} />
            </div>

            <div className="row">
              <img src={BakeryToken} />
              <img src={Coinhunt} />
              <img src={coinSniper} />
              <img src={Dydx} />
            </div>
          </div>
        </div>

        <div className="coin-section-illustration-container">
          <CoinSectionIllustration />
        </div>
      </section>

      <section className="side-section">
        <div className="container">
          <div className="title-container section-title">
            <h2 className="section-headline">ENYO</h2>
            <h2 className="section-headline">THE GREEK GODDESS OF WAR</h2>
          </div>
          <h2 className="section-headline white section-title">
            Choose a side
          </h2>
        </div>

        <div className="team-section-grid">
          <div className="team-section-illustration-container">
            <TeamSectionIllustration />
          </div>

          <div className="teams">
            <h4 className="sotiras">SOTIRAS</h4>
            <div className="vs-container">
              <VersusIllustration />
            </div>
            <h4 className="machitist">MACHITIS</h4>
          </div>
        </div>

        <div className="side-section-footer background-section">
          <div className="container">
            <div className="team-container">
              <h6 className="title">The Enyo SOTIRAS squads</h6>
              <p>
                Join the Sotiras (Greek : saviour) & team up with your friends
                online & stand against the destructive weapons of the attackers.
              </p>
            </div>

            <div className="team-container right">
              <h6 className="title">The Enyo solo MACHITIS</h6>
              <p>
                If solo play is your way, choose Machitis (Greek : fighter). The
                Machitis cannot team up but they are one big army with powerful
                weapons.
              </p>
            </div>
            <div className="illustration-tokenomic">
              <img src="/btc4.svg" alt="..." />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <h6 className="section-headline section-title">TOKENOMICS</h6>

        <div className="tokenomics-container">
          <div className="tokenomics-stats">
            <div className="tokenomics-item">
              <h5 className="tokenomics-subtitle">Total supply 400 million</h5>
              <div>Team 10%</div>
              <div>Advisors / Legal / marketing 10%</div>
              <div>Community 60% (Pre ICO + ICO + Pancakeswap)</div>
              <div>Liquidity 20%</div>
            </div>
            <div className="footer-tokenomics">
              <div className="footer-stats">
                <div className="tokenomics-item">
                  <h5 className="tokenomics-subtitle">SAFT/PRE ICO PRICE</h5>
                  <div>1BNB= 500,000</div>
                </div>

                <div className="tokenomics-item">
                  <h5 className="tokenomics-subtitle">LISTING PRICE</h5>
                  <div>1 BNB = 375,000</div>
                </div>
              </div>
              <Alert>No tax on buy or sell transactions</Alert>
            </div>
          </div>
          <div className="tokenomics-chart">
            <TokenomicsChart />
          </div>
        </div>
      </section>

      <section className="roadmap-section">
        <div className="background-section">
          <div className="container roadmap-grid">
            <div className="roadmap-illustration-container">
              <RoadmapSectionIllustration />
            </div>
            <div className="roadmap-section-description">
              <h3 className="gradient-title">ENYOVERSE GAMING</h3>
              <h2 className="section-headline">ROADMAP</h2>
            </div>
          </div>
        </div>

        <div className="container roadmap-content">
          <div>
            <h3 className="roadmap-title">Q2 2022</h3>
            <ul>
              <li>Project launch</li>
              <li>Smart contract creation</li>
              <li>Website, Graphics </li>
              <li>Initial White paper</li>
              <li>Telegram channel + chat</li>
              <li>Twitter</li>
              <li>Initial Soft launch token sale (SAFT)</li>
              <li>Twitter 2k followers</li>
              <li>Telegram 2k members</li>
              <li>List on ICO partner websites</li>
            </ul>
          </div>

          <div>
            <h3 className="roadmap-title">Q3 2022</h3>
            <ul>
              <li>Redesign & redevelop website (multiple languages)</li>
              <li>
                Detailed, indexed white paper (multiple languages) with complete
                game description
              </li>
              <li>Initial press release on blockchain news websites</li>
              <li>Initiate game design</li>
              <li>Initial Smart contract Audit</li>
              <li>Influencer tie ups & collaboration</li>
              <li>Marketing (Level 2)</li>
              <li>Twitter 5k</li>
              <li>Telegram 5k</li>
              <li>Submission to CMC/CG/similar</li>
            </ul>
          </div>

          <div>
            <h3 className="roadmap-title">Q4 2022</h3>
            <ul>
              <li>Game design tests & revisions</li>
              <li>Initiate game development</li>
              <li>Huge marketing push</li>
              <li>Community rewards programmer</li>
              <li>Influencer tie ups & collaboration</li>
              <li>Twitter 25k</li>
              <li>Telegram 25k</li>
            </ul>
          </div>

          <div>
            <h3 className="roadmap-title">Q2 2023</h3>
            <ul>
              <li>Game design complete</li>
              <li>Game testing & simulation</li>
              <li>Launch beta version</li>
              <li>Social media contests & rewards</li>
              <li>Celebrity tie ups and collaborations</li>
              <li>Twitter 35k</li>
              <li>Telegram 35k</li>
              <li>First exchange listing</li>
            </ul>
          </div>

          <div>
            <h3 className="roadmap-title">Q3 2023</h3>
            <ul>
              <li>In-game Integration of token & nft's</li>
              <li>Initiate Android/iOS versions development</li>
              <li>First major exchange listing</li>
            </ul>
          </div>

          <div>
            <h3 className="roadmap-title">Q4 2023</h3>
            <ul>
              <li>Submissions to multiple major exchanges</li>
              <li>Launch Android & iOS versions on Play Store & app store</li>
              <li>
                Development of an entire ecosystem around $token (may include
                launchpad, exclusive metaverse token exchange & similar)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="partners-section background-section">
        <div className="container">
          <h3 className="section-headline section-title">
            INITIAL PRESS RELEASE
          </h3>

          <div className="press-release-logos">
            <a
              href="https://www.premiumcryptonews.com/enyoverse-gaming-a-unique-take-on-the-metaverse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={PremuimCrypto} />
            </a>
            <a
              href="https://www.cryptonftmedia.com/enyoverse-gaming-a-unique-take-on-the-metaverse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CryptoNFT} />
            </a>

            <a
              href="https://www.broadcastcrypto.net/2022/04/12/enyoverse-gaming-a-unique-take-on-the-metaverse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={BroadcastCrypto} />
            </a>
          </div>

          <h3 className="section-headline section-title">LISTING PARTNERS</h3>

          <div className="listing-partners-logos">
            <div className="row">
              <img src={TopIcoList} />
              <img src={IcoListing} />
              <img src={IcoMarks} />
              <img src={IcoBench} />
            </div>

            <div className="row">
              <img src={Foundico} />
              <img src={CriptoTotem} />
              <img src={CoinShedule} />
              <img src={Crptoradar} />
            </div>
            <div className="row">
              <img src={IcoHotList} />
              <img src={IcoLink} />
              <img src={IcoHolder} />
              <img src={IcoRating} />
            </div>
          </div>

          <div className="disclaimer">
            <h3 className="disclaimer-title">Disclaimer</h3>

            <p>
              All illustrations / designs on our website are a protected
              intellectual property of Enyoverse gaming & cannot be replicated
              in any form for commercial usage without a written prior
              confirmation from the team via email. However, reviews / marketing
              partnerships under legal fair usage terms on social media/ print
              or digital media is allowed without consent. Copying the game
              idea, gameplay mechanics or the respective names would result in
              immediate legal action against the individuals / entity or the
              organisation.
            </p>

            <p>
              Cryptocurrency trading carries a high level of risks & may not be
              suitable for all investors. Before deciding to trade
              cryptocurrencies you should carefully consider your investment
              objective, risk appetite & your level of experience. A possibility
              exists that you may lose some or all of your digital assets
              therefore you should only trade the amount you can afford to lose
              depending on market conditions & geopolitical issues. You should
              be aware of all the risks associated with crypto trading &
              Enyoverse gaming would not be responsible for any (if) short term
              or long term losses or devaluation.
            </p>

            <p>
              The roadmap is only for reference, & as with any software /
              blockchain product the designing / development timelines can be
              shifted for the best possible outcome. However the pre ICO / SAFT
              / launch prices are decided & would be the same as stated.
            </p>

            <p>
              The listing partners & other logos mentioned are the property of
              the respective owners & not Enyoverse gaming's property. If you
              have any concerns about your company logo on the website, please
              send us an email using the contact form so that we can review &
              solve the issues mutually.
            </p>

            <p className="copyright">
              All rights reserved @ Enyoverse gaming 2022
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
