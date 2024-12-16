/*
  Warnings:

  - You are about to drop the column `firstName` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Guest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Guest" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "name" TEXT;
