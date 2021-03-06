<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSkuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sku', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("spu_id")->comment("商品id");
            $table->string("name")->comment("名称");
            $table->string("brief")->comment("简述");
            $table->decimal("origin_price")->default(0);
            $table->decimal("price")->default(0);
            $table->unsignedInteger("number")->default(0)->comment("sku数量");
            $table->tinyInteger("state")->default(0);
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sku');
    }
}
