-- CreateTable
CREATE TABLE "Details" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "description" TEXT,
    "video_link" TEXT,
    "image_link" TEXT,
    "image_alt" TEXT,
    "detail_type_id" INTEGER,

    CONSTRAINT "Details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detailtype" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Detailtype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Regionalities" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "details_id" INTEGER,

    CONSTRAINT "Regionalities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Signal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "related_signal_id" INTEGER,

    CONSTRAINT "Signal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DetailsToSignal" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GroupToSignal" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Detailtype_slug_key" ON "Detailtype"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Regionalities_slug_key" ON "Regionalities"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Group_slug_key" ON "Group"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Signal_slug_key" ON "Signal"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_DetailsToSignal_AB_unique" ON "_DetailsToSignal"("A", "B");

-- CreateIndex
CREATE INDEX "_DetailsToSignal_B_index" ON "_DetailsToSignal"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GroupToSignal_AB_unique" ON "_GroupToSignal"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupToSignal_B_index" ON "_GroupToSignal"("B");

-- AddForeignKey
ALTER TABLE "Details" ADD CONSTRAINT "Details_detail_type_id_fkey" FOREIGN KEY ("detail_type_id") REFERENCES "Detailtype"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Regionalities" ADD CONSTRAINT "Regionalities_details_id_fkey" FOREIGN KEY ("details_id") REFERENCES "Details"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signal" ADD CONSTRAINT "Signal_related_signal_id_fkey" FOREIGN KEY ("related_signal_id") REFERENCES "Signal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DetailsToSignal" ADD CONSTRAINT "_DetailsToSignal_A_fkey" FOREIGN KEY ("A") REFERENCES "Details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DetailsToSignal" ADD CONSTRAINT "_DetailsToSignal_B_fkey" FOREIGN KEY ("B") REFERENCES "Signal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToSignal" ADD CONSTRAINT "_GroupToSignal_A_fkey" FOREIGN KEY ("A") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToSignal" ADD CONSTRAINT "_GroupToSignal_B_fkey" FOREIGN KEY ("B") REFERENCES "Signal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
