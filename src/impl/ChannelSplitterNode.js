"use strict";

const util = require("../util");
const AudioNode = require("./AudioNode");
const ChannelSplitterNodeDSP = require("./dsp/ChannelSplitterNode");

class ChannelSplitterNode extends AudioNode {
  /**
   * @param {AudioContext} context
   * @param {object}       opts
   * @param {number}       opts.numberOfOutputs
   */
  constructor(context, opts) {
    opts = opts || /* istanbul ignore next */ {};

    let numberOfOutputs = util.defaults(opts.numberOfOutputs, 6);

    numberOfOutputs = util.toValidNumberOfChannels(numberOfOutputs);

    super(context, {
      inputs: [ 1 ],
      outputs: new Array(numberOfOutputs).fill(1),
      channelCount: 2,
      channelCountMode: "max"
    });
  }
}

Object.assign(ChannelSplitterNode.prototype, ChannelSplitterNodeDSP);

module.exports = ChannelSplitterNode;
