-- AlterTable
ALTER TABLE "Couple" ADD COLUMN     "createdBy" TEXT,
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedBy" TEXT;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "createdBy" TEXT,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedBy" TEXT;

-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "createdBy" TEXT,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedBy" TEXT;

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "createdBy" TEXT,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedBy" TEXT;

-- AlterTable
ALTER TABLE "Invitation" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedBy" TEXT;

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "SectionType" ADD COLUMN     "createdBy" TEXT,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedBy" TEXT;

-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "createdBy" TEXT,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedBy" TEXT;

-- AlterTable
ALTER TABLE "TemplateSection" ADD COLUMN     "createdBy" TEXT,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedBy" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdBy" TEXT,
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedBy" TEXT;
