<?php

namespace App\Http\Controllers\Mapi;

use App\Http\Controllers\Controller;
use App\Http\Service\AfterSaleService;
use Illuminate\Http\Request;

/**
 * Class AfterSaleMapi
 *
 * @package App\Http\Controllers\Mapi
 */
class AfterSaleMapi extends Controller
{
    /**
     * @var AfterSaleService
     */
    private $afterSaleService;


    /**
     * 分页分状态获取
     *
     * @param Request $request
     * @return \App\Http\Util\JsonResult
     */
    public function list(Request $request)
    {
        $req = $request->all();
        return $this->afterSaleService->getAsPagedListByType($req);
    }

    /**
     * 退款
     *
     * @param Request $request
     * @return \App\Http\Util\JsonResult
     */
    public function refund(Request $request)
    {
        $req = $request->all();
        return $this->afterSaleService->refundAfterSale($req);
    }

    /**
     * 微信订单调用
     *
     * @param Request $request
     * @return string
     */
    public function wxCallBack(Request $request)
    {
        return $this->afterSaleService->dealWxCallBack($request);
    }

    /**
     * 修改售后订单状态
     *
     * @param Request $request
     * @return \App\Http\Util\JsonResult
     */
    public function modifyState(Request $request)
    {
        $req = $request->all();
        return $this->afterSaleService->updateAfterSaleState($req);
    }

    /**
     * AfterSaleFapi constructor.
     *
     * @param AfterSaleService $afterSaleService
     */
    public function __construct(AfterSaleService $afterSaleService)
    {
        $this->middleware("auth-mapi");
        $this->afterSaleService = $afterSaleService;
    }
}
