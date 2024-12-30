/*
  Warnings:

  - You are about to drop the column `primaryColor` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `secondaryColor` on the `Invitation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invitation" DROP COLUMN "primaryColor",
DROP COLUMN "secondaryColor";
