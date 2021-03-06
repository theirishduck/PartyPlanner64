PP64.ns("patches");

PP64.patches.addPatch({
  id: "INTROSKIP",
  name: "Skip Intro",
  desc: "Booting the game skips intro sequences",

  supports: [
    $gameType.MP1_USA,
    $gameType.MP2_USA,
    $gameType.MP3_USA,
  ],

  apply: function(romView, game) {
    switch (game) {
      case $gameType.MP1_USA:
        romView.setUint16(0x002BAF82, 0x0069);
        break;
      case $gameType.MP2_USA:
        romView.setUint16(0x0001D316, 0x005B);
        break;
      case $gameType.MP3_USA:
        romView.setUint16(0x0046854E, 0x0079);
        break;
    }
  }
});