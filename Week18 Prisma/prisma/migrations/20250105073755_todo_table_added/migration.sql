-- CreateTable
CREATE TABLE "todo" (
    "userid" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("userid")
);
