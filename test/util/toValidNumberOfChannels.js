"use strict";

const assert = require("power-assert");
const toValidNumberOfChannels = require("../../src/util/toValidNumberOfChannels");

describe("util.toValidBitDepth()", () => {
  it("return valid number of channels", () => {
    assert(toValidNumberOfChannels(0) === 1);
    assert(toValidNumberOfChannels(2) === 2);
    assert(toValidNumberOfChannels(8) === 8);
    assert(toValidNumberOfChannels(2000) === 32);
  });
});
