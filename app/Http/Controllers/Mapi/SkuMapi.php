<?php

namespace App\Http\Controllers\Mapi;

use App\Http\Controllers\Controller;
use App\Http\Service\SkuService;
use App\Http\Util\JsonResult;
use Illuminate\Http\Request;

/**
 * Class SkuMapi
 *
 * @package App\Http\Controllers\Mapi
 */
class SkuMapi extends Controller
{
    /**
     * @var SkuService
     */
    private $skuService;

    /**
     * 分页获取所有的
     *
     * @param Request $request
     * @return JsonResult
     */
    public function list(Request $request)
    {
        $req = $request->all();
        return $this->skuService->getPagedSku($req);
    }

    /**
     * spu id获取sku
     *
     * @param Request $request
     * @return JsonResult
     */
    public function listBySpu(Request $request)
    {
        $req = $request->all();
        return $this->skuService->getSkuBySpu($req);
    }

    /**
     * 创建Sku
     *
     * @param Request $request
     * @return JsonResult
     */
    public function create(Request $request)
    {
        $req = $request->all();
        return $this->skuService->createSku($req);
    }

    /**
     * 更新sku
     *
     * @param Request $request
     * @return JsonResult
     */
    public function update(Request $request)
    {
        $req = $request->all();
        return $this->skuService->updateSku($req);
    }

    /**
     * 获取sku详情
     *
     * @param Request $request
     * @return JsonResult
     */
    public function detail(Request $request)
    {
        $req = $request->all();
        return $this->skuService->getSkuById($req);
    }

    /**
     * 删除广告
     *
     * @param Request $request
     * @return JsonResult
     */
    public function delete(Request $request)
    {
        $req = $request->all();
        return $this->skuService->deleteSku($req);
    }

    /**
     * 设置SKU是否推荐
     *
     * @param Request $request
     * @return JsonResult
     */
    public function modifyRecom(Request $request)
    {
        $req = $request->all();
        return $this->skuService->modifySkuRecom($req);
    }

    /**
     * 设置SKU是否热销
     *
     * @param Request $request
     * @return JsonResult
     */
    public function modifyHot(Request $request)
    {
        $req = $request->all();
        return $this->skuService->modifySkuHot($req);
    }

    public function modifySkuState(Request $request)
    {
        $req = $request->all();
        return $this->skuService->modifySkuState($req);
    }

    /**
     * SkuMapi constructor.
     *
     * @param SkuService $skuService
     */
    public function __construct(SkuService $skuService)
    {
        $this->middleware("auth-mapi");
        $this->skuService = $skuService;
    }
}
