# Banking page — Art Book asset manifest

Source: Kweli Art Book Volume 2 (Industries), the ten-frame row captioned
for Banking (KYC Verification, Account Opening, Loan Application, Credit
Assessment, Trade Finance, Corporate Banking, Bank Guarantees, Financial
Statements, Valuation Report(s), Branch Operations). These are not yet
exported as individual files — every slot below currently renders as an
`ArtFrame` placeholder (see `src/components/ui/ArtFrame.tsx`).

## Explorer — one frame per workflow (confirmed source)

| Workflow | Export as |
|---|---|
| KYC | `kyc-verification.webp` |
| Account Opening | `account-opening.webp` |
| Lending | `loan-application.webp` |
| Trade Finance | `trade-finance.webp` |
| Corporate Banking | `corporate-banking.webp` |
| Bank Guarantees | `bank-guarantees.webp` |
| Financial Statements | `financial-statements.webp` |
| Valuation | `valuation-report.webp` |
| Branch Operations | `branch-operations.webp` |

## Ecosystem tiles — imperfect fit, flagged

The Ecosystem section shows actor types (Customer, Employer, Lawyer,
Auditor, Accountant, Government, Valuer), but the Volume 2 Banking row is
process-scenes, not actor portraits. Current best-fit assignments (see
`src/lib/industryContent/banking.ts`) reuse the nearest process frame per
actor — Lawyer → Loan Application and Auditor → Credit Assessment are the
weakest fits (flagged here, not in the visible on-page caption). If
dedicated actor-portrait frames exist elsewhere in the Art Books, prefer
those.

## Hero

No single frame communicates multiple banking lines at once. Reserved as
`hero-banking.webp` pending art direction's pick or a new composite.
