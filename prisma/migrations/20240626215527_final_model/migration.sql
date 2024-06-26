/*
  Warnings:

  - You are about to drop the `Bonus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Bonus] DROP CONSTRAINT [Bonus_synergyId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Skill] DROP CONSTRAINT [Skill_championId_fkey];

-- DropTable
DROP TABLE [dbo].[Bonus];

-- DropTable
DROP TABLE [dbo].[Skill];

-- CreateTable
CREATE TABLE [dbo].[SynergyBonus] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [synergyId] INT NOT NULL,
    CONSTRAINT [SynergyBonus_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ChampionSynergyBonus] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [championSynergyId] INT NOT NULL,
    CONSTRAINT [ChampionSynergyBonus_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Abilitie] (
    [id] INT NOT NULL IDENTITY(1,1),
    [title] NVARCHAR(1000) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [Abilitie_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Characteristic] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [abilitieId] INT NOT NULL,
    CONSTRAINT [Characteristic_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[SynergyBonus] ADD CONSTRAINT [SynergyBonus_synergyId_fkey] FOREIGN KEY ([synergyId]) REFERENCES [dbo].[Synergy]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ChampionSynergyBonus] ADD CONSTRAINT [ChampionSynergyBonus_championSynergyId_fkey] FOREIGN KEY ([championSynergyId]) REFERENCES [dbo].[ChampionSynergy]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Abilitie] ADD CONSTRAINT [Abilitie_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Characteristic] ADD CONSTRAINT [Characteristic_abilitieId_fkey] FOREIGN KEY ([abilitieId]) REFERENCES [dbo].[Abilitie]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
