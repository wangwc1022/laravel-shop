@extends('admin.layouts.app')
@section('title', '商品属性')
@section('subtitle', '属性列表')
@section('content')
    <div class="box box-primary">
        <div class="box-header with-border">
            <a href="{{ url("attributeGroup/add") }}">
                <button type="button" class="btn btn-sm btn-success btn-flat">添加属性组</button>
            </a>
            <a href="{{ url("attribute/add") }}">
                <button type="button" class="btn btn-sm btn-success btn-flat">添加属性</button>
            </a>
        </div>
        <div class="box-body table-responsive">
            <table class="table table-hover">
                <tr>
                    <th style="width: 40px;">
                        <label>
                            <input type="checkbox">
                        </label>
                    </th>
                    <th style="width: 150px;">名称</th>
                    <th style="width: 150px;">属性组</th>
                    <th style="width: 150px;">分类</th>
                    <th>可选选项</th>
                    <th style="width: 270px">操作</th>
                </tr>
                @foreach($attributes as $attribute)
                    <tr role="row">
                        <td>
                            <label>
                                <input type="checkbox">
                            </label>
                        </td>
                        <td>{{ $attribute->name }}</td>
                        <td>{{ $attribute->group_name}}</td>
                        <td>
                            {{$attribute->category_name}}
                        </td>
                        <td>
                            @if($attribute->options)
                                @foreach($attribute->options as $option)
                                    <span class="label label-info">{{$option->name}}</span>
                                @endforeach
                            @endif
                        </td>
                        <td>
                            <a href="{{ url("attributeOption/add?attributeId=") }}{{$attribute->id}}">
                                <button type="button" class="btn btn-success btn-flat">添加选项</button>
                            </a>
                            {{--<div class="btn-group">--}}
                            <button type="button" class="btn btn-info btn-flat">修改</button>
                            {{--<button type="button" class="btn btn-warning  btn-flat">下架</button>--}}
                            <button type="button" class="btn btn-danger  btn-flat">删除</button>
                            {{--</div>--}}
                        </td>
                    </tr>
                @endforeach
            </table>
        </div>
    </div>
@endsection
