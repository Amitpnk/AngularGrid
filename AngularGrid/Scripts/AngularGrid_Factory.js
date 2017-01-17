
function Factory() {
    return {
        Deferred: function () {
            return new ExchangeRates();
        },
        Employee: function () {
            return new Employee();
        }
    }
}
