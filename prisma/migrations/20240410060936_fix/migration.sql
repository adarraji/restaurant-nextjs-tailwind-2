/*
  Warnings:

  - You are about to drop the column `Price` on the `Order` table. All the data in the column will be lost.
  - Added the required column `price` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "Price",
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL;
