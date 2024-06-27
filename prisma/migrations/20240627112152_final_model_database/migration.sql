/*
  Warnings:

  - A unique constraint covering the columns `[championId]` on the table `Tags` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[Tags] ADD CONSTRAINT [Tags_championId_key] UNIQUE NONCLUSTERED ([championId]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
