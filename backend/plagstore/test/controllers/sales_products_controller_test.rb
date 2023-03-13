require 'test_helper'

class SalesProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sales_product = sales_products(:one)
  end

  test "should get index" do
    get sales_products_url, as: :json
    assert_response :success
  end

  test "should create sales_product" do
    assert_difference('SalesProduct.count') do
      post sales_products_url, params: { sales_product: { product_id: @sales_product.product_id, quantity: @sales_product.quantity, sale_id: @sales_product.sale_id } }, as: :json
    end

    assert_response 201
  end

  test "should show sales_product" do
    get sales_product_url(@sales_product), as: :json
    assert_response :success
  end

  test "should update sales_product" do
    patch sales_product_url(@sales_product), params: { sales_product: { product_id: @sales_product.product_id, quantity: @sales_product.quantity, sale_id: @sales_product.sale_id } }, as: :json
    assert_response 200
  end

  test "should destroy sales_product" do
    assert_difference('SalesProduct.count', -1) do
      delete sales_product_url(@sales_product), as: :json
    end

    assert_response 204
  end
end
