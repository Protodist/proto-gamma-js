// package: gamma
// file: gamma/c.proto

import * as jspb from "google-protobuf";

export class GammaTest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GammaTest.AsObject;
  static toObject(includeInstance: boolean, msg: GammaTest): GammaTest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GammaTest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GammaTest;
  static deserializeBinaryFromReader(message: GammaTest, reader: jspb.BinaryReader): GammaTest;
}

export namespace GammaTest {
  export type AsObject = {
  }
}

