/*
  Warnings:

  - You are about to drop the column `details` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `giftRegistryName` on the `Invitation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "details",
ADD COLUMN     "eventAddress" TEXT,
ADD COLUMN     "eventAddressLink" TEXT;

-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "confirmationCode" TEXT;

-- AlterTable
ALTER TABLE "Invitation" DROP COLUMN "giftRegistryName",
ADD COLUMN     "giftRegistryMsg" TEXT,
ADD COLUMN     "giftRegistryType" TEXT,
ADD COLUMN     "recomendedLodging" TEXT,
ADD COLUMN     "recomendedLodgingLink" TEXT;
