"use server";

import { InvitationSetupFormI } from "@/interfaces";

export const saveInvitationData = async (data: InvitationSetupFormI) => {
  // TODO: Save data to the database
  console.log("Invitation data saved", data);
};
