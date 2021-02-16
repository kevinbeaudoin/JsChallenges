module.exports = {
    expect: function expect(subject, value, expected) {
        if (Array.isArray(value)) {
            expected = expected.toString();
            value = value.toString();
        }
        console.log(
            subject,
            value === expected
                ? "Nailed it"
                : `Doh! because ${value} !== ${expected}`
        );
    },
};
