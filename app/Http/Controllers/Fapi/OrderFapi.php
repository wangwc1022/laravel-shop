<?php

namespace App\Http\Controllers\Fapi;

use App\Http\Controllers\Controller;
use App\Http\Enum\StatusCode;
use App\Http\Service\OrderService;
use App\Http\Util\JsonResult;
use Illuminate\Http\Request;

/**
 * Class OrderFapi
 *
 * @package App\Http\Controllers\Fapi
 */
class OrderFapi extends Controller
{
    /**
     * @var OrderService
     */
    private $orderService;

    /**
     * 创建订单
     *
     * @param Request $request
     * @return JsonResult
     */
    public function create(Request $request)
    {
        $req = $request->all();
        return $this->orderService->createOrder($req);
    }

    /**
     * 取消订单
     *
     * @param Request $request
     * @return JsonResult
     */
    public function cancel(Request $request)
    {
        $req = $request->all();
        return $this->orderService->cancelOrder($req);
    }

    /**
     * 删除订单
     *
     * @param Request $request
     * @return JsonResult
     */
    public function delete(Request $request)
    {
        $req = $request->all();
        return $this->orderService->deleteOrder($req);
    }

    /**
     * 通过用户获取
     *
     * @param Request $request
     * @return JsonResult
     */
    public function list(Request $request)
    {
        $req = $request->all();
        return $this->orderService->getPagedOrderListByStatusUser($req);
    }


    /**
     * 获取每种状态的订单数量
     *
     * @param Request $request
     * @return JsonResult
     */
    public function number(Request $request)
    {
        $req = $request->all();
        return $this->orderService->getOrderStatusNumberByUser($req);
    }

    /**
     * OrderFapi constructor.
     *
     * @param OrderService $orderService
     */
    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }
}
