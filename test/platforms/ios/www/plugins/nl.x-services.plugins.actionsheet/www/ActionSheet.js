cordova.define("nl.x-services.plugins.actionsheet.ActionSheet", function(require, exports, module) { function ActionSheet() {
}

ActionSheet.prototype.show = function (options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "ActionSheet", "show", [options]);
};

ActionSheet.prototype.hide = function () {
  cordova.exec(null, null, "ActionSheet", "hide", []);
};

ActionSheet.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.actionsheet = new ActionSheet();

  return window.plugins.actionsheet;
};

cordova.addConstructor(ActionSheet.install);
});
