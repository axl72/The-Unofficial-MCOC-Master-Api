/*
  Warnings:

  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Tag] DROP CONSTRAINT [Tag_championId_fkey];

-- DropTable
DROP TABLE [dbo].[Tag];

-- CreateTable
CREATE TABLE [dbo].[Tags] (
    [id] INT NOT NULL IDENTITY(1,1),
    [championId] INT NOT NULL,
    [releaseDate] NVARCHAR(1000) NOT NULL,
    [saga] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Tags_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[CombatStyleTag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [tagId] INT NOT NULL,
    CONSTRAINT [CombatStyleTag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AttributeTag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [tagId] INT NOT NULL,
    CONSTRAINT [AttributeTag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[OrganizationTag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [tagId] INT NOT NULL,
    CONSTRAINT [OrganizationTag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AllianceWarsTag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [tagId] INT NOT NULL,
    CONSTRAINT [AllianceWarsTag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[CarinasChallengesTag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [tagId] INT NOT NULL,
    CONSTRAINT [CarinasChallengesTag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AllianceQuestTag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [tagId] INT NOT NULL,
    CONSTRAINT [AllianceQuestTag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Tags] ADD CONSTRAINT [Tags_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CombatStyleTag] ADD CONSTRAINT [CombatStyleTag_tagId_fkey] FOREIGN KEY ([tagId]) REFERENCES [dbo].[Tags]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AttributeTag] ADD CONSTRAINT [AttributeTag_tagId_fkey] FOREIGN KEY ([tagId]) REFERENCES [dbo].[Tags]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[OrganizationTag] ADD CONSTRAINT [OrganizationTag_tagId_fkey] FOREIGN KEY ([tagId]) REFERENCES [dbo].[Tags]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AllianceWarsTag] ADD CONSTRAINT [AllianceWarsTag_tagId_fkey] FOREIGN KEY ([tagId]) REFERENCES [dbo].[Tags]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CarinasChallengesTag] ADD CONSTRAINT [CarinasChallengesTag_tagId_fkey] FOREIGN KEY ([tagId]) REFERENCES [dbo].[Tags]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AllianceQuestTag] ADD CONSTRAINT [AllianceQuestTag_tagId_fkey] FOREIGN KEY ([tagId]) REFERENCES [dbo].[Tags]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
