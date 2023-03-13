import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from 'antd';

const API_URL = "http://plagstore-env.eba-p8qspvph.us-east-2.elasticbeanstalk.com/"

function getSalesByCategory() {
    return axios.get(API_URL + "salesByCategory").then((response) => response.data)
}

function SalesByCategory(){

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let mounted = true;
        getSalesByCategory().then((data) => {
            if (mounted){
                setCategories(data);
            }
        })
        return () => (mounted = false);
    }, []);

    const columns = [
        {
          title: 'Categoria',
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
        <Table columns={columns} dataSource={categories} />
    </div>
    );
}

export default SalesByCategory;