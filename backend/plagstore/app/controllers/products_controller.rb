class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  # GET /products
  def index
    @products = Product.all

    render json: @products
  end

  # GET /products/1
  def show
    render json: @product
  end

  # POST /products
  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  # GET /salesByProduct
  def salesByProduct
    @products = Product.all
    productsWithSales= []
    for product in @products do
      productWithSales = {"name" =>  product.name, "sales" => 0, "total" => 0}
      sales = product.sales_products.all
      productWithSales["sales"] += sales.length()
      for sale in sales do
        productWithSales["total"] += sale.quantity
      end
      productsWithSales << productWithSales
    end
    render json: productsWithSales
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_params
      params.require(:product).permit(:product_id, :name, :price)
    end
end
