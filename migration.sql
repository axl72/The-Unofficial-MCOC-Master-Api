BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Champion] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [biography] NVARCHAR(1000) NOT NULL,
    [releaseDate] DATETIME2 NOT NULL,
    CONSTRAINT [Champion_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Champion_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[Sprite] (
    [id] INT NOT NULL IDENTITY(1,1),
    [source] NVARCHAR(1000) NOT NULL,
    [url] NVARCHAR(1000) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [Sprite_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Synergy] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [Synergy_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Synergy_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[SynergyBonus] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [synergyId] INT NOT NULL,
    CONSTRAINT [SynergyBonus_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ChampionSynergy] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [synergyId] INT NOT NULL,
    CONSTRAINT [ChampionSynergy_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ChampionSynergyBonus] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [championSynergyId] INT NOT NULL,
    CONSTRAINT [ChampionSynergyBonus_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SpecialAttackBonus] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [specialAttackId] INT NOT NULL,
    CONSTRAINT [SpecialAttackBonus_pkey] PRIMARY KEY CLUSTERED ([id])
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
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [validated] BIT NOT NULL CONSTRAINT [User_validated_df] DEFAULT 0,
    [role] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SignatureBonus] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [signatureAbilityId] INT NOT NULL,
    CONSTRAINT [SignatureBonus_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SignatureAbility] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [SignatureAbility_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [SignatureAbility_championId_key] UNIQUE NONCLUSTERED ([championId])
);

-- CreateTable
CREATE TABLE [dbo].[Tags] (
    [id] INT NOT NULL IDENTITY(1,1),
    [championId] INT NOT NULL,
    [releaseDate] NVARCHAR(1000) NOT NULL,
    [saga] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Tags_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Tags_championId_key] UNIQUE NONCLUSTERED ([championId])
);

-- CreateTable
CREATE TABLE [dbo].[CombatStyleTag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [tagId] INT NOT NULL,
    CONSTRAINT [CombatStyleTag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AttributeTag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [tagId] INT NOT NULL,
    CONSTRAINT [AttributeTag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[OrganizationTag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [tagId] INT NOT NULL,
    CONSTRAINT [OrganizationTag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AllianceWarsTag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [tagId] INT NOT NULL,
    CONSTRAINT [AllianceWarsTag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[CarinasChallengesTag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [tagId] INT NOT NULL,
    CONSTRAINT [CarinasChallengesTag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[AllianceQuestTag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    [tagId] INT NOT NULL,
    CONSTRAINT [AllianceQuestTag_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Resistence] (
    [id] INT NOT NULL IDENTITY(1,1),
    [inmunity_asociated] NVARCHAR(1000) NOT NULL,
    [ratio] FLOAT(53) NOT NULL,
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

-- CreateTable
CREATE TABLE [dbo].[DetailsAttribute] (
    [id] INT NOT NULL IDENTITY(1,1),
    [hp] INT NOT NULL,
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

-- AddForeignKey
ALTER TABLE [dbo].[Sprite] ADD CONSTRAINT [Sprite_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Synergy] ADD CONSTRAINT [Synergy_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SynergyBonus] ADD CONSTRAINT [SynergyBonus_synergyId_fkey] FOREIGN KEY ([synergyId]) REFERENCES [dbo].[Synergy]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ChampionSynergy] ADD CONSTRAINT [ChampionSynergy_synergyId_fkey] FOREIGN KEY ([synergyId]) REFERENCES [dbo].[Synergy]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ChampionSynergyBonus] ADD CONSTRAINT [ChampionSynergyBonus_championSynergyId_fkey] FOREIGN KEY ([championSynergyId]) REFERENCES [dbo].[ChampionSynergy]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SpecialAttackBonus] ADD CONSTRAINT [SpecialAttackBonus_specialAttackId_fkey] FOREIGN KEY ([specialAttackId]) REFERENCES [dbo].[SpecialAttack]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SpecialAttack] ADD CONSTRAINT [SpecialAttack_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SignatureBonus] ADD CONSTRAINT [SignatureBonus_signatureAbilityId_fkey] FOREIGN KEY ([signatureAbilityId]) REFERENCES [dbo].[SignatureAbility]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SignatureAbility] ADD CONSTRAINT [SignatureAbility_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE [dbo].[Resistence] ADD CONSTRAINT [Resistence_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Inmunity] ADD CONSTRAINT [Inmunity_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Abilitie] ADD CONSTRAINT [Abilitie_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Characteristic] ADD CONSTRAINT [Characteristic_abilitieId_fkey] FOREIGN KEY ([abilitieId]) REFERENCES [dbo].[Abilitie]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[DetailsAttribute] ADD CONSTRAINT [DetailsAttribute_attributeId_fkey] FOREIGN KEY ([attributeId]) REFERENCES [dbo].[Attribute]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Attribute] ADD CONSTRAINT [Attribute_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

