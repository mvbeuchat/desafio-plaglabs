class SalesProductsController < ApplicationController
  before_action :set_sales_product, only: [:show, :update, :destroy]

  # GET /sales_products
  def index
    @sales_products = SalesProduct.all

    render json: @sales_products
  end

  # GET /sales_products/1
  def show
    render json: @sales_product
  end

  # POST /sales_products
  def create
    @sales_product = SalesProduct.new(sales_product_params)

    if @sales_product.save
      render json: @sales_product, status: :created, location: @sales_product
    else
      render json: @sales_product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sales_products/1
  def update
    if @sales_product.update(sales_product_params)
      render json: @sales_product
    else
      render json: @sales_product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sales_products/1
  def destroy
    @sales_product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sales_product
      @sales_product = SalesProduct.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sales_product_params
      params.require(:sales_product).permit(:sale_id, :product_id, :quantity)
    end
end
