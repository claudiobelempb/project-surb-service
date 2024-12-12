-- CreateTable
CREATE TABLE "appointment" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,
    "user_id" UUID NOT NULL,
    "time_id" UUID NOT NULL,
    "service_id" UUID NOT NULL,

    CONSTRAINT "appointment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "appointment_user_id_key" ON "appointment"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "appointment_time_id_key" ON "appointment"("time_id");

-- CreateIndex
CREATE UNIQUE INDEX "appointment_service_id_key" ON "appointment"("service_id");

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
