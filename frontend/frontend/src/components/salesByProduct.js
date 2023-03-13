import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from 'antd';

const API_URL = "http://plagstore-env.eba-p8qspvph.us-east-2.elasticbeanstalk.com/"

function getSalesByProduct() {
    return axios.get(API_URL + "salesByProduct").then((response) => response.data)
}

function SalesByProduct(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let mounted = true;
        getSalesByProduct().then((data) => {
            if (mounted){
                setProducts(data);
            }
        })
        return () => (mounted = false);
    }, []);

    const columns = [
        {
          title: 'Producto',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Ventas',
          dataIndex: 'sales',
          key: 'sales',
          sorter: (a, b) => a.sales - b.sales,
        },
        {
          title: 'Productos totales vendidos',
          dataIndex: 'total',
          key: 'total',
          sorter: (a, b) => a.total - b.total,
        },
    ];

    return (
    <div>
        <Table columns={columns} dataSource={products}/>
    </div>
    );
}

export default SalesByProduct;