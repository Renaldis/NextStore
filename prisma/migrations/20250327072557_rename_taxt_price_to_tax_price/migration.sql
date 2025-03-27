/*
  Warnings:

  - You are about to drop the column `taxtPrice` on the `Order` table. All the data in the column will be lost.
  - Added the required column `taxPrice` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "taxtPrice",
ADD COLUMN     "taxPrice" DECIMAL(12,2) NOT NULL;
