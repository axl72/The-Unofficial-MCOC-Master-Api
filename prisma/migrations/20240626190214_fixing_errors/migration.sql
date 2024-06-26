/*
  Warnings:

  - Added the required column `description` to the `AllianceQuestTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `AllianceWarsTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `AttributeTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `CarinasChallengesTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `CombatStyleTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `OrganizationTag` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[AllianceQuestTag] ADD [description] NVARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[AllianceWarsTag] ADD [description] NVARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[AttributeTag] ADD [description] NVARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[CarinasChallengesTag] ADD [description] NVARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[CombatStyleTag] ADD [description] NVARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[OrganizationTag] ADD [description] NVARCHAR(1000) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
