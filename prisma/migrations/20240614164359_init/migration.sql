/*
  Warnings:

  - You are about to drop the `Champions` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropTable
DROP TABLE [dbo].[Champions];

-- CreateTable
CREATE TABLE [dbo].[Champion] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [biography] NVARCHAR(1000) NOT NULL,
    [release_date] DATETIME2 NOT NULL,
    CONSTRAINT [Champion_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Sprite] (
    [id] INT NOT NULL IDENTITY(1,1),
    [source] NVARCHAR(1000) NOT NULL,
    [url] NVARCHAR(1000) NOT NULL,
    [championId] INT NOT NULL,
    CONSTRAINT [Sprite_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Sprite] ADD CONSTRAINT [Sprite_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
