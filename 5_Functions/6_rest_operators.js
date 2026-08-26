// The rest operator (...) in JavaScript is used to collect multiple elements into a single array or object.

function abcd1(...val)
{
    console.log(val);
}

abcd1(1, 2, 3, 4, 5, 6, 7, 8);

function abcd2(a, b, c, ...val)
{
    console.log(a, b, c, val);
}

abcd2(1, 2, 3, 4, 5, 6, 7, 8);