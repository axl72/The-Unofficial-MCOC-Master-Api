/*
  Warnings:

  - You are about to drop the column `release_date` on the `Champion` table. All the data in the column will be lost.
  - You are about to drop the `_ChampionToSynergy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Synergy` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `releaseDate` to the `Champion` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[_ChampionToSynergy] DROP CONSTRAINT [_ChampionToSynergy_A_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[_ChampionToSynergy] DROP CONSTRAINT [_ChampionToSynergy_B_fkey];

-- AlterTable
ALTER TABLE [dbo].[Champion] DROP COLUMN [release_date];
ALTER TABLE [dbo].[Champion] ADD [releaseDate] DATETIME2 NOT NULL;

-- DropTable
DROP TABLE [dbo].[_ChampionToSynergy];

-- DropTable
DROP TABLE [dbo].[Synergy];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
