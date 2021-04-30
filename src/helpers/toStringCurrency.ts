export function toStringCurrency(value: any) {
	return value.toLocaleString("pt-BR", {
		currency: "BRL",
		currencyDisplay: "symbol",
		style: "currency",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
}