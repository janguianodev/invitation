import { cloudinary } from "@/utils";

export const uploadImages = async (images: File[], folderPath: string) => {
  try {
    const uploadImages = images.map(async (image) => {
      try {
        const buffer = await image.arrayBuffer();
        const base64 = Buffer.from(buffer).toString("base64");

        return cloudinary.uploader
          .upload(`data:image/png;base64,${base64}`, {
            folder: `invitationsApp/${folderPath}`,
          })
          .then((res) => res.secure_url);
      } catch (error) {
        console.log("error: ", error);
        return null;
      }
    });

    const uploadedImages = await Promise.all(uploadImages);
    return uploadedImages;
  } catch (error) {
    console.log("error uploading images: ", error);
    return null;
  }
};
