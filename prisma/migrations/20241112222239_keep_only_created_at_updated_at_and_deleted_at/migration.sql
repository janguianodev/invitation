/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Couple` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `Couple` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `Couple` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `Invitation` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `SectionType` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `SectionType` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `SectionType` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `TemplateSection` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `TemplateSection` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `TemplateSection` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `deletedBy` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Couple" DROP COLUMN "createdBy",
DROP COLUMN "deletedBy",
DROP COLUMN "updatedBy";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "createdBy",
DROP COLUMN "deletedBy",
DROP COLUMN "updatedBy";

-- AlterTable
ALTER TABLE "Guest" DROP COLUMN "createdBy",
DROP COLUMN "deletedBy",
DROP COLUMN "updatedBy";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "createdBy",
DROP COLUMN "deletedBy",
DROP COLUMN "updatedBy";

-- AlterTable
ALTER TABLE "Invitation" DROP COLUMN "createdBy",
DROP COLUMN "deletedBy",
DROP COLUMN "updatedBy";

-- AlterTable
ALTER TABLE "SectionType" DROP COLUMN "createdBy",
DROP COLUMN "deletedBy",
DROP COLUMN "updatedBy";

-- AlterTable
ALTER TABLE "Template" DROP COLUMN "createdBy",
DROP COLUMN "deletedBy",
DROP COLUMN "updatedBy";

-- AlterTable
ALTER TABLE "TemplateSection" DROP COLUMN "createdBy",
DROP COLUMN "deletedBy",
DROP COLUMN "updatedBy";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdBy",
DROP COLUMN "deletedBy",
DROP COLUMN "updatedBy";
