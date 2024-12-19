/*
  Warnings:

  - You are about to drop the column `anme` on the `time` table. All the data in the column will be lost.
  - Added the required column `name` to the `time` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "time" DROP COLUMN "anme",
ADD COLUMN     "name" VARCHAR NOT NULL;
