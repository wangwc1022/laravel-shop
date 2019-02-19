<?php
/**
 * Created by PhpStorm.
 * User: wangwenchao
 * Date: 2019/1/24
 * Time: 11:06
 */

namespace App\Http\Controllers\Fapi;


use App\Http\Controllers\Controller;
use App\Http\Enum\StatusCode;
use App\Http\Service\CollectionService;
use App\Http\Util\JsonResult;
use Illuminate\Http\Request;

/**
 * Class CollectionFapi
 *
 * @package App\Http\Controllers\Fapi
 */
class CollectionFapi extends Controller
{
    /**
     * @var CollectionService
     */
    private $collectionService;

    /**
     * 创建
     *
     * @param Request $request
     * @return JsonResult
     */
    public function create(Request $request)
    {
        $req = $request->all();
        if (empty($req["userId"]) || empty($req["skuId"])) return new JsonResult(StatusCode::PARAM_LACKED);
        $result = $this->collectionService->createCollection($req);
        if ($result) return new JsonResult(); else return new JsonResult(StatusCode::SERVER_ERROR);
    }

    /**
     * 删除收藏
     *
     * @param Request $request
     * @return JsonResult
     */
    public function remove(Request $request)
    {
        $req = $request->all();
        if (empty($req["userId"]) || empty($req["skuIds"])) return new JsonResult(StatusCode::PARAM_LACKED);
        $result = $this->collectionService->removeCollection($req["userId"], $req["skuIds"]);
        if ($result) return new JsonResult(); else return new JsonResult(StatusCode::SERVER_ERROR);
    }

    /**
     * 判断sku是否收藏
     *
     * @param Request $request
     * @return JsonResult
     */
    public function check(Request $request)
    {
        $req = $request->all();
        $collection = $this->collectionService->getCollectionByUserSku($req);
        $result = new \stdClass();
        if (empty($collection)) $result->isCollect = 0;
        else $result->isCollect = 1;
        return new JsonResult(StatusCode::SUCCESS, $result);
    }

    /**
     * 分页获取收藏列表
     *
     * @param Request $request
     * @return JsonResult
     */
    public function list(Request $request)
    {
        $req = $request->all();
        $result = $this->collectionService->getCollectionList($req);
        return new JsonResult(StatusCode::SUCCESS, $result);
    }

    /**
     * CollectionFapi constructor.
     *
     * @param CollectionService $collectionService
     */
    public function __construct(CollectionService $collectionService)
    {
        $this->collectionService = $collectionService;
    }
}