export type FormatRupiahOptions = {
  withPrefix?: boolean; // default: true  -> "Rp 1.000"
  withSpaceAfterPrefix?: boolean; // default: true  -> "Rp 1.000" vs "Rp1.000"
  minimumFractionDigits?: number; // default: 0
  maximumFractionDigits?: number; // default: 0
};

export function formatRupiah(
  value: number | string,
  options?: FormatRupiahOptions
): string {
  const {
    withPrefix = true,
    withSpaceAfterPrefix = true,
    minimumFractionDigits = 0,
    maximumFractionDigits = 0,
  } = options ?? {};

  const num =
    typeof value === "string" ? Number(value.replace(/[^\d.-]/g, "")) : value;

  if (!isFinite(num)) {
    // fallback jika input bukan number valid
    return withPrefix ? `Rp${withSpaceAfterPrefix ? " " : ""}0` : "0";
  }

  const sign = num < 0 ? "-" : "";
  const abs = Math.abs(num);

  const formatter = new Intl.NumberFormat("id-ID", {
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return `${sign}${
    withPrefix ? "Rp" + (withSpaceAfterPrefix ? " " : "") : ""
  }${formatter.format(abs)}`;
}
