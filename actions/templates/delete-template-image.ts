"use server";

import prisma from "@/lib/prisma";
import { cloudinary } from "@/utils";
import { revalidatePath } from "next/cache";

export const deleteTemplateImage = async (
  imageId: number,
  imageUrl: string
) => {
  const imageName = imageUrl.split("/").pop()?.split(".")[0] ?? "";

  try {
    await cloudinary.uploader.destroy(imageName);
    const deletedImage = await prisma.image.delete({
      where: {
        id: imageId,
      },
      select: {
        id: true,
        template: {
          select: {
            id: true,
          },
        },
      },
    });

    // revalidate paths
    revalidatePath("/admin/templates");
    revalidatePath(`/admin/templates/${deletedImage.template?.id}`);
  } catch (error) {
    return {
      ok: false,
      message: "Error deleting image",
    };
  }
};
