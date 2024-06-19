BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Synergy] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Synergy_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Synergy_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[SpecialAttack] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [SpecialAttack_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [SpecialAttack_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[SignatureAbility] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [SignatureAbility_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [SignatureAbility_championId_key] UNIQUE NONCLUSTERED ([championId])
);

-- CreateTable
CREATE TABLE [dbo].[Tag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [Tag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Resistence] (
    [id] INT NOT NULL IDENTITY(1,1),
    [inmunity_asociated] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [Resistence_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Inmunity] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [Inmunity_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Skill] (
    [id] INT NOT NULL IDENTITY(1,1),
    [title] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [Skill_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[DetailsAttribute] (
    [id] INT NOT NULL IDENTITY(1,1),
    [hp] NVARCHAR(1000) NOT NULL,
    [potency] INT NOT NULL,
    [force] INT NOT NULL,
    [adrenaline] FLOAT(53) NOT NULL,
    [attributeId] INT NOT NULL,
    CONSTRAINT [DetailsAttribute_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [DetailsAttribute_attributeId_key] UNIQUE NONCLUSTERED ([attributeId])
);

-- CreateTable
CREATE TABLE [dbo].[Attribute] (
    [id] INT NOT NULL IDENTITY(1,1),
    [critical_raiting] FLOAT(53) NOT NULL,
    [critical_damage_raiting] FLOAT(53) NOT NULL,
    [armor_penetration] FLOAT(53) NOT NULL,
    [block_penetration] FLOAT(53) NOT NULL,
    [critical_resistence] FLOAT(53) NOT NULL,
    [armor_raiting] FLOAT(53) NOT NULL,
    [block_proficiency] FLOAT(53) NOT NULL,
    [energy_resistence] FLOAT(53) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [Attribute_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Attribute_championId_key] UNIQUE NONCLUSTERED ([championId])
);

-- CreateTable
CREATE TABLE [dbo].[_ChampionToSynergy] (
    [A] INT NOT NULL,
    [B] INT NOT NULL,
    CONSTRAINT [_ChampionToSynergy_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_ChampionToSynergy_B_index] ON [dbo].[_ChampionToSynergy]([B]);

-- AddForeignKey
ALTER TABLE [dbo].[SpecialAttack] ADD CONSTRAINT [SpecialAttack_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SignatureAbility] ADD CONSTRAINT [SignatureAbility_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Tag] ADD CONSTRAINT [Tag_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Resistence] ADD CONSTRAINT [Resistence_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Inmunity] ADD CONSTRAINT [Inmunity_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Skill] ADD CONSTRAINT [Skill_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[DetailsAttribute] ADD CONSTRAINT [DetailsAttribute_attributeId_fkey] FOREIGN KEY ([attributeId]) REFERENCES [dbo].[Attribute]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Attribute] ADD CONSTRAINT [Attribute_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_ChampionToSynergy] ADD CONSTRAINT [_ChampionToSynergy_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_ChampionToSynergy] ADD CONSTRAINT [_ChampionToSynergy_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[Synergy]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
