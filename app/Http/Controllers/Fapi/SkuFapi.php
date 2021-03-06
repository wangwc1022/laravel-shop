<?php

namespace App\Http\Controllers\Fapi;

use App\Http\Controllers\Controller;
use App\Http\Dao\CollectionDao;
use App\Http\Enum\StatusCode;
use App\Http\Service\SkuService;
use App\Http\Util\JsonResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

/**
 * Class SkuFapi
 *
 * @package App\Http\Controllers\Fapi
 */
class SkuFapi extends Controller
{
    /**
     * @var SkuService
     */
    private $skuService;

    /**
     * 产品详情页
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
     * 分页获取
     *
     * @param Request $request
     * @return JsonResult
     */
    public function list(Request $request)
    {
        $req = $request->all();
        return $this->skuService->getPagedSkuEffect($req);
    }

    /**
     * 通过SPU获取
     *
     * @param Request $request
     * @return JsonResult
     */
    public function listBySpu(Request $request)
    {
        $req = $request->all();
        return $this->skuService->getSkuListBySpuIdEffect($req);
    }

    /**
     * 分类获取
     *
     * @param Request $request
     * @return JsonResult
     */
    public function listByCategory(Request $request)
    {
        $req = $request->all();
        return $this->skuService->getPagedSkuByCategoryEffect($req);
    }

    /**
     * 通过品牌和分类获取商品
     *
     * @param Request $request
     * @return JsonResult
     */
    public function listByCategoryBrand(Request $request)
    {
        $req = $request->all();
        return $this->skuService->getPagedSkuByCategoryBrandEffect($req);
    }

    /**
     * 获取推荐商品
     *
     * @return JsonResult
     */
    public function recom()
    {
        return $this->skuService->getRecomSkuList();
    }

    /**
     * 获取热销商品
     *
     * @return JsonResult
     */
    public function hot()
    {
        return $this->skuService->getHotSkuList();
    }

    /**
     * 搜索
     *
     * @param Request $request
     * @return JsonResult
     */
    public function search(Request $request)
    {
        $req = $request->all();
        return $this->skuService->searchSkuByName($req);
    }

    /**
     * SkuFapi constructor.
     *
     * @param SkuService $skuService
     */
    public function __construct(SkuService $skuService)
    {
        $this->middleware("auth-fapi");
        $this->skuService = $skuService;
    }
}
