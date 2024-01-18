
Blockly.Blocks["uno_display_oled_display"] = {
  init: function () {
    this.jsonInit({
      colour: "#5d2c91",
      tooltip: "",
      message0: "OLED hiện chữ %1 hàng %2 cột %3 %4",
      args0: [
        {
          type: "input_value",
          name: "text"
        },
        {
          type: "input_value",
          name: "row",
          check: "Number",
          min: 1,
          max: 64
        },
        {
          type: "input_value",
          name: "col",
          check: "Number",
          min: 1,
          max: 128
        },
        {
          type: "input_dummy"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_display_oled_display"] = function (block) {
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import *';
  Blockly.Python.definitions_['init_oled'] = 'oled = SSD1306_I2C()';
  var text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var row = Blockly.Python.valueToCode(block, 'row', Blockly.Python.ORDER_ATOMIC);
  var col = Blockly.Python.valueToCode(block, 'col', Blockly.Python.ORDER_ATOMIC);  // TODO: Assemble Python into code variable.
  var code = "oled.text(str(" + text + "), " + col + "-1, " + row + "-1, 1); oled.show()\n";
  return code;
};

Blockly.Blocks["uno_display_oled_pixel"] = {
  init: function () {
    this.jsonInit({
      colour: "#5d2c91",
      tooltip: "",
      message0: "OLED %1 điểm ảnh hàng %2 cột %3 %4",
      args0: [
        {
          "type": "field_dropdown",
          "name": "action",
          "options": [
            [
              "vẽ",
              "1"
            ],
            [
              "xóa",
              "0"
            ],
          ]
        },
        {
          type: "input_value",
          name: "row",
          check: "Number",
          min: 1,
          max: 64
        },
        {
          type: "input_value",
          name: "col",
          check: "Number",
          min: 1,
          max: 128
        },
        {
          type: "input_dummy"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_display_oled_pixel"] = function (block) {
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import *';
  Blockly.Python.definitions_['init_oled'] = 'oled = SSD1306_I2C()';
  var action = block.getFieldValue('action');
  var row = Blockly.Python.valueToCode(block, 'row', Blockly.Python.ORDER_ATOMIC);
  var col = Blockly.Python.valueToCode(block, 'col', Blockly.Python.ORDER_ATOMIC);  // TODO: Assemble Python into code variable.
  var code = "oled.pixel(" + col + "-1, " + row + "-1, " + action + ")\n";
  return code;
};

Blockly.Blocks["uno_display_oled_line"] = {
  init: function () {
    this.jsonInit({
      colour: "#5d2c91",
      tooltip: "",
      message0: "OLED %1 đường thẳng %2 hàng %3 cột %4 rộng %5 %6",
      args0: [
        {
          "type": "field_dropdown",
          "name": "action",
          "options": [
            [
              "vẽ",
              "1"
            ],
            [
              "xóa",
              "0"
            ],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "ngang",
              "hline"
            ],
            [
              "dọc",
              "vline"
            ],
          ]
        },
        {
          type: "input_value",
          name: "row",
          check: "Number",
          min: 1,
          max: 64
        },
        {
          type: "input_value",
          name: "col",
          check: "Number",
          min: 1,
          max: 128
        },
        {
          type: "input_value",
          name: "w",
          check: "Number",
          min: 1
        },
        {
          type: "input_dummy"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_display_oled_line"] = function (block) {
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import *';
  Blockly.Python.definitions_['init_oled'] = 'oled = SSD1306_I2C()';
  var action = block.getFieldValue('action');
  var type = block.getFieldValue('type');
  var row = Blockly.Python.valueToCode(block, 'row', Blockly.Python.ORDER_ATOMIC);
  var col = Blockly.Python.valueToCode(block, 'col', Blockly.Python.ORDER_ATOMIC);
  var w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "oled." + type + "(" + col + "-1, " + row + "-1, " + w + ", " + action + ")\n";
  return code;
};

Blockly.Blocks["uno_display_oled_line2"] = {
  init: function () {
    this.jsonInit({
      colour: "#5d2c91",
      tooltip: "",
      message0: "OLED %1 đường thẳng x1 %2 y1 %3 x2 %4 y2 %5 %6",
      args0: [
        {
          "type": "field_dropdown",
          "name": "action",
          "options": [
            [
              "vẽ",
              "1"
            ],
            [
              "xóa",
              "0"
            ],
          ]
        },
        {
          type: "input_value",
          name: "x1",
          check: "Number",
          min: 1,
        },
        {
          type: "input_value",
          name: "y1",
          check: "Number",
          min: 1,
        },
        {
          type: "input_value",
          name: "x2",
          check: "Number",
          min: 1,
        },
        {
          type: "input_value",
          name: "y2",
          check: "Number",
          min: 1,
        },
        {
          type: "input_dummy"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_display_oled_line2"] = function (block) {
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import *';
  Blockly.Python.definitions_['init_oled'] = 'oled = SSD1306_I2C()';
  var action = block.getFieldValue('action');
  var x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
  var y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
  var x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
  var y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "oled.line(" + x1 + "-1, " + y1 + "-1, " + x2 + "-1, " + y2 + "-1, " + action + ")\n";
  return code;
};

Blockly.Blocks["uno_display_oled_rect"] = {
  init: function () {
    this.jsonInit({
      colour: "#5d2c91",
      tooltip: "",
      message0: "OLED %1 chữ nhật %2 x %3 y %4 rộng %5 cao %6 %7",
      args0: [
        {
          "type": "field_dropdown",
          "name": "action",
          "options": [
            [
              "vẽ",
              "1"
            ],
            [
              "xóa",
              "0"
            ],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "tô đặc",
              "1"
            ],
            [
              "chỉ viền",
              "0"
            ],
          ]
        },
        {
          type: "input_value",
          name: "x",
          check: "Number",
          min: 1,
        },
        {
          type: "input_value",
          name: "y",
          check: "Number",
          min: 1,
        },
        {
          type: "input_value",
          name: "w",
          check: "Number",
          min: 1,
        },
        {
          type: "input_value",
          name: "h",
          check: "Number",
          min: 1,
        },
        {
          type: "input_dummy"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_display_oled_rect"] = function (block) {
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import *';
  Blockly.Python.definitions_['init_oled'] = 'oled = SSD1306_I2C()';
  var action = block.getFieldValue('action');
  var type = block.getFieldValue('type');
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'h', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  console.log(type);
  if (type == "1") {
    return "oled.fill_rect(" + x + "-1, " + y + "-1, " + w + ", " + h + ", " + action + ")\n";
  } else {
    return "oled.rect(" + x + "-1, " + y + "-1, " + w + ", " + h + ", " + action + ")\n";
  }
};

Blockly.Blocks["uno_display_oled_circle"] = {
  init: function () {
    this.jsonInit({
      colour: "#5d2c91",
      tooltip: "",
      message0: "OLED %1 hình tròn %2 x %3 y %4 bán kính %5 %6",
      args0: [
        {
          "type": "field_dropdown",
          "name": "action",
          "options": [
            [
              "vẽ",
              "1"
            ],
            [
              "xóa",
              "0"
            ],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "tô đặc",
              "True"
            ],
            [
              "chỉ viền",
              "False"
            ],
          ]
        },
        {
          type: "input_value",
          name: "x",
          check: "Number",
          min: 1,
        },
        {
          type: "input_value",
          name: "y",
          check: "Number",
          min: 1,
        },
        {
          type: "input_value",
          name: "r",
          check: "Number",
          min: 1,
        },
        {
          type: "input_dummy"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_display_oled_circle"] = function (block) {
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import *';
  Blockly.Python.definitions_['init_oled'] = 'oled = SSD1306_I2C()';
  var action = block.getFieldValue('action');
  var type = block.getFieldValue('type');
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  return "oled.ellipse(" + x + "-1, " + y + "-1, " + r + ", " + r + ", " + action + ", " + type + ")\n";
};

Blockly.Blocks["uno_display_oled_ellipse"] = {
  init: function () {
    this.jsonInit({
      colour: "#5d2c91",
      tooltip: "",
      message0: "OLED %1 ellipse %2 x %3 y %4 xr %5 yr %6 %7",
      args0: [
        {
          "type": "field_dropdown",
          "name": "action",
          "options": [
            [
              "vẽ",
              "1"
            ],
            [
              "xóa",
              "0"
            ],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "tô đặc",
              "True"
            ],
            [
              "chỉ viền",
              "False"
            ],
          ]
        },
        {
          type: "input_value",
          name: "x",
          check: "Number",
          min: 1,
        },
        {
          type: "input_value",
          name: "y",
          check: "Number",
          min: 1,
        },
        {
          type: "input_value",
          name: "xr",
          check: "Number",
          min: 1,
        },
        {
          type: "input_value",
          name: "yr",
          check: "Number",
          min: 1,
        },
        {
          type: "input_dummy"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_display_oled_ellipse"] = function (block) {
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import *';
  Blockly.Python.definitions_['init_oled'] = 'oled = SSD1306_I2C()';
  var action = block.getFieldValue('action');
  var type = block.getFieldValue('type');
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var xr = Blockly.Python.valueToCode(block, 'xr', Blockly.Python.ORDER_ATOMIC);
  var yr = Blockly.Python.valueToCode(block, 'yr', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  return "oled.ellipse(" + x + "-1, " + y + "-1, " + xr + ", " + yr + ", " + action + ", " + type  + ")\n";
};

Blockly.Blocks["uno_display_oled_poly"] = {
  init: function () {
    this.jsonInit({
      colour: "#5d2c91",
      tooltip: "",
      message0: "OLED %1 polygon %2 x %3 y %4 pixels [ %5 ] %6",
      args0: [
        {
          "type": "field_dropdown",
          "name": "action",
          "options": [
            [
              "vẽ",
              "1"
            ],
            [
              "xóa",
              "0"
            ],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "tô đặc",
              "True"
            ],
            [
              "chỉ viền",
              "False"
            ],
          ]
        },
        {
          type: "input_value",
          name: "x",
          check: "Number",
          min: 1,
        },
        {
          type: "input_value",
          name: "y",
          check: "Number",
          min: 1,
        },
        {
          "type": "field_input",
          "name": "text",
          "text": "10,50,50,10,50,30,10,10"
        },
        {
          type: "input_dummy"
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_display_oled_poly"] = function (block) {
  Blockly.Python.definitions_['import_array'] = 'import array';
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import *';
  Blockly.Python.definitions_['init_oled'] = 'oled = SSD1306_I2C()';
  var action = block.getFieldValue('action');
  var type = block.getFieldValue('type');
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var text = block.getFieldValue('text');
  var code = "oled.poly(" + x + "-1, " + y + "-1, " + "array.array('h', [" + text + "]), " + action + ", " + type + ")\n";
  return code;
};

Blockly.Blocks["uno_display_oled_clear"] = {
  init: function () {
    this.jsonInit({
      colour: "#5d2c91",
      tooltip: "Xóa màn hình OLED",
      message0: "xóa màn hình OLED",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_display_oled_clear"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import *';
  Blockly.Python.definitions_['init_oled'] = 'oled = SSD1306_I2C()';
  var code = "oled.fill(0); oled.show()\n";
  return code;
};

Blockly.Blocks["uno_display_oled_show"] = {
  init: function () {
    this.jsonInit({
      colour: "#5d2c91",
      tooltip: "Vẽ lại màn hình OLED",
      message0: "cập nhật màn hình OLED",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  }
};

Blockly.Python["uno_display_oled_show"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import *';
  Blockly.Python.definitions_['init_oled'] = 'oled = SSD1306_I2C()';
  var code = "oled.show()\n";
  return code;
};