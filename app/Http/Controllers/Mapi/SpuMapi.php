<?php

namespace App\Http\Controllers\Mapi;

use App\Http\Controllers\Controller;
use App\Http\Enum\StatusCode;
use App\Http\Service\SkuService;
use App\Http\Service\SpuService;
use App\Http\Util\JsonResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Psy\Util\Json;

/**
 * Class SpuMapi
 *
 * @package App\Http\Controllers\Mapi
 */
class SpuMapi extends Controller
{
    /**
     * @var SpuService
     */
    private $spuService;

    /**
     * @param Request $request
     */
    public function list(Request $request)
    {
    }

    /**
     * 分页获取SPU
     *
     * @param Request $request
     * @return JsonResult
     */
    public function listByPage(Request $request)
    {
        $req = $request->all();
        return $this->spuService->getPagedSpuList($req);
    }

    /**
     * 获取spu对应的spec列表
     *
     * @param Request $request
     * @return JsonResult
     */
    public function listSpec(Request $request)
    {
        $req = $request->all();
        return $this->spuService->getSpuSpecList($req);
    }

    /**
     * 获取规格选项列表
     *
     * @param Request $request
     * @return JsonResult
     */
    public function listSpecOption(Request $request)
    {
        $req = $request->all();
        return $this->spuService->getSpuSpecListWithOption($req);
    }

    /**
     * 获取单个规格的选项
     *
     * @param Request $request
     * @return JsonResult
     */
    public function listOption(Request $request)
    {
        $req = $request->all();
        return $this->spuService->getSpecOptionList($req);
    }

    /**
     * 创建选项
     *
     * @param Request $request
     * @return JsonResult
     */
    public function createOption(Request $request)
    {
        $req = $request->all();
        return $this->spuService->insertSpuSpecOption($req);
    }

    /**
     * 创建SPU
     *
     * @param Request $request
     * @return JsonResult
     */
    public function create(Request $request)
    {
        $req = $request->all();
        return $this->spuService->createSpu($req);
    }

    /**
     * 获取spu
     *
     * @param Request $request
     * @return JsonResult
     */
    public function detail(Request $request)
    {
        $req = $request->all();
        return $this->spuService->getSpuWithDetail($req);
    }

    /**
     * spu添加特定的规格及选项
     *
     * @param Request $request
     * @return JsonResult
     */
    public function relateSpec(Request $request)
    {
        $req = $request->all();
        return $this->spuService->insertSpuSpecList($req);
    }

    /**
     * SpuMapi constructor.
     *
     * @param SpuService $spuService
     */
    public function __construct(SpuService $spuService)
    {
        $this->spuService = $spuService;
    }
}
