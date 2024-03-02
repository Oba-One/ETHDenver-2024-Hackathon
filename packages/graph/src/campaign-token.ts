import { json, JSONValueKind } from "@graphprotocol/graph-ts";

import { Campaign } from "../generated/schema";
import { CampaignCreated as CampaignCreatedEvent } from "../generated/CampaignToken/CampaignToken";

export function handleCampaignCreated(event: CampaignCreatedEvent): void {
  let entity = new Campaign(event.params.tba);

  let value = json.fromString(event.params.metadata);

  if (value.kind == JSONValueKind.BOOL) {
  }

  entity.creator = event.params.owner;
  entity.metadata = event.params.metadata;
  entity.capitals = event.params.capitals;

  // entity.organizer = event.params.organizer;
  // entity.name = event.params.name;
  // entity.metadata = event.params.metadata;
  // entity.artWhitelist = [];
  // entity.nftWhitelist = [];

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
