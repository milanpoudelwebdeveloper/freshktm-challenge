import React from "react";
import Footer from "../components/Footer";
import "../styles/About.css";
const About = () => {
  return (
    <div class="about">
      <img src="https://images.unsplash.com/photo-1622020457014-aed1cc44f25e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
      <p>
        <b>CyptoStats</b> has been created to provide the statistics of
        cryptocurrencies used in the world. It uses the statistics from the
        CoinMarketCap API. The app provides different prices and statistics of
        the cryptocurrencies and present it in a graphical way.
      </p>
      <p>
        A cryptocurrency is an encrypted data string that denotes a unit of
        currency. It is monitored and organized by a peer-to-peer network called
        a blockchain, which also serves as a secure ledger of transactions,
        e.g., buying, selling, and transferring.Cryptocurrencies are digital
        assets people use as investments and for online purchases. You exchange
        real currency, like dollars, to buy “coins” or “tokens” of a certain
        kind of cryptocurrency. Craft a harder-working money plan with a trusted
        financial pro.
      </p>
      <p>
        The four major types include <b>utility</b>, <b>payment</b>,{" "}
        <b>security</b>, and <b>stablecoins</b>. There also are DeFi tokens,
        NFTs, and asset-backed tokens. Of all cryptocurrencies, the most common
        are utility and payment tokens
      </p>
      <Footer />
    </div>
  );
};

export default About;
