/*
  Warnings:

  - The primary key for the `todo` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "todo" DROP CONSTRAINT "todo_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "userid" DROP DEFAULT,
ADD CONSTRAINT "todo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "todo_userid_seq";

-- AddForeignKey
ALTER TABLE "todo" ADD CONSTRAINT "todo_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
