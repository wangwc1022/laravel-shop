(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/SpuDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/goods/SpuDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SpuDetail",
  data: function data() {
    return {
      spuId: 0,
      active: "info",
      categoryId: "",
      spu: {},
      spuDetail: {},
      skuList: [],
      specList: [],
      attrList: [],
      bannerList: []
    };
  },
  mounted: function mounted() {
    var that = this,
        spuId = that.$route.query.spuId;
    var active = that.$route.query.active;
    console.info(active);
    if (active) that.active = active;
    that.spuId = spuId;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("spu/detail?spuId=" + spuId).then(function (res) {
      if (res.data.code === 2000) {
        that.spu = res.data.data.spu;
        that.categoryId = res.data.data.spu.category_id;
        that.spuDetail = res.data.data.detail;
      }
    }).catch(function (err) {});
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("spu/specOptionList?spuId=" + spuId).then(function (res) {
      if (res.data.code === 2000) {
        that.specList = res.data.data;
      }
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("sku/listBySpu?spuId=" + that.spuId).then(function (res) {
      if (res.data.code === 2000) {
        that.skuList = res.data.data;
      }
    }).catch(function (err) {});
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/attr/value-list-spu?spuId=" + that.spuId).then(function (res) {
      if (res.data.code === 2000) {
        that.attrList = res.data.data;
      }
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/spu/banner-list?spuId=" + that.spuId).then(function (res) {
      if (res.data.code === 2000) {
        that.bannerList = res.data.data;
      }
    });
  },
  methods: {
    modifyBannerState: function modifyBannerState(type, index, id) {
      var _this = this;

      var that = this,
          state = 1;
      if (type === "disable") state = 0;
      var message = state ? "启用" : "禁用";
      that.$confirm("确认" + message + "Banner?", '提示', {
        confirmButtonText: "确认",
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("spu/modify-banner-state", {
          state: state,
          id: id
        }).then(function (res) {
          if (res.data.code === 2000) that.bannerList[index].state = state;
        });
      }).catch(function () {
        _this.$message({
          type: 'info',
          message: '已取消' + message
        });
      });
    },
    deleteBanner: function deleteBanner(index, id) {
      var that = this,
          ids = [];
      ids.push(id);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("brand/delete", {
        ids: ids
      }).then(function (res) {
        if (res.data.code === 2000) {
          that.brandList.splice(index, 1);
          that.$message({
            type: 'success',
            message: '删除成功!'
          });
        }
      });
    },
    deleteBanners: function deleteBanners() {
      var that = this,
          selections = that.$refs.multipleTable.selection;

      if (selections.length) {
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

        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("brand/delete", {
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
      }
    },
    onTabClicked: function onTabClicked(tab, event) {
      var that = this;
      that.active = tab.name;
    },
    modifySkuRecom: function modifySkuRecom(type, node) {
      var that = this,
          message = "设置为";
      if (type === 0) message = "取消";
      that.$confirm("是否" + message + "首页推荐商品", '警告', {
        confirmButtonText: "确认",
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        var isRecom = type === 'add' ? 1 : 0,
            param = {
          id: node.row.id,
          isRecom: isRecom
        };
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/sku/recom", param).then(function (res) {
          if (res.data.code === 2000) {
            console.info(node);
            node.row.is_recom = isRecom;
          }
        });
      }).catch(function () {
        that.$message({
          type: 'info',
          message: '已取消设置'
        });
      });
    },
    modifySkuState: function modifySkuState(type, index, id) {
      var _this2 = this;

      var that = this,
          state = 1;
      if (type === "disable") state = 0;
      var message = state ? "上架" : "下架";
      that.$confirm("确认" + message + "该产品?", '提示', {
        confirmButtonText: "确认",
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("sku/modify-state", {
          state: state,
          id: id
        }).then(function (res) {
          if (res.data.code === 2000) that.skuList[index].state = state;
        });
      }).catch(function () {
        _this2.$message({
          type: 'info',
          message: '已取消' + message
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/SpuDetail.vue?vue&type=style&index=0&id=0ae76354&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/goods/SpuDetail.vue?vue&type=style&index=0&id=0ae76354&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.el-tag + .el-tag[data-v-0ae76354] {\n    margin-left: 10px;\n}\n.image[data-v-0ae76354] {\n    width: 48px;\n    height: 48px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/SpuDetail.vue?vue&type=style&index=0&id=0ae76354&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/goods/SpuDetail.vue?vue&type=style&index=0&id=0ae76354&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpuDetail.vue?vue&type=style&index=0&id=0ae76354&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/SpuDetail.vue?vue&type=style&index=0&id=0ae76354&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/SpuDetail.vue?vue&type=template&id=0ae76354&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/goods/SpuDetail.vue?vue&type=template&id=0ae76354&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "el-tabs",
    {
      attrs: { type: "border-card" },
      on: { "tab-click": _vm.onTabClicked },
      model: {
        value: _vm.active,
        callback: function($$v) {
          _vm.active = $$v
        },
        expression: "active"
      }
    },
    [
      _c(
        "el-tab-pane",
        { attrs: { label: "商品信息", name: "info" } },
        [
          _c(
            "router-link",
            {
              attrs: {
                to: {
                  path: "/spu-edit",
                  query: { type: "modify", spuId: _vm.spuId }
                }
              }
            },
            [
              _c("el-button", { attrs: { type: "primary", size: "medium" } }, [
                _vm._v("\n                商品编辑\n            ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "el-card",
            [
              _c(
                "div",
                {
                  staticClass: "clearfix",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [_c("span", [_vm._v("商品信息")])]
              ),
              _vm._v(" "),
              _c("el-row", [_vm._v("商品名称: " + _vm._s(_vm.spu.name))]),
              _vm._v(" "),
              _c("el-row", [_vm._v("品牌: " + _vm._s(_vm.spu.brand_name))]),
              _vm._v(" "),
              _c("el-row", [_vm._v("分类: " + _vm._s(_vm.spu.category_name))]),
              _vm._v(" "),
              _c("el-row", [
                _vm._v("状态:\n                "),
                _vm.spu.state
                  ? _c("span", [_vm._v("已上架")])
                  : _c("span", [_vm._v("已下架")])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("el-card", [
            _c(
              "div",
              {
                staticClass: "clearfix",
                attrs: { slot: "header" },
                slot: "header"
              },
              [_c("span", [_vm._v("商品详情")])]
            ),
            _vm._v(" "),
            _c("span", { domProps: { innerHTML: _vm._s(_vm.spuDetail.html) } })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-tab-pane",
        { attrs: { label: "商品属性", name: "attr" } },
        [
          _c(
            "router-link",
            {
              attrs: {
                to: {
                  path: "/spu-attr-edit",
                  query: { spuId: _vm.spuId, categoryId: _vm.spu.category_id }
                }
              }
            },
            [
              _c("el-button", { attrs: { type: "primary", size: "medium" } }, [
                _vm._v("\n                编辑属性\n            ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              ref: "attrList",
              attrs: {
                data: _vm.attrList,
                "tooltip-effect": "dark",
                width: "100%"
              }
            },
            [
              _c("el-table-column", {
                attrs: { label: "属性名称", prop: "attr_name" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "属性值", prop: "value" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "属性组", prop: "attr_group_name" }
              }),
              _vm._v(" "),
              _c("el-table-column", { attrs: { label: "操作" } })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-tab-pane",
        { attrs: { label: "商品规格", name: "spec" } },
        [
          _c(
            "router-link",
            {
              attrs: {
                to: { path: "/spu-spec-edit", query: { spuId: _vm.spuId } }
              }
            },
            [
              _c("el-button", { attrs: { type: "primary", size: "medium" } }, [
                _vm._v("编辑规格")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              ref: "specList",
              attrs: {
                "tooltip-effect": "dark",
                data: _vm.specList,
                width: "100%"
              }
            },
            [
              _c("el-table-column", {
                attrs: { prop: "name", label: "名称", width: "150px" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "选项", "min-width": "1" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return _vm._l(scope.row.options, function(option) {
                        return _c(
                          "el-tag",
                          {
                            key: option.id,
                            attrs: {
                              type: "primary",
                              "disable-transitions": true
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(option.name) +
                                "\n                    "
                            )
                          ]
                        )
                      })
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "操作", width: "200px" },
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
                                path: "/spu-spec-option",
                                query: {
                                  spuId: _vm.spuId,
                                  specId: scope.row.id
                                }
                              }
                            }
                          },
                          [
                            _c(
                              "el-button",
                              {
                                attrs: { size: "mini", type: "info" },
                                on: { click: function($event) {} }
                              },
                              [_vm._v("修改选项\n                        ")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "el-button",
                          {
                            attrs: { size: "mini", type: "danger" },
                            on: {
                              click: function($event) {
                                _vm.deleteSpec(scope.$index, scope.row.id)
                              }
                            }
                          },
                          [_vm._v("删除\n                    ")]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-tab-pane",
        { attrs: { label: "产品列表", name: "sku" } },
        [
          _c(
            "router-link",
            {
              attrs: {
                to: {
                  path: "/sku-edit",
                  query: { type: "create", spuId: _vm.spuId }
                }
              }
            },
            [
              _c("el-button", { attrs: { type: "primary", size: "medium" } }, [
                _vm._v("添加产品")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              ref: "skuList",
              attrs: {
                data: _vm.skuList,
                "tooltip-effect": "dark",
                width: "100%"
              }
            },
            [
              _c("el-table-column", {
                attrs: {
                  prop: "name",
                  label: "名称",
                  width: "150px",
                  align: "center"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "image_url",
                  label: "商品图片",
                  width: "150px",
                  align: "center"
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("img", {
                          staticClass: "avatar",
                          attrs: { src: scope.row.image_url }
                        })
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "origin_price",
                  label: "原价",
                  width: "150px",
                  align: "center"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "price",
                  label: "价格",
                  width: "150px",
                  align: "center"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "number",
                  label: "数量",
                  width: "150px",
                  align: "center"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "value", label: "规格", "min-width": "1" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "state",
                  label: "状态",
                  width: "100px",
                  align: "center"
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        scope.row.state === 1
                          ? _c("span", [_vm._v("已上架")])
                          : _c("span", [_vm._v("已下架")])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "is_recom",
                  label: "是否热销",
                  width: "100px",
                  align: "center"
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        scope.row.is_recom === 1
                          ? _c("span", [_vm._v("是")])
                          : _c("span", [_vm._v("否")])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "操作", width: "350px" },
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
                                path: "/sku-edit",
                                query: {
                                  type: "modify",
                                  spuId: _vm.spuId,
                                  skuId: scope.row.id
                                }
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
                                    _vm.modifySkuState(
                                      "disable",
                                      scope.$index,
                                      scope.row.id
                                    )
                                  }
                                }
                              },
                              [_vm._v("下架\n                    ")]
                            )
                          : _c(
                              "el-button",
                              {
                                attrs: { size: "mini", type: "success" },
                                on: {
                                  click: function($event) {
                                    _vm.modifySkuState(
                                      "enable",
                                      scope.$index,
                                      scope.row.id
                                    )
                                  }
                                }
                              },
                              [_vm._v("上架\n                    ")]
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
                          [_vm._v("删除\n                    ")]
                        ),
                        _vm._v(" "),
                        scope.row.is_recom === 0
                          ? _c(
                              "el-button",
                              {
                                attrs: { type: "primary", size: "mini" },
                                on: {
                                  click: function($event) {
                                    _vm.modifySkuRecom("add", scope)
                                  }
                                }
                              },
                              [_vm._v("设置推荐\n                    ")]
                            )
                          : _c(
                              "el-button",
                              {
                                attrs: { type: "primary", size: "mini" },
                                on: {
                                  click: function($event) {
                                    _vm.modifySkuRecom("remove", scope)
                                  }
                                }
                              },
                              [_vm._v("取消热推\n                    ")]
                            )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-tab-pane",
        { attrs: { label: "Banner", name: "banner" } },
        [
          _c(
            "router-link",
            {
              attrs: {
                to: { path: "/spu-banner-add", query: { spuId: _vm.spuId } }
              }
            },
            [
              _c("el-button", { attrs: { type: "primary", size: "medium" } }, [
                _vm._v("添加Banner")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { type: "danger", size: "medium" },
              on: {
                click: function($event) {
                  _vm.deleteBanners()
                }
              }
            },
            [_vm._v("批量删除")]
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              ref: "multipleTable",
              staticStyle: { width: "100%" },
              attrs: { data: _vm.bannerList, "tooltip-effect": "dark" }
            },
            [
              _c("el-table-column", {
                attrs: { type: "selection", width: "55" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "图片", prop: "imageUrl", width: "150" },
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
                attrs: { label: "排序", prop: "sort_order", width: "150" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "状态", prop: "state", width: "150" },
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
                attrs: { width: "300", label: "操作" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        scope.row.state
                          ? _c(
                              "el-button",
                              {
                                attrs: { size: "mini", type: "warning" },
                                on: {
                                  click: function($event) {
                                    _vm.modifyBannerState(
                                      "disable",
                                      scope.$index,
                                      scope.row.id
                                    )
                                  }
                                }
                              },
                              [_vm._v("禁用\n                    ")]
                            )
                          : _c(
                              "el-button",
                              {
                                attrs: { size: "mini", type: "success" },
                                on: {
                                  click: function($event) {
                                    _vm.modifyBannerState(
                                      "enable",
                                      scope.$index,
                                      scope.row.id
                                    )
                                  }
                                }
                              },
                              [_vm._v("启用\n                    ")]
                            ),
                        _vm._v(" "),
                        _c(
                          "el-button",
                          {
                            attrs: { size: "mini", type: "danger" },
                            on: {
                              click: function($event) {
                                _vm.deleteBanner(scope.$index, scope.row.id)
                              }
                            }
                          },
                          [_vm._v("删除\n                    ")]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/goods/SpuDetail.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/pages/goods/SpuDetail.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpuDetail_vue_vue_type_template_id_0ae76354_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpuDetail.vue?vue&type=template&id=0ae76354&scoped=true& */ "./resources/js/views/pages/goods/SpuDetail.vue?vue&type=template&id=0ae76354&scoped=true&");
/* harmony import */ var _SpuDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpuDetail.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/goods/SpuDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SpuDetail_vue_vue_type_style_index_0_id_0ae76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpuDetail.vue?vue&type=style&index=0&id=0ae76354&scoped=true&lang=css& */ "./resources/js/views/pages/goods/SpuDetail.vue?vue&type=style&index=0&id=0ae76354&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SpuDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpuDetail_vue_vue_type_template_id_0ae76354_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpuDetail_vue_vue_type_template_id_0ae76354_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ae76354",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/goods/SpuDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/goods/SpuDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pages/goods/SpuDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpuDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpuDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/SpuDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpuDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/goods/SpuDetail.vue?vue&type=style&index=0&id=0ae76354&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/pages/goods/SpuDetail.vue?vue&type=style&index=0&id=0ae76354&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpuDetail_vue_vue_type_style_index_0_id_0ae76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpuDetail.vue?vue&type=style&index=0&id=0ae76354&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/SpuDetail.vue?vue&type=style&index=0&id=0ae76354&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpuDetail_vue_vue_type_style_index_0_id_0ae76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpuDetail_vue_vue_type_style_index_0_id_0ae76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpuDetail_vue_vue_type_style_index_0_id_0ae76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpuDetail_vue_vue_type_style_index_0_id_0ae76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpuDetail_vue_vue_type_style_index_0_id_0ae76354_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/goods/SpuDetail.vue?vue&type=template&id=0ae76354&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/pages/goods/SpuDetail.vue?vue&type=template&id=0ae76354&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpuDetail_vue_vue_type_template_id_0ae76354_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpuDetail.vue?vue&type=template&id=0ae76354&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/goods/SpuDetail.vue?vue&type=template&id=0ae76354&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpuDetail_vue_vue_type_template_id_0ae76354_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpuDetail_vue_vue_type_template_id_0ae76354_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);