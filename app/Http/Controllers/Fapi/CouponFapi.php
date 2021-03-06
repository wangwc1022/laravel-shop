<?php

namespace App\Http\Controllers\Fapi;

use App\Http\Controllers\Controller;
use App\Http\Enum\StatusCode;
use App\Http\Service\CouponService;
use App\Http\Util\JsonResult;
use Illuminate\Http\Request;

/**
 * Class CouponFapi
 *
 * @package App\Http\Controllers\Fapi
 */
class CouponFapi extends Controller
{
    /**
     * @var CouponService
     */
    private $couponService;

    /**
     * 获取用户领取的优惠券
     *
     * @param Request $request
     * @return JsonResult
     */
    public function listByUser(Request $request)
    {
        $req = $request->all();
        return $this->couponService->getPagedCouponListByStateUser($req);
    }

    /**
     * 手动获取的优惠券列表
     *
     * @param Request $request
     * @return JsonResult
     */
    public function list(Request $request)
    {
        $req = $request->all();
        return $this->couponService->getUserGetCouponList($req);
    }

    /**
     * 获取优惠券
     *
     * @param Request $request
     * @return JsonResult
     */
    public function add(Request $request)
    {
        $req = $request->all();
        return $this->couponService->addCouponToUser($req);
    }

    /**
     * CouponFapi constructor.
     *
     * @param CouponService $couponService
     */
    public function __construct(CouponService $couponService)
    {
        $this->middleware("auth-fapi");
        $this->couponService = $couponService;
    }
}
