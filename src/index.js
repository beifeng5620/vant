import Sample from '../packages/sample';
import Button from '../packages/button';
import Switch from '../packages/switch';
// zenui
import '../packages/zenui/src/index.pcss';

const install = function(Vue) {
  if (install.installed) return;

  Vue.component(Sample.name, Sample);
  Vue.component(Button.name, Button);
  Vue.component(Switch.name, Switch);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version: '0.0.1',
  Sample,
  Button,
  Switch
};
