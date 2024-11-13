/*
  Warnings:

  - The primary key for the `Couple` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Invitation" DROP CONSTRAINT "Invitation_coupleId_fkey";

-- AlterTable
ALTER TABLE "Couple" DROP CONSTRAINT "Couple_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Couple_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Couple_id_seq";

-- AlterTable
ALTER TABLE "Invitation" ALTER COLUMN "coupleId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_coupleId_fkey" FOREIGN KEY ("coupleId") REFERENCES "Couple"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
