(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/ad/AdList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/ad/AdList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdList",
  data: function data() {
    return {
      adList: [],
      pageNo: 1
    };
  },
  mounted: function mounted() {
    var that = this;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('ad/list').then(function (res) {
      that.adList = res.data.data;
    });
  },
  methods: {
    modifyState: function modifyState(type, index, id) {
      var _this = this;

      var that = this,
          state = 1;
      if (type === "disable") state = 0;
      var message = state ? "启用" : "禁用";
      that.$confirm("确认" + message + "广告?", '提示', {
        confirmButtonText: "确认",
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("ad/modState", {
          state: state,
          id: id
        }).then(function (res) {
          if (res.data.code === 2000) that.adList[index].state = state;
        });
      }).catch(function () {
        _this.$message({
          type: 'info',
          message: '已取消' + message
        });
      });
    },
    deleteAd: function deleteAd(index, id) {
      var _this2 = this;

      var that = this;
      this.$confirm(' 确认删除当前广告?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        var ids = [];
        ids.push(id);
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("ad/delete", {
          ids: ids
        }).then(function (res) {
          if (res.data.code === 2000) {
            that.adList.splice(index, 1);
            that.$message({
              type: 'success',
              message: '删除成功!'
            });
          }
        });
      }).catch(function () {
        _this2.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    deleteAds: function deleteAds() {
      var _this3 = this;

      var that = this;
      var selections = that.$refs.multipleTable.selection;

      if (selections.length) {
        that.$confirm("确认删除选中的广告?", '提示', {
          confirmButtonText: "确认",
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          var ids = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = selections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var section = _step.value;
              ids.push(section.id);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("ad/delete", {
            ids: ids
          }).then(function (res) {
            if (res.data.code === 2000) {
              that.$message({
                type: 'success',
                message: '删除成功!'
              });
              that.$router.reload();
            }
          });
        }).catch(function () {
          _this3.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/ad/AdList.vue?vue&type=template&id=094c869a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/ad/AdList.vue?vue&type=template&id=094c869a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "el-card",
    [
      _c(
        "div",
        { staticClass: "clearfix", attrs: { slot: "header" }, slot: "header" },
        [
          _c(
            "router-link",
            { attrs: { to: { path: "/ad-edit", query: { type: "create" } } } },
            [
              _c("el-button", { attrs: { type: "primary", size: "medium" } }, [
                _vm._v("添加广告")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { type: "danger", size: "medium" },
              on: { click: _vm.deleteAds }
            },
            [_vm._v("批量删除")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          ref: "adList",
          staticStyle: { width: "100%" },
          attrs: { data: _vm.adList, "tooltip-effect": "dark" }
        },
        [
          _c("el-table-column", { attrs: { type: "selection", width: "55" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "name", label: "名称", width: "120" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "image_url", label: "广告图片", width: "120" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-popover",
                      {
                        attrs: {
                          placement: "right",
                          title: "图片预览",
                          trigger: "hover"
                        }
                      },
                      [
                        _c("img", { attrs: { src: scope.row.image_url } }),
                        _vm._v(" "),
                        _c("img", {
                          staticStyle: {
                            "max-height": "50px",
                            "max-width": "130px"
                          },
                          attrs: {
                            slot: "reference",
                            src: scope.row.image_url,
                            alt: scope.row.image_url
                          },
                          slot: "reference"
                        })
                      ]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "content", label: "描述", "min-width": "1" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "position_id", label: "位置", width: "120" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "sort_order", label: "排序", width: "120" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "state", label: "状态", width: "120" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.state === 0
                      ? _c("span", [_vm._v("已禁用")])
                      : _c("span", [_vm._v("已启用")])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作", width: "300" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            path: "/ad-edit",
                            query: { type: "modify", adId: scope.row.id }
                          }
                        }
                      },
                      [
                        _c(
                          "el-button",
                          { attrs: { size: "mini", type: "info" } },
                          [_vm._v("修改")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    scope.row.state
                      ? _c(
                          "el-button",
                          {
                            attrs: { size: "mini", type: "warning" },
                            on: {
                              click: function($event) {
                                _vm.modifyState(
                                  "disable",
                                  scope.$index,
                                  scope.row.id
                                )
                              }
                            }
                          },
                          [_vm._v("禁用\n                ")]
                        )
                      : _c(
                          "el-button",
                          {
                            attrs: { size: "mini", type: "success" },
                            on: {
                              click: function($event) {
                                _vm.modifyState(
                                  "enable",
                                  scope.$index,
                                  scope.row.id
                                )
                              }
                            }
                          },
                          [_vm._v("启用\n                ")]
                        ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { size: "mini", type: "danger" },
                        on: {
                          click: function($event) {
                            _vm.deleteAd(scope.$index, scope.row.id)
                          }
                        }
                      },
                      [_vm._v("删除\n                ")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("el-pagination", {
        staticStyle: {
          "margin-top": "20px",
          "margin-bottom": "20px",
          float: "right"
        },
        attrs: {
          background: "",
          layout: "total, sizes, prev, pager, next, jumper",
          total: 1000,
          "page-sizes": [20, 50, 100],
          "page-size": 20,
          "current-page": _vm.pageNo
        },
        on: {
          "current-change": _vm.onPageNoChanged,
          "update:currentPage": function($event) {
            _vm.pageNo = $event
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/ad/AdList.vue":
/*!************************************************!*\
  !*** ./resources/js/views/pages/ad/AdList.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdList_vue_vue_type_template_id_094c869a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdList.vue?vue&type=template&id=094c869a&scoped=true& */ "./resources/js/views/pages/ad/AdList.vue?vue&type=template&id=094c869a&scoped=true&");
/* harmony import */ var _AdList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdList.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/ad/AdList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdList_vue_vue_type_template_id_094c869a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdList_vue_vue_type_template_id_094c869a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "094c869a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/ad/AdList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/ad/AdList.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/pages/ad/AdList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/ad/AdList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/ad/AdList.vue?vue&type=template&id=094c869a&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/pages/ad/AdList.vue?vue&type=template&id=094c869a&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdList_vue_vue_type_template_id_094c869a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdList.vue?vue&type=template&id=094c869a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/ad/AdList.vue?vue&type=template&id=094c869a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdList_vue_vue_type_template_id_094c869a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdList_vue_vue_type_template_id_094c869a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);