import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x86B026C3B60d983ee98E0d40Ee41C9BcB635E55C",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Neighborhood Membership",
        description: "This NFT will give you access to NeighborhoodDAO!",
        image: readFileSync("scripts/assets/mbs.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()