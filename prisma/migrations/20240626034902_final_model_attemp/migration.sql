BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Synergy] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [Synergy_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Synergy_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[Bonus] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [synergyId] INT NOT NULL,
    CONSTRAINT [Bonus_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ChampionSynergy] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [synergyId] INT NOT NULL,
    CONSTRAINT [ChampionSynergy_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Synergy] ADD CONSTRAINT [Synergy_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Bonus] ADD CONSTRAINT [Bonus_synergyId_fkey] FOREIGN KEY ([synergyId]) REFERENCES [dbo].[Synergy]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ChampionSynergy] ADD CONSTRAINT [ChampionSynergy_synergyId_fkey] FOREIGN KEY ([synergyId]) REFERENCES [dbo].[Synergy]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
