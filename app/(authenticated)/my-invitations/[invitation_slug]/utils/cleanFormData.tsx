import { InvitationSetupFormI } from "@/interfaces";
import { InvitationImages } from "@/interfaces/invitation-setup-form";

export const cleanFormData = (
  cleanedData: InvitationSetupFormI & InvitationImages,
  formData: FormData
) => {
  for (const key in cleanedData) {
    if (Object.prototype.hasOwnProperty.call(cleanedData, key)) {
      const value =
        cleanedData[key as keyof (InvitationSetupFormI & InvitationImages)];

      if (value instanceof FileList && value.length > 0) {
        formData.append(key, value[0]);
      } else if (typeof value === "string") {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else if (typeof value === "object" && value !== null) {
        formData.append(key, "");
      }
    }
  }
  return {
    formValues: formData,
  };
};
