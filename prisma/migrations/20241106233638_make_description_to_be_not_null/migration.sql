/*
  Warnings:

  - Made the column `description` on table `Template` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Template" ALTER COLUMN "description" SET NOT NULL;
