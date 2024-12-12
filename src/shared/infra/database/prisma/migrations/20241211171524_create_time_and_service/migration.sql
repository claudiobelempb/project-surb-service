/*
  Warnings:

  - You are about to drop the `question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_user_id_fkey";

-- DropTable
DROP TABLE "question";

-- CreateTable
CREATE TABLE "time" (
    "id" UUID NOT NULL,
    "anme" VARCHAR NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,
    "user_id" UUID NOT NULL,

    CONSTRAINT "time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,
    "user_id" UUID NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "time" ADD CONSTRAINT "time_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
