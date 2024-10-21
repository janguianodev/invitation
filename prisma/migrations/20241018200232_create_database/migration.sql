-- CreateEnum
CREATE TYPE "role_types" AS ENUM ('super_admin', 'user');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "phone_number" TEXT,
    "role_type" "role_types" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Couple" (
    "id" SERIAL NOT NULL,
    "couple_slug" TEXT NOT NULL,
    "partner1_name" TEXT NOT NULL,
    "partner2_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Couple_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invitation" (
    "id" SERIAL NOT NULL,
    "event_date" TIMESTAMP(3),
    "welcome_message" TEXT,
    "groom_parents" TEXT,
    "bride_parents" TEXT,
    "guest_message" TEXT,
    "special_request" TEXT,
    "dress_code" TEXT,
    "gift_registry_name" TEXT,
    "gift_registry_link" TEXT,
    "bible_verse" TEXT,
    "bible_reference" TEXT,
    "primary_color" TEXT,
    "secondary_color" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "couple_id" INTEGER NOT NULL,
    "template_id" INTEGER NOT NULL,
    "created_by_user_id" TEXT NOT NULL,

    CONSTRAINT "Invitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guest" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "phone_number" TEXT,
    "invited_people" INTEGER,
    "confirmed_people" INTEGER,
    "guest_slug" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "invitation_id" INTEGER NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "event_type" TEXT,
    "event_time" TIMESTAMP(3),
    "event_location" TEXT,
    "details" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "invitation_id" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT,
    "section_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "invitation_id" INTEGER NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION,
    "currency" TEXT,
    "payment_method" TEXT,
    "payment_status" TEXT,
    "transaction_id" TEXT,
    "payment_date" TIMESTAMP(3),
    "note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "invitation_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Templates" (
    "id" SERIAL NOT NULL,
    "template_name" TEXT,
    "description" TEXT,
    "preview_image_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "created_by_user_id" TEXT NOT NULL,

    CONSTRAINT "Templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Template_sections" (
    "id" SERIAL NOT NULL,
    "section_name" TEXT,
    "requires_image" BOOLEAN,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "template_id" INTEGER NOT NULL,

    CONSTRAINT "Template_sections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Couple_couple_slug_key" ON "Couple"("couple_slug");

-- CreateIndex
CREATE UNIQUE INDEX "Couple_user_id_key" ON "Couple"("user_id");

-- CreateIndex
CREATE INDEX "Couple_user_id_idx" ON "Couple"("user_id");

-- CreateIndex
CREATE INDEX "Invitation_couple_id_template_id_created_by_user_id_idx" ON "Invitation"("couple_id", "template_id", "created_by_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Guest_guest_slug_key" ON "Guest"("guest_slug");

-- CreateIndex
CREATE INDEX "Guest_invitation_id_idx" ON "Guest"("invitation_id");

-- CreateIndex
CREATE INDEX "Event_invitation_id_idx" ON "Event"("invitation_id");

-- CreateIndex
CREATE INDEX "Images_invitation_id_idx" ON "Images"("invitation_id");

-- CreateIndex
CREATE INDEX "Payment_invitation_id_user_id_idx" ON "Payment"("invitation_id", "user_id");

-- CreateIndex
CREATE INDEX "Templates_created_by_user_id_idx" ON "Templates"("created_by_user_id");

-- CreateIndex
CREATE INDEX "Template_sections_template_id_idx" ON "Template_sections"("template_id");

-- AddForeignKey
ALTER TABLE "Couple" ADD CONSTRAINT "Couple_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_couple_id_fkey" FOREIGN KEY ("couple_id") REFERENCES "Couple"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "Templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_invitation_id_fkey" FOREIGN KEY ("invitation_id") REFERENCES "Invitation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_invitation_id_fkey" FOREIGN KEY ("invitation_id") REFERENCES "Invitation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_invitation_id_fkey" FOREIGN KEY ("invitation_id") REFERENCES "Invitation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_invitation_id_fkey" FOREIGN KEY ("invitation_id") REFERENCES "Invitation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Templates" ADD CONSTRAINT "Templates_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Template_sections" ADD CONSTRAINT "Template_sections_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "Templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
