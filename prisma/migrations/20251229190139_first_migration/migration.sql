/*
  Warnings:

  - The primary key for the `Wallpaper` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Wallpaper` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Wallpaper" DROP CONSTRAINT "Wallpaper_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Wallpaper_pkey" PRIMARY KEY ("id");
