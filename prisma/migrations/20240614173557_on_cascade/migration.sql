/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Champion` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Sprite] DROP CONSTRAINT [Sprite_championId_fkey];

-- CreateIndex
ALTER TABLE [dbo].[Champion] ADD CONSTRAINT [Champion_name_key] UNIQUE NONCLUSTERED ([name]);

-- AddForeignKey
ALTER TABLE [dbo].[Sprite] ADD CONSTRAINT [Sprite_championId_fkey] FOREIGN KEY ([championId]) REFERENCES [dbo].[Champion]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
