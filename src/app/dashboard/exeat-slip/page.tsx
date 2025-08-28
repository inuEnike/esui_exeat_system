// app/exeat/page.tsx (or any component/page)

import ExeatSlip from "./ExeatSlip";

export default function Page() {
  const exeat = {
    matricNo: "MDS/MED/01600001",
    fullName: "Inu Enike",
    department: "Medicine and Surgery",
    level: "200",
    destination: "Lagos",
    reasonForExeat: "Medical appointment",
    dateOfLeave: "02/12/2025",
    dateOfReturn: "02/15/2025",
    parentContact: "08034567890",
    slipNo: "EX-2025-0001",
    session: "2025/2026",
    chiefPorterApproved: true,
    deanApproved: false,
    gateApproved: false,
  };

  const school = {
    name: "Edo State University Iyamho",
    address: "Km 7, Abuja, Okene Express Way, Iyamho Edo State",
    // logoUrl: "/logo.png"
  };

  return <ExeatSlip data={exeat} school={school} />;
}
