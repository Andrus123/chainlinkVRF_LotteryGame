const { ethers, BigNumber } = require("hardhat");

const LINK_TOKEN = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";
const VRF_COORDINATOR = "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B";
const KEY_HASH =
  "0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311";
const FEE = ethers.utils.parseEther("0.1");
module.exports = { LINK_TOKEN, VRF_COORDINATOR, KEY_HASH, FEE };