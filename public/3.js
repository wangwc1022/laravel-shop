(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/AttrAdd.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/goods/AttrAdd.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AttrAdd",
  data: function data() {
    return {
      attrGroupId: "",
      attrList: [],
      inputVisible: false,
      inputValue: ''
    };
  },
  mounted: function mounted() {
    var that = this,
        attrGroupId = that.$route.query.attrGroupId;
    that.attrGroupId = attrGroupId;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/attr/list-group?attrGroupId=" + attrGroupId).then(function (res) {
      if (res.data.code === 2000) {
        that.attrList = res.data.data;
      }
    });
  },
  methods: {
    showInput: function showInput() {
      var _this = this;

      this.inputVisible = true;
      this.$nextTick(function (_) {
        _this.$refs.attrInput.$refs.input.focus();
      });
    },
    addAttr: function addAttr() {
      var that = this,
          inputValue = that.inputValue;

      if (inputValue) {
        var data = {
          attrGroupId: that.attrGroupId,
          name: inputValue
        };
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/attr/create", data).then(function (res) {
          if (res.data.code === 2000) {
            that.attrList.push({
              name: inputValue
            });
          } else {
            that.$message({
              type: 'error',
              message: '添加失败!'
            });
          }
        }).catch(function (err) {});
      }

      this.inputVisible = false;
      this.inputValue = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/AttrAdd.vue?vue&type=style&index=0&id=49aa10dd&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/goods/AttrAdd.vue?vue&type=style&index=0&id=49aa10dd&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.el-tag[data-v-49aa10dd] {\n    margin-right: 10px;\n    margin-bottom: 10px;\n}\n.button-new-tag[data-v-49aa10dd] {\n    height: 32px;\n    line-height: 30px;\n    padding-top: 0;\n    padding-bottom: 0;\n}\n.input-new-tag[data-v-49aa10dd] {\n    margin-bottom: 10px;\n    width: 90px;\n    vertical-align: bottom;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/AttrAdd.vue?vue&type=style&index=0&id=49aa10dd&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/goods/AttrAdd.vue?vue&type=style&index=0&id=49aa10dd&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttrAdd.vue?vue&type=style&index=0&id=49aa10dd&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/AttrAdd.vue?vue&type=style&index=0&id=49aa10dd&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/AttrAdd.vue?vue&type=template&id=49aa10dd&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/goods/AttrAdd.vue?vue&type=template&id=49aa10dd&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("el-card", [
    _c(
      "div",
      { staticClass: "clearfix", attrs: { slot: "header" }, slot: "header" },
      [_c("span", [_vm._v("添加属性")])]
    ),
    _vm._v(" "),
    _c(
      "div",
      [
        _vm._l(_vm.attrList, function(attr) {
          return _c(
            "el-tag",
            {
              key: attr.name,
              attrs: { type: "primary", "disable-transitions": true }
            },
            [_vm._v("\n            " + _vm._s(attr.name) + "\n        ")]
          )
        }),
        _vm._v(" "),
        _vm.inputVisible
          ? _c("el-input", {
              ref: "attrInput",
              staticClass: "input-new-tag",
              attrs: { size: "small" },
              on: { blur: _vm.addAttr },
              nativeOn: {
                keyup: function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.addAttr($event)
                }
              },
              model: {
                value: _vm.inputValue,
                callback: function($$v) {
                  _vm.inputValue = $$v
                },
                expression: "inputValue"
              }
            })
          : _c(
              "el-button",
              {
                staticClass: "button-new-tag",
                attrs: { size: "small" },
                on: { click: _vm.showInput }
              },
              [_vm._v("+ 添加属性")]
            )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/goods/AttrAdd.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/goods/AttrAdd.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttrAdd_vue_vue_type_template_id_49aa10dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttrAdd.vue?vue&type=template&id=49aa10dd&scoped=true& */ "./resources/js/views/pages/goods/AttrAdd.vue?vue&type=template&id=49aa10dd&scoped=true&");
/* harmony import */ var _AttrAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttrAdd.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/goods/AttrAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AttrAdd_vue_vue_type_style_index_0_id_49aa10dd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttrAdd.vue?vue&type=style&index=0&id=49aa10dd&scoped=true&lang=css& */ "./resources/js/views/pages/goods/AttrAdd.vue?vue&type=style&index=0&id=49aa10dd&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AttrAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttrAdd_vue_vue_type_template_id_49aa10dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AttrAdd_vue_vue_type_template_id_49aa10dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49aa10dd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/goods/AttrAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/goods/AttrAdd.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/goods/AttrAdd.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttrAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/AttrAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/goods/AttrAdd.vue?vue&type=style&index=0&id=49aa10dd&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/pages/goods/AttrAdd.vue?vue&type=style&index=0&id=49aa10dd&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrAdd_vue_vue_type_style_index_0_id_49aa10dd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttrAdd.vue?vue&type=style&index=0&id=49aa10dd&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/AttrAdd.vue?vue&type=style&index=0&id=49aa10dd&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrAdd_vue_vue_type_style_index_0_id_49aa10dd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrAdd_vue_vue_type_style_index_0_id_49aa10dd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrAdd_vue_vue_type_style_index_0_id_49aa10dd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrAdd_vue_vue_type_style_index_0_id_49aa10dd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrAdd_vue_vue_type_style_index_0_id_49aa10dd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/goods/AttrAdd.vue?vue&type=template&id=49aa10dd&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/pages/goods/AttrAdd.vue?vue&type=template&id=49aa10dd&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrAdd_vue_vue_type_template_id_49aa10dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AttrAdd.vue?vue&type=template&id=49aa10dd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/AttrAdd.vue?vue&type=template&id=49aa10dd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrAdd_vue_vue_type_template_id_49aa10dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrAdd_vue_vue_type_template_id_49aa10dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);