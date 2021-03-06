<?php
/**
 * Created by PhpStorm.
 * User: wangwenchao
 * Date: 2019/1/14
 * Time: 09:51
 */

namespace App\Http\Dao;


use App\Http\Model\SpuSpecOption;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SpecificationOptionDao
{

    /**
     * @var SpuSpecOption
     */
    private $specificationOption;

    /**
     * 添加
     *
     * @param SpuSpecOption $specificationOption
     * @return mixed
     */
    public function insert(SpuSpecOption $specificationOption)
    {
        $result = $specificationOption->save();
        return $result;
    }

    /**
     * 批量插入
     *
     * @param array $data
     * @return bool
     */
    public function insertList(Array $data)
    {
        $result = DB::table($this->specificationOption->getTable())->insert($data);
        return $result;
    }

    /**
     * id 查找
     *
     * @param int $id
     * @return mixed
     */
    public function findById(int $id)
    {
        $result = $this->specificationOption::where(["id" => $id])
            ->first();
        return $result;
    }

    /**
     * 根据规格id查找
     *
     * @param int $specificationId
     * @return mixed
     */
    public function findBySpecificationId(int $specificationId)
    {
        $result = $this->specificationOption::where(["specification_id" => $specificationId])
            ->get();
        return $result;
    }

    /**
     * SpecificationOptionDao constructor.
     *
     * @param SpuSpecOption $specificationOption
     */
    public function __construct(SpuSpecOption $specificationOption)
    {
        $this->specificationOption = $specificationOption;
    }
}