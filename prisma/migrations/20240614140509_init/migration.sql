/*
  Warnings:

  - You are about to drop the `Champion` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropTable
DROP TABLE [dbo].[Champion];

-- CreateTable
CREATE TABLE [dbo].[Champions] (
    [id] INT NOT NULL IDENTITY(1,1),
    [biography] NVARCHAR(1000) NOT NULL,
    [release_date] DATETIME2 NOT NULL,
    CONSTRAINT [Champions_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
