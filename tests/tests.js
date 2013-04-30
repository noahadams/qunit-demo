module("Example Test");

test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

module("doubler");

test("doubles", function() {
    strictEqual(double(2), 4, "2 * 2 is 4");
});

test("doesn't double things that are not numbers", function() {
    ok(isNaN(double(NaN)), "Doubling NaN is still NaN");
});

module("tellMeLater");

asyncTest("calls my callback", function() {
    expect(1);
    tellMeLater(function(message) {
        strictEqual(message, "It's later", "got called later");
        start();
    });
});

module("dprify");

test("mutiplies by device pixel ratio", function() {
    ok(false, "An intentionally failing test to fix or fix the cause of later");
});
