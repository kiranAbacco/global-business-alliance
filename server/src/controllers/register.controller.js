import { PrismaClient } from "@prisma/client";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const prisma = new PrismaClient();

/* CREATE MEMBERSHIP */
export const createMembership = async (req, res) => {
  try {
    const data = req.body;
    const contacts = data.contacts ? JSON.parse(data.contacts) : [];

    // Convert founding date
    let foundingDate = null;
    if (data.foundingYear && data.foundingMonth) {
      foundingDate = new Date(
        Number(data.foundingYear),
        Number(data.foundingMonth) - 1,
        1
      );
    }

    const membership = await prisma.membershipApplication.create({
      data: {
        // Applicant
        prefix: data.prefix || null,
        givenName: data.givenName,
        familyName: data.familyName || null,
        phone: data.phone,
        title: data.title || null,

        // Company Details
        companyName: data.companyName,
        companyLogo: req.file?.path || null,
        companyAddress: data.companyAddress,
        poBox: data.poBox || null,
        postalCode: data.postalCode || null,
        city: data.city || null,
        state: data.state || null,
        country: data.country,

        industry: data.industry || null,
        industryMain: data.industryMain || null,
        subIndustry: data.subIndustry || null,
        customIndustry: data.customIndustry || null,
        customSubIndustry: data.customSubIndustry || null,

        companyEmail: data.companyEmail,
        companyTelephone: data.companyTelephone,
        companyWebsite: data.companyWebsite,

        // ✅ NEW SOCIAL MEDIA FIELDS
        facebook: data.facebook || null,
        instagram: data.instagram || null,
        linkedin: data.linkedin || null,
        twitter: data.twitter || null,

        visibility: data.visibility,

        // Company Information
        companyPurpose: data.companyPurpose || null,
        foundingDate,
        employees: data.employees ? Number(data.employees) : null,
        activities: Array.isArray(data.activities)
          ? data.activities
          : data.activities
          ? [data.activities]
          : [],
        specialFocus: data.specialFocus || null,
        newProject: data.newProject || null,

        // Contacts
        contacts,

        // Agreements
        acceptStatutes: data.acceptStatutes === "true",
        donation: data.donation === "true"
      }
    });

    res.status(201).json({
      message: "Membership submitted successfully",
      membership
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};



/* GET MEMBERSHIPS */
export const getMemberships = async (req, res) => {
  try {
    const { country, industry } = req.query;

    const list = await prisma.membershipApplication.findMany({
      where: {
        ...(country && {
          country: { equals: country.trim(), mode: "insensitive" }
        }),
        ...(industry && industry !== "All industries" && {
          industry: { equals: industry.trim(), mode: "insensitive" }
        })
      }
    });

    res.json(list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/* GET INDUSTRIES BY COUNTRY */
export const getIndustriesByCountry = async (req, res) => {
  try {
    const { country } = req.query;

    const industries = await prisma.membershipApplication.findMany({
      where: country
        ? { country: { equals: country.trim(), mode: "insensitive" } }
        : {},
      distinct: ["industry"],
      select: { industry: true }
    });

    res.json(industries.map(i => i.industry).filter(Boolean));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/* GET COUNTRIES BY INDUSTRY */
export const getCountriesByIndustry = async (req, res) => {
  try {
    const { industry } = req.query;

    const countries = await prisma.membershipApplication.findMany({
      where: industry
        ? { industry: { equals: industry.trim(), mode: "insensitive" } }
        : {},
      distinct: ["country"],
      select: { country: true }
    });

    res.json(countries.map(c => c.country).filter(Boolean));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
