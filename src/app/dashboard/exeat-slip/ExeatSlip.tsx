// components/ExeatSlip.tsx
"use client";
import Buttons from "@/components/buttons";
import Image from "next/image";
import React from "react";

type ExeatData = {
  matricNo: string;
  fullName: string;
  department: string;
  level: string;
  destination: string;
  reasonForExeat: string;
  dateOfLeave: string; // mm/dd/yyyy
  dateOfReturn: string; // mm/dd/yyyy
  parentContact: string;
  slipNo?: string; // optional: e.g. "EX-2025-0001"
  session?: string; // optional: e.g. "2024/2025"
  chiefPorterApproved?: boolean;
  deanApproved?: boolean;
  gateApproved?: boolean;
};

type Props = {
  data: ExeatData;
  school?: {
    name: string;
    address?: string;
  };
};

const ExeatSlip: React.FC<Props> = ({ data, school }) => {
  return (
    <div className="max-w-[900px] mx-auto p-6 print:p-0">
      {/* Actions - hidden on print */}
      <div className="flex justify-end gap-3 mb-4 print:hidden">
        <div className="px-5" onClick={() => window.print()}>
          <Buttons text="Download PDF" />
        </div>
      </div>

      {/* Paper */}
      <div
        className="
        bg-white text-black mx-auto shadow-sm rounded-xl
        print:shadow-none print:border-0 print:rounded-none
        p-6 md:p-10 
      "
      >
        {/* Header */}
        <div className="flex items-center gap-4 pb-4">
          <Image src={"/logo.png"} alt="logo" width={80} height={80} />

          <div className="flex-1">
            <h1 className="text-xl font-semibold">
              {school?.name ?? "Your School Name"}
            </h1>
            {school?.address && <p className="text-sm">{school.address}</p>}
            <p className="text-sm mt-1">
              {data.session ? `Academic Session: ${data.session}` : null}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm">Slip No:</p>
            <p className="text-base">{data.slipNo ?? "EX—AUTO"}</p>
            <p className="text-xs mt-1">
              Generated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center my-4">
          <h2 className="text-lg">EXEAT SLIP</h2>
        </div>

        {/* Student Info */}
        <section className=" rounded-lg p-4">
          <h3 className="text-sm mb-3">Student Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Full Name" value={data.fullName} />
            <Field label="Matriculation Number" value={data.matricNo} />
            <Field label="Department" value={data.department} />
            <Field label="Level" value={data.level} />
            <Field label="Parent/Guardian Contact" value={data.parentContact} />
            {data.deanApproved !== false ? (
              <Field label="Dean Approved" value={"True"} />
            ) : (
              <Field label="Dean Approved" value={"False"} />
            )}

            {data.chiefPorterApproved !== false ? (
              <Field label="Chief Porter Approved" value={"True"} />
            ) : (
              <Field label="Chief Porter Approved" value={"False"} />
            )}

            {data.gateApproved !== false ? (
              <Field label="Gate Approved" value={"True"} />
            ) : (
              <Field label="Gate Approved" value={"False"} />
            )}
          </div>
        </section>

        {/* Trip Details */}
        <section className=" rounded-lg p-4 mt-4">
          <h3 className="text-sm mb-3">Trip Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Destination" value={data.destination} />
            <Field label="Reason for Exeat" value={data.reasonForExeat} />
            <Field label="Date of Leave" value={data.dateOfLeave} />
            <Field label="Date of Return" value={data.dateOfReturn} />
            <Field
              label="Duration"
              value={durationDays(data.dateOfLeave, data.dateOfReturn)}
            />
          </div>
        </section>

        {/* Footer / Notes */}
        <div className="mt-6 text-xs leading-relaxed">
          <p>
            • Student must present this slip at the gate upon exit and re-entry.
          </p>
          <p>• Any alteration renders this slip invalid.</p>
          <p>• Keep this slip safe; duplicate may not be issued.</p>
        </div>
      </div>
    </div>
  );
};

export default ExeatSlip;

/* ---------- Helpers ---------- */

const Field = ({
  label,
  value,
}: {
  label: string;
  value?: string | number | [];
}) => (
  <div className="space-y-1">
    <p className="text-xs">{label}</p>
    <p className=" pb-1">{value || "—"}</p>
  </div>
);

/** Returns "X days" or "—" if invalid */
function durationDays(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const diff = e.getTime() - s.getTime();
  if (isNaN(diff)) return "—";
  const days = Math.max(1, Math.round(diff / (1000 * 60 * 60 * 24)));
  return `${days} day${days > 1 ? "s" : ""}`;
}
