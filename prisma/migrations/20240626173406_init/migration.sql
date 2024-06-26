/*
  Warnings:

  - You are about to drop the column `description` on the `Resistence` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `SignatureAbility` table. All the data in the column will be lost.
  - Added the required column `ratio` to the `Resistence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `SignatureAbility` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Resistence] DROP COLUMN [description];
ALTER TABLE [dbo].[Resistence] ADD [ratio] FLOAT(53) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[SignatureAbility] DROP COLUMN [description];
ALTER TABLE [dbo].[SignatureAbility] ADD [type] NVARCHAR(1000) NOT NULL;

-- CreateTable
CREATE TABLE [dbo].[SpecialAttackBonus] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [specialAttackId] INT NOT NULL,
    CONSTRAINT [SpecialAttackBonus_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SignatureBonus] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [signatureAbilityId] INT NOT NULL,
    CONSTRAINT [SignatureBonus_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[SpecialAttackBonus] ADD CONSTRAINT [SpecialAttackBonus_specialAttackId_fkey] FOREIGN KEY ([specialAttackId]) REFERENCES [dbo].[SpecialAttack]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SignatureBonus] ADD CONSTRAINT [SignatureBonus_signatureAbilityId_fkey] FOREIGN KEY ([signatureAbilityId]) REFERENCES [dbo].[SignatureAbility]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
