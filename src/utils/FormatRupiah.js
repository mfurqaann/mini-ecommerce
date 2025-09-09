
export function formatRupiah(number) {
    const parsed = Number(number);

    if (isNaN(parsed)) {
        return 'Rp 0';
    }

    return parsed.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
}
