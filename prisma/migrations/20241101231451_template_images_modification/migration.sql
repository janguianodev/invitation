/*
  Warnings:

  - You are about to alter the column `imageUrl` on the `Images` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `sectionName` on the `Images` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - Made the column `imageUrl` on table `Images` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sectionName` on table `Images` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Images` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_invitationId_fkey";

-- AlterTable
ALTER TABLE "Images" ADD COLUMN     "templateId" INTEGER,
ALTER COLUMN "imageUrl" SET NOT NULL,
ALTER COLUMN "imageUrl" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "invitationId" DROP NOT NULL,
ALTER COLUMN "sectionName" SET NOT NULL,
ALTER COLUMN "sectionName" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "updatedAt" SET NOT NULL;

-- CreateIndex
CREATE INDEX "Images_templateId_idx" ON "Images"("templateId");

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Templates"("id") ON DELETE SET NULL ON UPDATE CASCADE;
