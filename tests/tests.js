module("Example Test");

test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

module("doubler");

test("doubles", function() {
    ok(true);
});

module("dprify");

test("mutiplies by device pixel ratio", function() {
    ok(true);
});

module("tellMeLater");

asyncTest("calls my callback", function() {
    expect(0);

    start();
});