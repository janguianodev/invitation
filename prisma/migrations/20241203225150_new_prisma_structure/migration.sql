/*
  Warnings:

  - You are about to drop the column `email` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `templateId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `templateId` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SectionType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Template` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TemplateSection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_templateId_fkey";

-- DropForeignKey
ALTER TABLE "Invitation" DROP CONSTRAINT "Invitation_templateId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_invitationId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_createdByUserId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateSection" DROP CONSTRAINT "TemplateSection_sectionTypeId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateSection" DROP CONSTRAINT "TemplateSection_templateId_fkey";

-- DropIndex
DROP INDEX "Image_templateId_idx";

-- DropIndex
DROP INDEX "Invitation_coupleId_templateId_createdByUserId_idx";

-- AlterTable
ALTER TABLE "Guest" DROP COLUMN "email",
ADD COLUMN     "isGroup" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "parentGroupId" TEXT;

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "templateId";

-- AlterTable
ALTER TABLE "Invitation" DROP COLUMN "templateId";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "SectionType";

-- DropTable
DROP TABLE "Template";

-- DropTable
DROP TABLE "TemplateSection";

-- CreateIndex
CREATE INDEX "Invitation_coupleId_createdByUserId_idx" ON "Invitation"("coupleId", "createdByUserId");

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_parentGroupId_fkey" FOREIGN KEY ("parentGroupId") REFERENCES "Guest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
