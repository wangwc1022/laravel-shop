@extends('admin.layouts.app')
@section('title', '商品管理')
@section('subtitle','商品详情')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#info-pane" data-toggle="tab">商品信息</a></li>
                    <li><a href="#product-pane" data-toggle="tab">产品列表</a></li>
                    <li><a href="#banner-pane" data-toggle="tab">轮播图</a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="info-pane">
                        <b>商品名称</b> {{$detail->name}}<br>
                        <b>商品简述</b> {{$detail->brief}}<br>
                        <b>品牌</b> {{$detail->brand_id}} <br>
                        <b>分类</b> {{$detail->category_id}}<br>
                    </div>
                    <!-- 产品列表 -->
                    <div class="tab-pane" id="product-pane">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title">产品列表</h3>
                                <a href=" {{url("product/add?goods_id=")}}{{$detail->id}}&category_id={{$detail->category_id}}">
                                    <button class="btn btn-info btn-flat pull-right">添加产品</button>
                                </a>
                            </div>
                            <div class="box-body">
                                <div class="col-sm-12 table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>产品名称</th>
                                            <th>规格参数</th>
                                            <th>原价</th>
                                            <th>现价</th>
                                            <th>状态</th>
                                            <th style="width: 270px">操作</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($productList as $product)
                                            <tr>
                                                <td>
                                                    {{$product->name}}
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    {{$product->origin_price}}
                                                </td>
                                                <td>
                                                    {{$product->price}}
                                                </td>
                                                <td>
                                                    {{$product->state}}
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-success btn-flat">详情
                                                    </button>
                                                    <button type="button" class="btn btn-info btn-flat">修改</button>
                                                    <button type="button" class="btn btn-warning  btn-flat">下架
                                                    </button>
                                                    <button type="button" class="btn btn-danger  btn-flat">删除
                                                    </button>
                                                </td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="box-footer">
                            </div>
                        </div>
                    </div>
                    <!-- 轮播图 -->
                    <div class="tab-pane" id="banner-pane">
                        <div class="box table-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title">轮播图</h3>
                                <a href=" {{url("product/add?goods_id=")}}{{$detail->id}}&category_id={{$detail->category_id}}">
                                    <button class="btn btn-info btn-flat pull-right">添加图片</button>
                                </a>
                            </div>
                            <div class="box-body">
                                <div class="col-sm-12 table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                        <tr>
                                            <th style="width: 250px;">图片名称</th>
                                            <th>图片地址</th>
                                            <th style="width: 250px;">排序</th>
                                            <th style="width: 270px">操作</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($productList as $product)
                                            <tr>
                                                <td>
                                                    {{$product->name}}
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    {{$product->origin_price}}
                                                </td>
                                                <td>
                                                    {{$product->price}}
                                                </td>
                                                <td>
                                                    {{$product->state}}
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-success btn-flat">详情
                                                    </button>
                                                    <button type="button" class="btn btn-info btn-flat">修改</button>
                                                    <button type="button" class="btn btn-warning  btn-flat">下架
                                                    </button>
                                                    <button type="button" class="btn btn-danger  btn-flat">删除
                                                    </button>
                                                </td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="box-footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
