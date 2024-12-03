"use server";

import { InvitationSetupFormI } from "@/interfaces";

export const saveInvitationData = async (data: InvitationSetupFormI) => {
  // ! TODO: don't forget to get the couple_id in the invitation query, first I need to create the couple
  // !      and then I need to get the couple_id to save the invitation data

  // ! TODO: Upload all the images with its respective section

  console.log("Invitation data saved", data);
};
