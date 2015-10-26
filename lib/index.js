require('../style/index.less');

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {
    },
    removeListener: function () {
    }
  };
};

const antd = {
  Affix: require('./affix'),
  Datepicker: require('./datepicker'),
  Tooltip: require('./tooltip'),
  Carousel: require('./carousel'),
  Tabs: require('./tabs'),
  Modal: require('./modal'),
  Dropdown: require('./dropdown'),
  Progress: require('./progress'),
  Popover: require('./popover'),
  Select: require('./select'),
  Breadcrumb: require('./breadcrumb'),
  Popconfirm: require('./popconfirm'),
  Pagination: require('./pagination'),
  Steps: require('./steps'),
  InputNumber: require('./input-number'),
  Switch: require('./switch'),
  Checkbox: require('./checkbox'),
  Table: require('./table'),
  Tag: require('./tag'),
  Collapse: require('./collapse'),
  message: require('./message'),
  Slider: require('./slider'),
  QueueAnim: require('./queue-anim'),
  Radio: require('./radio'),
  Notification: require('./notification'),
  Alert: require('./alert'),
  Validation: require('./validation'),
  Tree: require('./tree'),
  Upload: require('./upload'),
  Badge: require('./badge'),
  Menu: require('./menu'),
  Timeline: require('./timeline'),
  Button: require('./button').Button,
  ButtonGroup: require('./button').ButtonGroup,
  Icon: require('./iconfont')
};

antd.version = require('./version');

module.exports = antd;