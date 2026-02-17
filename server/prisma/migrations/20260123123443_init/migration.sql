-- CreateTable
CREATE TABLE "MembershipApplication" (
    "id" TEXT NOT NULL,
    "givenName" TEXT NOT NULL,
    "familyName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "visibility" TEXT NOT NULL,
    "companyName" TEXT,
    "prefix" TEXT,
    "title" TEXT,
    "companyPurpose" TEXT,
    "foundingYear" TEXT,
    "foundingMonth" TEXT,
    "foundingDay" TEXT,
    "employees" INTEGER,
    "activities" TEXT[],
    "specialFocus" TEXT,
    "acceptStatutes" BOOLEAN NOT NULL,
    "donation" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MembershipApplication_pkey" PRIMARY KEY ("id")
);
