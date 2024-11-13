/*
  Warnings:

  - You are about to drop the column `couple_slug` on the `Couple` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Couple` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `Couple` table. All the data in the column will be lost.
  - You are about to drop the column `partner1_name` on the `Couple` table. All the data in the column will be lost.
  - You are about to drop the column `partner2_name` on the `Couple` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Couple` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Couple` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `event_location` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `event_time` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `event_type` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `invitation_id` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `confirmed_people` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `guest_slug` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `invitation_id` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `invited_people` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `invitation_id` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `section_name` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `bible_reference` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `bible_verse` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `bride_parents` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `couple_id` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `created_by_user_id` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `dress_code` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `event_date` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `gift_registry_link` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `gift_registry_name` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `groom_parents` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `guest_message` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `primary_color` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `secondary_color` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `special_request` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `template_id` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `welcome_message` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `invitation_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_date` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_method` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_status` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `transaction_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Templates` table. All the data in the column will be lost.
  - You are about to drop the column `created_by_user_id` on the `Templates` table. All the data in the column will be lost.
  - You are about to drop the column `preview_image_url` on the `Templates` table. All the data in the column will be lost.
  - You are about to drop the column `template_name` on the `Templates` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Templates` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role_type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Template_sections` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[coupleSlug]` on the table `Couple` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Couple` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[guestSlug]` on the table `Guest` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `coupleSlug` to the `Couple` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partner1Name` to the `Couple` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partner2Name` to the `Couple` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Couple` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invitationId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guestSlug` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invitationId` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invitationId` to the `Images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coupleId` to the `Invitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdByUserId` to the `Invitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `templateId` to the `Invitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invitationId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdByUserId` to the `Templates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleType` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "roleTypes" AS ENUM ('super_admin', 'user');

-- DropForeignKey
ALTER TABLE "Couple" DROP CONSTRAINT "Couple_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_invitation_id_fkey";

-- DropForeignKey
ALTER TABLE "Guest" DROP CONSTRAINT "Guest_invitation_id_fkey";

-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_invitation_id_fkey";

-- DropForeignKey
ALTER TABLE "Invitation" DROP CONSTRAINT "Invitation_couple_id_fkey";

-- DropForeignKey
ALTER TABLE "Invitation" DROP CONSTRAINT "Invitation_created_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Invitation" DROP CONSTRAINT "Invitation_template_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_invitation_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Template_sections" DROP CONSTRAINT "Template_sections_template_id_fkey";

-- DropForeignKey
ALTER TABLE "Templates" DROP CONSTRAINT "Templates_created_by_user_id_fkey";

-- DropIndex
DROP INDEX "Couple_couple_slug_key";

-- DropIndex
DROP INDEX "Couple_user_id_idx";

-- DropIndex
DROP INDEX "Couple_user_id_key";

-- DropIndex
DROP INDEX "Event_invitation_id_idx";

-- DropIndex
DROP INDEX "Guest_guest_slug_key";

-- DropIndex
DROP INDEX "Guest_invitation_id_idx";

-- DropIndex
DROP INDEX "Images_invitation_id_idx";

-- DropIndex
DROP INDEX "Invitation_couple_id_template_id_created_by_user_id_idx";

-- DropIndex
DROP INDEX "Payment_invitation_id_user_id_idx";

-- DropIndex
DROP INDEX "Templates_created_by_user_id_idx";

-- AlterTable
ALTER TABLE "Couple" DROP COLUMN "couple_slug",
DROP COLUMN "created_at",
DROP COLUMN "deleted_at",
DROP COLUMN "partner1_name",
DROP COLUMN "partner2_name",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "coupleSlug" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "partner1Name" TEXT NOT NULL,
ADD COLUMN     "partner2Name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "created_at",
DROP COLUMN "event_location",
DROP COLUMN "event_time",
DROP COLUMN "event_type",
DROP COLUMN "invitation_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "eventLocation" TEXT,
ADD COLUMN     "eventTime" TIMESTAMP(3),
ADD COLUMN     "eventType" TEXT,
ADD COLUMN     "invitationId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Guest" DROP COLUMN "confirmed_people",
DROP COLUMN "created_at",
DROP COLUMN "first_name",
DROP COLUMN "guest_slug",
DROP COLUMN "invitation_id",
DROP COLUMN "invited_people",
DROP COLUMN "last_name",
DROP COLUMN "phone_number",
ADD COLUMN     "confirmedPeople" INTEGER,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "guestSlug" TEXT NOT NULL,
ADD COLUMN     "invitationId" INTEGER NOT NULL,
ADD COLUMN     "invitedPeople" INTEGER,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Images" DROP COLUMN "created_at",
DROP COLUMN "image_url",
DROP COLUMN "invitation_id",
DROP COLUMN "section_name",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "invitationId" INTEGER NOT NULL,
ADD COLUMN     "sectionName" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Invitation" DROP COLUMN "bible_reference",
DROP COLUMN "bible_verse",
DROP COLUMN "bride_parents",
DROP COLUMN "couple_id",
DROP COLUMN "created_at",
DROP COLUMN "created_by_user_id",
DROP COLUMN "dress_code",
DROP COLUMN "event_date",
DROP COLUMN "gift_registry_link",
DROP COLUMN "gift_registry_name",
DROP COLUMN "groom_parents",
DROP COLUMN "guest_message",
DROP COLUMN "primary_color",
DROP COLUMN "secondary_color",
DROP COLUMN "special_request",
DROP COLUMN "template_id",
DROP COLUMN "updated_at",
DROP COLUMN "welcome_message",
ADD COLUMN     "bibleReference" TEXT,
ADD COLUMN     "bibleVerse" TEXT,
ADD COLUMN     "brideParents" TEXT,
ADD COLUMN     "coupleId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdByUserId" TEXT NOT NULL,
ADD COLUMN     "dressCode" TEXT,
ADD COLUMN     "eventDate" TIMESTAMP(3),
ADD COLUMN     "giftRegistryLink" TEXT,
ADD COLUMN     "giftRegistryName" TEXT,
ADD COLUMN     "groomParents" TEXT,
ADD COLUMN     "guestMessage" TEXT,
ADD COLUMN     "primaryColor" TEXT,
ADD COLUMN     "secondaryColor" TEXT,
ADD COLUMN     "specialRequest" TEXT,
ADD COLUMN     "templateId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "welcomeMessage" TEXT;

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "created_at",
DROP COLUMN "invitation_id",
DROP COLUMN "payment_date",
DROP COLUMN "payment_method",
DROP COLUMN "payment_status",
DROP COLUMN "transaction_id",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "invitationId" INTEGER NOT NULL,
ADD COLUMN     "paymentDate" TIMESTAMP(3),
ADD COLUMN     "paymentMethod" TEXT,
ADD COLUMN     "paymentStatus" TEXT,
ADD COLUMN     "transactionId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Templates" DROP COLUMN "created_at",
DROP COLUMN "created_by_user_id",
DROP COLUMN "preview_image_url",
DROP COLUMN "template_name",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdByUserId" TEXT NOT NULL,
ADD COLUMN     "previewImageUrl" TEXT,
ADD COLUMN     "templateName" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "created_at",
DROP COLUMN "deleted_at",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
DROP COLUMN "phone_number",
DROP COLUMN "role_type",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "roleType" "roleTypes" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "Template_sections";

-- DropEnum
DROP TYPE "role_types";

-- CreateTable
CREATE TABLE "TemplateSections" (
    "id" SERIAL NOT NULL,
    "sectionName" TEXT,
    "requiresImage" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "templateId" INTEGER NOT NULL,

    CONSTRAINT "TemplateSections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TemplateSections_templateId_idx" ON "TemplateSections"("templateId");

-- CreateIndex
CREATE UNIQUE INDEX "Couple_coupleSlug_key" ON "Couple"("coupleSlug");

-- CreateIndex
CREATE UNIQUE INDEX "Couple_userId_key" ON "Couple"("userId");

-- CreateIndex
CREATE INDEX "Couple_userId_idx" ON "Couple"("userId");

-- CreateIndex
CREATE INDEX "Event_invitationId_idx" ON "Event"("invitationId");

-- CreateIndex
CREATE UNIQUE INDEX "Guest_guestSlug_key" ON "Guest"("guestSlug");

-- CreateIndex
CREATE INDEX "Guest_invitationId_idx" ON "Guest"("invitationId");

-- CreateIndex
CREATE INDEX "Images_invitationId_idx" ON "Images"("invitationId");

-- CreateIndex
CREATE INDEX "Invitation_coupleId_templateId_createdByUserId_idx" ON "Invitation"("coupleId", "templateId", "createdByUserId");

-- CreateIndex
CREATE INDEX "Payment_invitationId_userId_idx" ON "Payment"("invitationId", "userId");

-- CreateIndex
CREATE INDEX "Templates_createdByUserId_idx" ON "Templates"("createdByUserId");

-- AddForeignKey
ALTER TABLE "Couple" ADD CONSTRAINT "Couple_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_coupleId_fkey" FOREIGN KEY ("coupleId") REFERENCES "Couple"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Templates" ADD CONSTRAINT "Templates_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateSections" ADD CONSTRAINT "TemplateSections_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
