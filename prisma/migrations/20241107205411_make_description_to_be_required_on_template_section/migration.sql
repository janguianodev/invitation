/*
  Warnings:

  - Made the column `description` on table `SectionType` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "SectionType" ALTER COLUMN "description" SET NOT NULL;
